import {Observable} from "data/observable";
import {Button, Image, AbsoluteLayout, Page,GestureEventData, GestureTypes, GestureStateTypes,GestureEventDataWithState, PanGestureEventData} from "ui";
import {Color} from "color";

import {NavPage} from "./model/navPage";
import navigationModule = require("./common/navigation");
import myglobalModule = require("./common/myglobal");
import {Point, Size, Rect} from "./common/geometry";
import {LinkItem} from "./model/linkItem";
import {LinkView} from "./views/linkView";
import {ImageView} from "./views/imageView";
import {LinkPickerClosedEventArgs} from "./common/events/linkPickerEventArgs";




class RootPageController extends Observable {
    private page: Page;
    private currentNavPage: NavPage;
    //private pageImg: Image;
    private imageView: ImageView;
    private layout: AbsoluteLayout;
    private isInEditMode: boolean = false;
    private linkViews: Array<LinkView> = [];
    private pageSize: Size;
    public message: string = "hi there";
    private currentRect = new AbsoluteLayout();
    private selectRectId = "currentRect";
    private layoutBaseId = "layoutBase";
    private editBtnId = "editBtn";
    private wrapperClassNameProp = "wrapperClassName";
    private wrapEditClassName = "wrapper";

    public pageLoaded(args) {
        var height = this.page.getMeasuredHeight();
        var width = this.page.getMeasuredWidth();
        this.pageSize = new Size(width, height);
        this.set("message", "height: " + height + ", width: " + width);
        if (myglobalModule.firstLoad) {
            this.imageView.requestLayout();
            //this.pageImg.requestLayout();
            myglobalModule.firstLoad = false;
        }

        myglobalModule.pageSize = this.pageSize;

        this.currentRect.id = this.selectRectId;
        this.currentRect.style.backgroundColor = new Color(150,100,100,100);
        var editBtn = new Button();
        editBtn.text = "make";
        editBtn.id = this.editBtnId;
        editBtn.opacity = 0;
        editBtn.className = "btn-convert";

        editBtn.on('tap', () => {
            var li: LinkItem = new LinkItem('', this.selRect, this.pageSize, false);
            this.currentNavPage.linkItems.push(li);
            this.drawLink(li);
        });

        this.currentRect.addChild(editBtn);
    }


    public navigatingTo(args) {
        this.page = <Page>args.object;
        this.page.bindingContext = this;



        //this.pageImg = <Image>this.page.getViewById("pageImg");
        this.layout = <AbsoluteLayout>this.page.getViewById(this.layoutBaseId);

        if (args.context != null) {
            this.currentNavPage = args.context;
        }
        else {
            this.currentNavPage = navigationModule.navigation.startPage();
        }
        this.setImage(this.currentNavPage.name);
    }

    public tapAction(args) {
        this.setImage(this.currentNavPage.name);
    }

    public tapPage(arg1: GestureEventData) {
        this.clearSelection();
        if (this.isInEditMode) {
            return;
        }

        var x = arg1.ios.locationInView(arg1.ios.view).x;
        var y = arg1.ios.locationInView(arg1.ios.view).y;

        var hitPoint: Point = new Point(x,y);
        var matchedLink: LinkItem;

        for (var i = 0; i < this.currentNavPage.linkItems.length; i++) {
            var li = this.currentNavPage.linkItems[i];
            if (li.isHitTestPositive(hitPoint, this.pageSize)) {
                matchedLink = li;
                break;
            }
        }

/*
        this.currentNavPage.linkItems.forEach(l=> {
            if (l.isHitTestPositive(hitPoint, this.pageSize)) {
                matchedLink = l;
            }
        });
        */

        if (matchedLink != null) {
            if (matchedLink.isBack) {
                navigationModule.navigation.goBack();
            }
            else {
                var nextPage = navigationModule.navigation.getPageByName(matchedLink.name);
                navigationModule.navigation.goToRoot(nextPage);
            }
        }
    }



    private startPoint: Point = new Point(0, 0);
    private selRect: Rect = new Rect(0, 0, 0, 0);

    public panPage(arg1: PanGestureEventData) {
        switch (arg1.state) {
            case GestureStateTypes.began:
                this.selRect.origin.x = arg1.ios.locationInView(arg1.ios.view).x;
                this.selRect.origin.y = arg1.ios.locationInView(arg1.ios.view).y;
                this.startPoint.x = this.selRect.origin.x;
                this.startPoint.y = this.selRect.origin.y;
                this.selRect.size.width = 0;
                this.selRect.size.height = 0;

                this.drawRectUpdate(arg1.state);
                break;
            case GestureStateTypes.changed:
                if (arg1.deltaX < 0) {
                    this.selRect.size.width = Math.abs(arg1.deltaX);
                    this.selRect.origin.x = this.startPoint.x - this.selRect.size.width;
                }
                else {
                    this.selRect.size.width = arg1.deltaX;
                }
                if (arg1.deltaY < 0) {
                    this.selRect.size.height = Math.abs(arg1.deltaY);
                    this.selRect.origin.y = this.startPoint.y - this.selRect.size.height;
                }
                else {
                    this.selRect.size.height = arg1.deltaY;
                }

                if (this.selRect.origin.x < 0)
                    this.selRect.origin.x = 0;
                if (this.selRect.origin.y < 0)
                    this.selRect.origin.y = 0;

                this.drawRectUpdate(arg1.state);
                break;
            case GestureStateTypes.ended:
                this.showEditBtn();
                break;
        }
    }

