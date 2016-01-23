import {Page} from "ui/page";
import {Observable} from "data/observable";
import {GestureEventData, GestureTypes, GestureStateTypes} from "ui/gestures";
import {NavPage} from "./navPageObj";
import navigationModule = require("./shared/navigation");
import {Image} from "ui/image";
import {AbsoluteLayout} from "ui/layouts/absolute-layout";
import {StackLayout} from "ui/layouts/stack-layout";
import {Point} from "./point";
import {LinkItem} from "./linkItem";
//import {LinkViewOptions} from "./views/linkViewOptions";
import {LinkView} from "./views/linkView";
import imageSourceModule = require("image-source");
import enumsModule = require("ui/enums");
import dialogs = require("ui/dialogs");

class RootPageController extends Observable {
    private page: Page;
    private currentNavPage: NavPage;
    private pageImg: Image;
    private layout: StackLayout;
    private isInEditMode: boolean = false;
    private linkViews: Array<LinkView> = [];
    public message: string = "hi there";

    public pageLoaded(args) {
        var height = this.page.getMeasuredHeight();
        var width = this.page.getMeasuredWidth();
        this.set("message", "height: " + height + ", width: " + width);
    }

    public navigatingTo(args) {
        this.page = <Page>args.object;
        this.page.bindingContext = this;

        this.pageImg = <Image>this.page.getViewById("pageImg");
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

        this.currentNavPage.linkItems.forEach(l=> {
            if (l.isHitTestPositive(hitPoint)) {
                matchedLink = l;
            }
        });

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

    private exitEditMode() {
        this.isInEditMode = true;
        for (var i = 0; i < this.linkViews.length; i++){
            var lv = this.linkViews[i];
            this.layout.removeChild(lv);
        }
    }

    private drawLinks(linkItems: Array<LinkItem>) {
        for (var i = 0; i < linkItems.length; i++) {
            var li = linkItems[i];
            var lv = new LinkView(li.rect);
            this.linkViews.push(lv);
            this.layout.addChild(lv);
        }
    }


    private setImage(name: string) {
        //var image = new Image();
        //image.src = "~/images/" + name + ".png";
        //image.stretch = enumsModule.Stretch.aspectFit;
        //this.layout.addChild(image);
        
        this.pageImg.imageSource = imageSourceModule.fromResource(name + ".png");
        //this.pageImg.stretch = enumsModule.Stretch.aspectFit;
    }
}

var pc = new RootPageController();
exports.pageLoaded = (args) => pc.pageLoaded(args);
exports.navigatingTo = (args) => pc.navigatingTo(args);