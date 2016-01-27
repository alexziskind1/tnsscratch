import {Page} from "ui/page";
import {Observable} from "data/observable";
import {GestureEventData, GestureTypes, GestureStateTypes} from "ui/gestures";
import {NavPage} from "./model/navPage";
import navigationModule = require("./common/navigation");
import myglobalModule = require("./common/myglobal");
import {Image} from "ui/image";
import {AbsoluteLayout} from "ui/layouts/absolute-layout";
import {StackLayout} from "ui/layouts/stack-layout";
import {Point, Size} from "./common/geometry";
import {LinkItem} from "./model/linkItem";
import {LinkView} from "./views/linkView";
import {ImageView} from "./views/imageView";
import {LinkPickerClosedEventArgs} from "./common/events/linkPickerEventArgs";
import imageSourceModule = require("image-source");
import enumsModule = require("ui/enums");
import dialogs = require("ui/dialogs");


class RootPageController extends Observable {
    private page: Page;
    private currentNavPage: NavPage;
    //private pageImg: Image;
    private imageView: ImageView;
    private layout: StackLayout;
    private isInEditMode: boolean = false;
    private linkViews: Array<LinkView> = [];
    private pageSize: Size;
    public message: string = "hi there";

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
    }

    public navigatingTo(args) {
        this.page = <Page>args.object;
        this.page.bindingContext = this;



        //this.pageImg = <Image>this.page.getViewById("pageImg");
        this.layout = <StackLayout>this.page.getViewById("layoutBase");

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
    }

    private drawLinks(linkItems: Array<LinkItem>) {
        for (var i = 0; i < linkItems.length; i++) {
            var li = linkItems[i];
            //var relRect = utilModule.changeRectangleRatio(li.rect, li.parentSize, this.pageSize);
            var relRect = li.rect.changeRatio(li.parentSize,  this.pageSize);

            var lv = new LinkView(li, relRect, () =>  this.showLinkPicker(lv, li) );
            lv.opacity = 0;
            this.linkViews.push(lv);
            this.layout.addChild(lv);
            lv.fadeIn();
        }
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
    }


    public showLinkPicker(lv:LinkView, li: LinkItem) {
        var fullscreen: boolean = true;

        this.page.showModal("./linkPicker", li.name,  (args: LinkPickerClosedEventArgs) => {
            console.log("rootPage received LinkPickerClosedEventArgs");
            if (args.linkDeleted) {
                var liIdx = this.currentNavPage.linkItems.indexOf(li);
                this.currentNavPage.linkItems.splice(liIdx,1);

                this.removeLinkView(lv);
            }
            else {
                li.name = args.selectedName;
            }

        }, fullscreen);
    }

    private removeLinkView(lv: LinkView) {
        var lvIdx = this.linkViews.indexOf(lv);
        this.linkViews.splice(lvIdx,1);
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