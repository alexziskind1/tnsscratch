var gesturesModule = require("ui/gestures");
var colorModule = require("color");
var absoluteLayoutModule = require("ui/layouts/absolute-layout");
//import {PanStateEnum} from "./panStateEnum";
var point_1 = require("./point");
var myview_1 = require("./myview");
var myLabel_1 = require("./myLabel");
var myOptions_1 = require("./myOptions");
var UIColor;
var MainPageController = (function () {
    function MainPageController() {
        this.lastLocation = new point_1.Point(0, 0);
        this._level = 25;
        this.counter = 1;
    }
    Object.defineProperty(MainPageController.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (newLevel) {
            this._level = newLevel;
        },
        enumerable: true,
        configurable: true
    });
    MainPageController.prototype.pageLoaded = function (args) {
        this.page = args.object;
        this.page.bindingContext = this;
        this.getViewRefs();
        //this.attachEventListeners();
        //var newView = new MyView();
        //this.layoutBase.addChild(newView);
        /*
                var myLabel = new MyLabel();
                myLabel.text = "My Label";
                this.layoutBase.addChild(myLabel);
                */
    };
    MainPageController.prototype.getViewRefs = function () {
        this.layoutBase = this.page.getViewById("layoutBase");
        this.layoutAbs = this.page.getViewById("layoutAbs");
        this.lblDrag = this.page.getViewById("lblDrag");
    };
    MainPageController.prototype.tapAction = function () {
        var options = new myOptions_1.MyOptions;
        options.height = 50;
        options.width = 50;
        options.marginLeft = 0;
        options.marginRight = 60;
        options.marginTop = 2;
        options.marginBottom = 70;
        options.className = 'myview';
        var newView = new myview_1.MyView(options);
        newView.className = "myview";
        newView.backgroundColor = new colorModule.Color(1, 200, 0, 78);
        newView.style.backgroundColor = new colorModule.Color(1, 200, 0, 78);
        this.layoutBase.addChild(newView);
        var newAbsLay = new absoluteLayoutModule.AbsoluteLayout(options);
        newAbsLay.backgroundColor = new colorModule.Color(1, 200, 0, 78);
        this.layoutBase.addChild(newAbsLay);
        newAbsLay.borderColor = new colorModule.Color(1, 50, 100, 200);
        newAbsLay.borderWidth = 5;
        newAbsLay.ios.layer.borderWidth = 1.0;
        newAbsLay.ios.layer.borderColor = new colorModule.Color(1, 50, 100, 200);
        newAbsLay.ios.layer.cornerRadius = 2.0;
        newAbsLay.height = 40;
        newAbsLay.width = 60;
        newAbsLay.style.backgroundColor = new colorModule.Color(1, 200, 0, 78);
        //newAbsLay.ios.layer.setShadowOffset(CGSizeMake(-2, -2));
        //newAbsLay.ios.layer.setShadowColor(UIColor.lightGrayColor.CGColor);
        //newAbsLay.ios.layer.setShadowOpacity(0.5);
        var myLabel = new myLabel_1.MyLabel();
        myLabel.text = "My Label " + this.counter;
        newAbsLay.addChild(myLabel);
        this.counter++;
    };
    MainPageController.prototype.attachEventListeners = function () {
        var _this = this;
        this.layoutBase.on(gesturesModule.GestureTypes.pan, function (args) {
            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    _this.lastLocation.x = _this.lblDrag.ios.center.x;
                    _this.lastLocation.y = _this.lblDrag.ios.center.y;
                }
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    var translationX = args.deltaX;
                    var translationY = args.deltaY;
                    var change = translationY * -1;
                    if (change != 0) {
                    }
                    var center = {
                        x: _this.lastLocation.x + translationX,
                        y: _this.lastLocation.y + translationY
                    };
                    break;
                }
            }
        });
    };
    return MainPageController;
})();
var mpc = new MainPageController();
exports.pageLoaded = function (args) { return mpc.pageLoaded(args); };
