var gesturesModule = require("ui/gestures");
//import {PanStateEnum} from "./panStateEnum";
var point_1 = require("./point");
var myLabel_1 = require("./myLabel");
var MainPageController = (function () {
    function MainPageController() {
        this.lastLocation = new point_1.Point(0, 0);
        this._level = 25;
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
        this.getViewRefs();
        //this.attachEventListeners();
        //var newView = new MyView();
        //this.layoutBase.addChild(newView);
        //var newAbsLay = new absoluteLayoutModule.AbsoluteLayout();
        //newAbsLay.backgroundColor = new colorModule.Color(1, 200,0,78);
        //this.layoutBase.addChild(newAbsLay);
        var myLabel = new myLabel_1.MyLabel();
        myLabel.text = "My Label";
        this.layoutBase.addChild(myLabel);
    };
    MainPageController.prototype.getViewRefs = function () {
        this.layoutBase = this.page.getViewById("layoutBase");
        this.lblDrag = this.page.getViewById("lblDrag");
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
