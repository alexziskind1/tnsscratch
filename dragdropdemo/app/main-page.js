var gesturesModule = require("ui/gestures");
var colorModule = require("color");
var absoluteLayoutModule = require("ui/layouts/absolute-layout");
var myLabel_1 = require("./myLabel");
var myOptions_1 = require("./myOptions");
var point_1 = require("./point");
var UIColor;
var MainPageController = (function () {
    function MainPageController() {
        this.lastLocation = new point_1.Point(0, 0);
        this._level = 25;
        this.counter = 0;
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
        this.attachEventListeners();
    };
    MainPageController.prototype.getViewRefs = function () {
        this.layoutBase = this.page.getViewById("layoutBase");
        this.layoutAbs = this.page.getViewById("layoutAbs");
        this.lblDrag = this.page.getViewById("lblDrag");
    };
    MainPageController.prototype.addLabel = function () {
        this.counter++;
        var myLabel = new myLabel_1.MyLabel();
        myLabel.text = "My Label " + this.counter;
        this.layoutBase.addChild(myLabel);
    };
    MainPageController.prototype.addView = function () {
        var _this = this;
        var options = new myOptions_1.MyOptions;
        options.height = 50;
        options.width = 50;
        options.marginLeft = 0;
        options.marginRight = 60;
        options.marginTop = 2;
        options.marginBottom = 70;
        options.className = 'myview';
        /*
        var myCustView = new MyCustomView(options);
        this.layoutBase.addChild(myCustView);
        */
        /*
        var image = new MyImage();
        image.stretch = enums.Stretch.none;
        var imageSource = imageSourceModule.fromResource("icon-72");
        image.imageSource = imageSource;
        this.layoutBase.addChild(image);
        */
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
        myLabel.text = "Abs Label " + this.counter;
        newAbsLay.addChild(myLabel);
        this.counter++;
        newAbsLay.on(gesturesModule.GestureTypes.pan, function (args) {
            alert('abs pan');
            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    _this.lastLocation.x = newAbsLay.ios.center.x;
                    _this.lastLocation.y = newAbsLay.ios.center.y;
                    break;
                }
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    var newCenter = {
                        x: _this.lastLocation.x + args.deltaX,
                        y: _this.lastLocation.y + args.deltaY
                    };
                    newAbsLay.ios.center = newCenter;
                    break;
                }
            }
        });
    };
    MainPageController.prototype.attachEventListeners = function () {
        var _this = this;
        this.layoutAbs.on(gesturesModule.GestureTypes.pan, function (args) {
            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    _this.lastLocation.x = _this.layoutAbs.ios.center.x;
                    _this.lastLocation.y = _this.layoutAbs.ios.center.y;
                    break;
                }
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    var newCenter = {
                        x: _this.lastLocation.x + args.deltaX,
                        y: _this.lastLocation.y + args.deltaY
                    };
                    _this.layoutAbs.ios.center = newCenter;
                    break;
                }
            }
        });
    };
    return MainPageController;
})();
var mpc = new MainPageController();
exports.pageLoaded = function (args) { return mpc.pageLoaded(args); };
