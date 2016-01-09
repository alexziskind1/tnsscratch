var label_1 = require("ui/label");
var point_1 = require("./point");
var gesturesModule = require("ui/gestures");
var colorModule = require("color");
var MyLabel = (function (_super) {
    __extends(MyLabel, _super);
    function MyLabel(options) {
        var _this = this;
        _super.call(this, options);
        this._width = 70;
        this._height = 40;
        this._pointX = 0;
        this._pointY = 0;
        this.lastLocation = new point_1.Point(0, 0);
        this.scaleDamper = .1;
        this._scale = 1;
        this._pointX = options.marginLeft;
        this._pointY = options.marginTop;
        this.on(gesturesModule.GestureTypes.pan, function (args) {
            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    _this.lastLocation.x = _this.ios.center.x;
                    _this.lastLocation.y = _this.ios.center.y;
                    break;
                }
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    var translation = args.ios.translationInView(_this.parent.ios);
                    var newCenter = {
                        x: _this.lastLocation.x + translation.x,
                        y: _this.lastLocation.y + translation.y
                    };
                    _this.ios.center = newCenter;
                    break;
                }
            }
        });
        this.on(gesturesModule.GestureTypes.pinch, function (args) {
            switch (args.state) {
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    if (args.scale > 1) {
                        _this.scale = (((args.scale - _this.scale) / 10) + _this.scale) * _this.scale;
                    }
                    else if (args.scale < 1) {
                        _this.scale = (((args.scale - _this.scale) / 10) + _this.scale) * _this.scale;
                    }
                    //this.scale *= args.scale;
                    args.scale = 1;
                    _this.scaleX = _this.scale;
                    _this.scaleY = _this.scale;
                    break;
                }
            }
        });
    }
    Object.defineProperty(MyLabel.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (newScale) {
            this._scale = newScale;
            this.ios.setNeedsDisplay();
        },
        enumerable: true,
        configurable: true
    });
    MyLabel.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        //randomize color
        var blueValue = Math.floor(Math.random() * 255) + 1;
        var greenValue = Math.floor(Math.random() * 255) + 1;
        var redValue = Math.floor(Math.random() * 255) + 1;
        this.setMeasuredDimension(this._width, this._height);
        this.backgroundColor = new colorModule.Color(255, redValue, greenValue, blueValue);
        this.color = new colorModule.Color(255, redValue, greenValue, blueValue);
        var pointX = Math.floor(Math.random() * this.parent.getMeasuredWidth()) + 1;
        var pointY = Math.floor(Math.random() * this.parent.getMeasuredHeight()) + 1;
        //this.parent.getMeasuredHeight();
        //this.parent.getMeasuredWidth();
        this.translateX = pointX;
        this.translateY = pointY;
    };
    return MyLabel;
})(label_1.Label);
exports.MyLabel = MyLabel;
