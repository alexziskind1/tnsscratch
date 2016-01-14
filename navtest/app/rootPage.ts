import {Page} from "ui/page";
import {Observable} from "data/observable";
import {GestureEventData, GestureTypes, GestureStateTypes} from "ui/gestures";
import {NavPage} from "./navPageObj";
import navigationModule = require("./shared/navigation");
import {Image} from "ui/image";
import {Point} from "./point";
import {LinkItem} from "./linkItem";
import imageSourceModule = require("image-source");
import enumsModule = require("ui/enums");

class RootPageController extends Observable {
    private page: Page;
    private currentNavPage: NavPage;
    private pageImg: Image;

    public pageLoaded(args) {
        //var page = <Page>args.object;
        //page.bindingContext = this;

        //this.pageImg = <Image>page.getViewById("pageImg");
    }
    
    public navigatingTo(args) {
        var page = <Page>args.object;
        page.bindingContext = this;

        this.pageImg = <Image>page.getViewById("pageImg");
        
        if (args.context != null) {
            this.currentNavPage = args.context;
        }
        else {
            this.currentNavPage = navigationModule.navigation.startPage();
        }
        this.setImage(this.currentNavPage.name);
    }

    public tapPage(arg1: GestureEventData) {
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

    private setImage(name: string) {
        this.pageImg.imageSource = imageSourceModule.fromResource(name + ".png");
        this.pageImg.stretch = enumsModule.Stretch.aspectFill;
    }
}

var pc = new RootPageController();
exports.pageLoaded = (args) => pc.pageLoaded(args);
exports.navigatingTo = (args) => pc.navigatingTo(args);