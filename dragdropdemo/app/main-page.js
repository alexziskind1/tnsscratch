var gesturesModule = require("ui/gestures");
var point_1 = require("./point");
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
        this.attachEventListeners();
    };
    MainPageController.prototype.getViewRefs = function () {
        this.layoutBase = this.page.getViewById("layoutBase");
        this.lblDrag = this.page.getViewById("lblDrag");
    };
    MainPageController.prototype.attachEventListeners = function () {
        this.layoutBase.on(gesturesModule.GestureTypes.pan, function (args) {
            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    this.lastLocation.x = this.lblDrag.ios.center.x;
                    this.lastLocation.y = this.lblDrag.ios.center.y;
                }
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    var translationX = args.deltaX;
                    var translationY = args.deltaY;
                    var change = translationY * -1;
                    if (change != 0) {
                    }
                    var center = {
                        x: this.lastLocation.x + translationX,
                        y: this.lastLocation.y + translationY
                    };
                    break;
                }
            }
        });
    };
    return MainPageController;
})();
var mpc = new MainPageController();
exports.pageLoaded = mpc.pageLoaded;
