var gesturesModule = require("ui/gestures");
var colorModule = require("color");
var label_1 = require("ui/label");
var point_1 = require("./point");
var MySquare = (function (_super) {
    __extends(MySquare, _super);
    function MySquare(options) {
        var _this = this;
        _super.call(this);
        this._width = 50;
        this._height = 50;
        this.lastLocation = new point_1.Point(0, 0);
        this._width = options.width;
        this._height = options.height;
        this.on(gesturesModule.GestureTypes.pan, function (args) {
            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    _this.lastLocation.x = _this.ios.center.x;
                    _this.lastLocation.y = _this.ios.center.y;
                    _this.parent.ios.bringSubviewToFront(_this.ios);
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
    }
    MySquare.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        //randomize color
        var blueValue = Math.floor(Math.random() * 255) + 1;
        var greenValue = Math.floor(Math.random() * 255) + 1;
        var redValue = Math.floor(Math.random() * 255) + 1;
        this.setMeasuredDimension(this._width, this._height);
        this.backgroundColor = new colorModule.Color(255, redValue, greenValue, blueValue);
        this.color = new colorModule.Color(255, redValue, greenValue, blueValue);
        //randomize location
        var pointX = Math.floor(Math.random() * (this.parent.getMeasuredWidth() - this._width)) + 1;
        var pointY = Math.floor(Math.random() * (this.parent.getMeasuredHeight() - this._height)) + 1;
        this.translateX = pointX;
        this.translateY = pointY;
    };
    return MySquare;
})(label_1.Label);
exports.MySquare = MySquare;