    private showEditBtn(duration: number = 250) {
        return this.toggleEditBtn(true, duration);
    }

    private hideEditBtn(duration: number = 250) {
        return this.toggleEditBtn(false, duration);
    }

    private toggleEditBtn(show: boolean, duration: number) {
        var ch: AbsoluteLayout = <AbsoluteLayout>this.layout.getViewById(this.selectRectId);
        if (ch != null) {
            var editBtn: Button = <Button>ch.getViewById(this.editBtnId);
            return editBtn.animate({
                opacity: show ? 1 : 0,
                duration: duration
            });
        }
    }

    public drawRectUpdate(state: GestureStateTypes) {
        if (state == GestureStateTypes.began) {
            this.hideEditBtn(1);
        }
        AbsoluteLayout.setTop(this.currentRect, this.selRect.origin.y);
        AbsoluteLayout.setLeft(this.currentRect, this.selRect.origin.x);

        this.currentRect.width = this.selRect.size.width;
        this.currentRect.height = this.selRect.size.height;

        var ch: AbsoluteLayout = <AbsoluteLayout>this.layout.getViewById(this.selectRectId);
        if (ch == null)
            this.layout.addChild(this.currentRect);
    }

    public clearSelection() {
        var ch: AbsoluteLayout = <AbsoluteLayout>this.layout.getViewById(this.selectRectId);
        if (ch != null) {
            var p = this.hideEditBtn(1);
            if (p != null) {
                p.then(()=>{
                    this.layout.removeChild(ch);
                });
            }
        }
    }



    public doubleTap(arg1: GestureEventData){
        console.log('double tap');
    }

    public longPress(arg1: GestureEventData){
        //dialogs.action("Your message", "Cancel button text", ["Option1", "Option2", "Option2", "Option2", "Option2", "Option2", "Option2", "Option2", "Option2", "Option2"]).then(result => {
        //    console.log("Dialog result: " + result)
        //});

        //this.drawLinks(this.currentNavPage.linkItems);

        switch (arg1.ios.state) {
            case GestureStateTypes.began:
                if (this.isInEditMode) {
                    this.exitEditMode();
                }
                else {
                    this.enterEditMode();
                }
                break;
            case GestureStateTypes.changed:

                break;
            case GestureStateTypes.ended:

                break;

        }

    }

    private enterEditMode() {
        this.isInEditMode = true;
        this.drawLinks(this.currentNavPage.linkItems);
        this.set(this.wrapperClassNameProp, this.wrapEditClassName);
    }

    private drawLinks(linkItems: Array<LinkItem>) {
        for (var i = 0; i < linkItems.length; i++) {
            var li = linkItems[i];
            this.drawLink(li);
            //var relRect = utilModule.changeRectangleRatio(li.rect, li.parentSize, this.pageSize);

        }
    }

    private drawLink(li: LinkItem) {
        var relRect = li.rect.changeRatio(li.parentSize,  this.pageSize);

        var lv = new LinkView(li, relRect, () =>  this.showLinkPicker(lv, li) );
        lv.opacity = 0;
        this.linkViews.push(lv);
        this.layout.addChild(lv);
        lv.fadeIn();
    }

    private exitEditMode() {
        this.isInEditMode = false;

        for (var i = 0; i < this.linkViews.length; i++){
            var lv = this.linkViews[i];

            this.removeLinkView(lv);

            /*
            lv.fadeOut().then(()=>{
                try {
                    this.layout.removeChild(lv);
                }
                catch (ex) { }
            });
            */
        }
        this.linkViews = [];
        this.set(this.wrapperClassNameProp, "");
    }


    public showLinkPicker(lv:LinkView, li: LinkItem) {
        var fullscreen: boolean = true;

        this.page.showModal("./linkPicker", li.name,  (args: LinkPickerClosedEventArgs) => {
            console.log("rootPage received LinkPickerClosedEventArgs");
            if (args.canceled) {
                return;
            }

            if (args.linkDeleted) {
                var liIdx = this.currentNavPage.linkItems.indexOf(li);
                var lvIdx = this.linkViews.indexOf(lv);
                this.currentNavPage.linkItems.splice(liIdx,1);

                this.removeLinkView(lv);
                this.linkViews.splice(lvIdx,1);
            }
            else {
                li.name = args.selectedName;
            }

        }, fullscreen);
    }

    private removeLinkView(lv: LinkView) {
        //var lvIdx = this.linkViews.indexOf(lv);
        //this.linkViews.splice(lvIdx,1);
        lv.fadeOut().then(()=>{
            try {
                this.layout.removeChild(lv);
            }
            catch (ex) {
                console.error(`failed removing lv from layout. ${ex.message}`);
            }
        });
    }


    private setImage(name: string) {

        this.imageView = new ImageView();
        this.imageView.src = "~/images/" + name + ".png";
        this.layout.addChild(this.imageView);

        /*
        this.pageImg = new Image();
        this.pageImg.src = "~/images/" + name + ".png";
        this.layout.addChild(this.pageImg);
        */
        //this.pageImg.imageSource = imageSourceModule.fromResource(name + ".png");
        //this.pageImg.stretch = enumsModule.Stretch.aspectFit;
    }
}

var pc = new RootPageController();
exports.pageLoaded = (args) => pc.pageLoaded(args);
exports.navigatingTo = (args) => pc.navigatingTo(args);