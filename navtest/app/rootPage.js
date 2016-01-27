var observable_1 = require("data/observable");
var gestures_1 = require("ui/gestures");
var navigationModule = require("./common/navigation");
var myglobalModule = require("./common/myglobal");
var geometry_1 = require("./common/geometry");
var linkView_1 = require("./views/linkView");
var imageView_1 = require("./views/imageView");
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
        this.pageSize = new geometry_1.Size(width, height);
        this.set("message", "height: " + height + ", width: " + width);
        if (myglobalModule.firstLoad) {
            this.imageView.requestLayout();
            //this.pageImg.requestLayout();
            myglobalModule.firstLoad = false;
        }
        myglobalModule.pageSize = this.pageSize;
    };
    RootPageController.prototype.navigatingTo = function (args) {
        this.page = args.object;
        this.page.bindingContext = this;
        //this.pageImg = <Image>this.page.getViewById("pageImg");
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
        var hitPoint = new geometry_1.Point(x, y);
        var matchedLink;
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
    RootPageController.prototype.drawLinks = function (linkItems) {
        var _this = this;
        for (var i = 0; i < linkItems.length; i++) {
            var li = linkItems[i];
            //var relRect = utilModule.changeRectangleRatio(li.rect, li.parentSize, this.pageSize);
            var relRect = li.rect.changeRatio(li.parentSize, this.pageSize);
            var lv = new linkView_1.LinkView(li, relRect, function () { return _this.showLinkPicker(lv, li); });
            lv.opacity = 0;
            this.linkViews.push(lv);
            this.layout.addChild(lv);
            lv.fadeIn();
        }
    };
    RootPageController.prototype.exitEditMode = function () {
        this.isInEditMode = false;
        for (var i = 0; i < this.linkViews.length; i++) {
            var lv = this.linkViews[i];
            this.removeLinkView(lv);
        }
        this.linkViews = [];
    };
    RootPageController.prototype.showLinkPicker = function (lv, li) {
        var _this = this;
        var fullscreen = true;
        this.page.showModal("./linkPicker", li.name, function (args) {
            console.log("rootPage received LinkPickerClosedEventArgs");
            if (args.linkDeleted) {
                var liIdx = _this.currentNavPage.linkItems.indexOf(li);
                _this.currentNavPage.linkItems.splice(liIdx, 1);
                _this.removeLinkView(lv);
            }
            else {
                li.name = args.selectedName;
            }
        }, fullscreen);
    };
    RootPageController.prototype.removeLinkView = function (lv) {
        var _this = this;
        var lvIdx = this.linkViews.indexOf(lv);
        this.linkViews.splice(lvIdx, 1);
        lv.fadeOut().then(function () {
            try {
                _this.layout.removeChild(lv);
            }
            catch (ex) {
                console.error("failed removing lv from layout. " + ex.message);
            }
        });
    };
    RootPageController.prototype.setImage = function (name) {
        this.imageView = new imageView_1.ImageView();
        this.imageView.src = "~/images/" + name + ".png";
        this.layout.addChild(this.imageView);
        /*
        this.pageImg = new Image();
        this.pageImg.src = "~/images/" + name + ".png";
        this.layout.addChild(this.pageImg);
        */
        //this.pageImg.imageSource = imageSourceModule.fromResource(name + ".png");
        //this.pageImg.stretch = enumsModule.Stretch.aspectFit;
    };
    return RootPageController;
})(observable_1.Observable);
var pc = new RootPageController();
exports.pageLoaded = function (args) { return pc.pageLoaded(args); };
exports.navigatingTo = function (args) { return pc.navigatingTo(args); };
