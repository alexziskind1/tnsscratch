var observable_1 = require("data/observable");
var ui_1 = require("ui");
var color_1 = require("color");
var navigationModule = require("./common/navigation");
var myglobalModule = require("./common/myglobal");
var geometry_1 = require("./common/geometry");
var linkItem_1 = require("./model/linkItem");
var linkView_1 = require("./views/linkView");
var imageView_1 = require("./views/imageView");
var RootPageController = (function (_super) {
    __extends(RootPageController, _super);
    function RootPageController() {
        _super.apply(this, arguments);
        this.isInEditMode = false;
        this.linkViews = [];
        this.message = "hi there";
        this.currentRect = new ui_1.AbsoluteLayout();
        this.selectRectId = "currentRect";
        this.layoutBaseId = "layoutBase";
        this.editBtnId = "editBtn";
        this.wrapperClassNameProp = "wrapperClassName";
        this.wrapEditClassName = "wrapper";
        this.startPoint = new geometry_1.Point(0, 0);
        this.selRect = new geometry_1.Rect(0, 0, 0, 0);
    }
    RootPageController.prototype.pageLoaded = function (args) {
        var _this = this;
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
        this.currentRect.id = this.selectRectId;
        this.currentRect.style.backgroundColor = new color_1.Color(150, 100, 100, 100);
        var editBtn = new ui_1.Button();
        editBtn.text = "make";
        editBtn.id = this.editBtnId;
        editBtn.opacity = 0;
        editBtn.className = "btn-convert";
        editBtn.on('tap', function () {
            var li = new linkItem_1.LinkItem('', _this.selRect, _this.pageSize, false);
            _this.currentNavPage.linkItems.push(li);
            _this.drawLink(li);
        });
        this.currentRect.addChild(editBtn);
    };
    RootPageController.prototype.navigatingTo = function (args) {
        this.page = args.object;
        this.page.bindingContext = this;
        //this.pageImg = <Image>this.page.getViewById("pageImg");
        this.layout = this.page.getViewById(this.layoutBaseId);
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
        this.clearSelection();
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
    RootPageController.prototype.panPage = function (arg1) {
        switch (arg1.state) {
            case ui_1.GestureStateTypes.began:
                this.selRect.origin.x = arg1.ios.locationInView(arg1.ios.view).x;
                this.selRect.origin.y = arg1.ios.locationInView(arg1.ios.view).y;
                this.startPoint.x = this.selRect.origin.x;
                this.startPoint.y = this.selRect.origin.y;
                this.selRect.size.width = 0;
                this.selRect.size.height = 0;
                this.drawRectUpdate(arg1.state);
                break;
            case ui_1.GestureStateTypes.changed:
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
            case ui_1.GestureStateTypes.ended:
                this.showEditBtn();
                break;
        }
    };
    RootPageController.prototype.showEditBtn = function (duration) {
        if (duration === void 0) { duration = 250; }
        return this.toggleEditBtn(true, duration);
    };
    RootPageController.prototype.hideEditBtn = function (duration) {
        if (duration === void 0) { duration = 250; }
        return this.toggleEditBtn(false, duration);
    };
    RootPageController.prototype.toggleEditBtn = function (show, duration) {
        var ch = this.layout.getViewById(this.selectRectId);
        if (ch != null) {
            var editBtn = ch.getViewById(this.editBtnId);
            return editBtn.animate({
                opacity: show ? 1 : 0,
                duration: duration
            });
        }
    };
    RootPageController.prototype.drawRectUpdate = function (state) {
        if (state == ui_1.GestureStateTypes.began) {
            this.hideEditBtn(1);
        }
        ui_1.AbsoluteLayout.setTop(this.currentRect, this.selRect.origin.y);
        ui_1.AbsoluteLayout.setLeft(this.currentRect, this.selRect.origin.x);
        this.currentRect.width = this.selRect.size.width;
        this.currentRect.height = this.selRect.size.height;
        var ch = this.layout.getViewById(this.selectRectId);
        if (ch == null)
            this.layout.addChild(this.currentRect);
    };
    RootPageController.prototype.clearSelection = function () {
        var _this = this;
        var ch = this.layout.getViewById(this.selectRectId);
        if (ch != null) {
            var p = this.hideEditBtn(1);
            if (p != null) {
                p.then(function () {
                    _this.layout.removeChild(ch);
                });
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
            case ui_1.GestureStateTypes.began:
                if (this.isInEditMode) {
                    this.exitEditMode();
                }
                else {
                    this.enterEditMode();
                }
                break;
            case ui_1.GestureStateTypes.changed:
                break;
            case ui_1.GestureStateTypes.ended:
                break;
        }
    };
    RootPageController.prototype.enterEditMode = function () {
        this.isInEditMode = true;
        this.drawLinks(this.currentNavPage.linkItems);
        this.set(this.wrapperClassNameProp, this.wrapEditClassName);
    };
    RootPageController.prototype.drawLinks = function (linkItems) {
        for (var i = 0; i < linkItems.length; i++) {
            var li = linkItems[i];
            this.drawLink(li);
        }
    };
    RootPageController.prototype.drawLink = function (li) {
        var _this = this;
        var relRect = li.rect.changeRatio(li.parentSize, this.pageSize);
        var lv = new linkView_1.LinkView(li, relRect, function () { return _this.showLinkPicker(lv, li); });
        lv.opacity = 0;
        this.linkViews.push(lv);
        this.layout.addChild(lv);
        lv.fadeIn();
    };
    RootPageController.prototype.exitEditMode = function () {
        this.isInEditMode = false;
        for (var i = 0; i < this.linkViews.length; i++) {
            var lv = this.linkViews[i];
            this.removeLinkView(lv);
        }
        this.linkViews = [];
        this.set(this.wrapperClassNameProp, "");
    };
    RootPageController.prototype.showLinkPicker = function (lv, li) {
        var _this = this;
        var fullscreen = true;
        this.page.showModal("./linkPicker", li.name, function (args) {
            console.log("rootPage received LinkPickerClosedEventArgs");
            if (args.canceled) {
                return;
            }
            if (args.linkDeleted) {
                var liIdx = _this.currentNavPage.linkItems.indexOf(li);
                var lvIdx = _this.linkViews.indexOf(lv);
                _this.currentNavPage.linkItems.splice(liIdx, 1);
                _this.removeLinkView(lv);
                _this.linkViews.splice(lvIdx, 1);
            }
            else {
                li.name = args.selectedName;
            }
        }, fullscreen);
    };
    RootPageController.prototype.removeLinkView = function (lv) {
        var _this = this;
        //var lvIdx = this.linkViews.indexOf(lv);
        //this.linkViews.splice(lvIdx,1);
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
