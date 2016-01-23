var observable_1 = require("data/observable");
var gestures_1 = require("ui/gestures");
var navigationModule = require("./shared/navigation");
var point_1 = require("./point");
//import {LinkViewOptions} from "./views/linkViewOptions";
var linkView_1 = require("./views/linkView");
var imageSourceModule = require("image-source");
var RootPageController = (function (_super) {
    __extends(RootPageController, _super);
    function RootPageController() {
        _super.apply(this, arguments);
        this.isInEditMode = false;
        this.linkViews = [];
        this.message = "hi there";
    }
    RootPageController.prototype.pageLoaded = function (args) {
        var height = this.page.getMeasuredHeight();
        var width = this.page.getMeasuredWidth();
        this.set("message", "height: " + height + ", width: " + width);
    };
    RootPageController.prototype.navigatingTo = function (args) {
        this.page = args.object;
        this.page.bindingContext = this;
        this.pageImg = this.page.getViewById("pageImg");
        this.layout = this.page.getViewById("layoutBase");
        if (args.context != null) {
            this.currentNavPage = args.context;
        }
        else {
            this.currentNavPage = navigationModule.navigation.startPage();
        }
        this.setImage(this.currentNavPage.name);
    };
    RootPageController.prototype.tapAction = function (args) {
        this.setImage(this.currentNavPage.name);
    };
    RootPageController.prototype.tapPage = function (arg1) {
        if (this.isInEditMode) {
            return;
        }
        var x = arg1.ios.locationInView(arg1.ios.view).x;
        var y = arg1.ios.locationInView(arg1.ios.view).y;
        var hitPoint = new point_1.Point(x, y);
        var matchedLink;
        this.currentNavPage.linkItems.forEach(function (l) {
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
    };
    RootPageController.prototype.doubleTap = function (arg1) {
        console.log('double tap');
    };
    RootPageController.prototype.longPress = function (arg1) {
        //dialogs.action("Your message", "Cancel button text", ["Option1", "Option2", "Option2", "Option2", "Option2", "Option2", "Option2", "Option2", "Option2", "Option2"]).then(result => {
        //    console.log("Dialog result: " + result)
        //});
        //this.drawLinks(this.currentNavPage.linkItems);
        switch (arg1.ios.state) {
            case gestures_1.GestureStateTypes.began:
                if (this.isInEditMode) {
                    this.exitEditMode();
                }
                else {
                    this.enterEditMode();
                }
                break;
            case gestures_1.GestureStateTypes.changed:
                break;
            case gestures_1.GestureStateTypes.ended:
                break;
        }
    };
    RootPageController.prototype.enterEditMode = function () {
        this.isInEditMode = true;
        this.drawLinks(this.currentNavPage.linkItems);
    };
    RootPageController.prototype.exitEditMode = function () {
        this.isInEditMode = true;
        for (var i = 0; i < this.linkViews.length; i++) {
            var lv = this.linkViews[i];
            this.layout.removeChild(lv);
        }
    };
    RootPageController.prototype.drawLinks = function (linkItems) {
        for (var i = 0; i < linkItems.length; i++) {
            var li = linkItems[i];
            var lv = new linkView_1.LinkView(li.rect);
            this.linkViews.push(lv);
            this.layout.addChild(lv);
        }
    };
    RootPageController.prototype.setImage = function (name) {
        //var image = new Image();
        //image.src = "~/images/" + name + ".png";
        //image.stretch = enumsModule.Stretch.aspectFit;
        //this.layout.addChild(image);
        this.pageImg.imageSource = imageSourceModule.fromResource(name + ".png");
        //this.pageImg.stretch = enumsModule.Stretch.aspectFit;
    };
    return RootPageController;
})(observable_1.Observable);
var pc = new RootPageController();
exports.pageLoaded = function (args) { return pc.pageLoaded(args); };
exports.navigatingTo = function (args) { return pc.navigatingTo(args); };
