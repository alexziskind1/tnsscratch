var absoluteLayoutModule = require("ui/layouts/absolute-layout");
var gesturesModule = require("ui/gestures");
var colorModule = require("color");
var point_1 = require("./point");
var MyCustomView = (function (_super) {
    __extends(MyCustomView, _super);
    function MyCustomView(options) {
        _super.call(this);
        this._lastLocation = new point_1.Point(0, 0);
        this._height = options.height;
        this._width = options.width;
        var rand = Math.random();
        this.on(gesturesModule.GestureTypes.tap, function (args) {
            alert('tap');
        });
    }
    MyCustomView.prototype.onLoaded = function () {
    };
    MyCustomView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        this.setMeasuredDimension(this._width, this._height);
        this.backgroundColor = new colorModule.Color("red");
        this.color = new colorModule.Color("red");
    };
    MyCustomView.prototype.onLayout = function (left, top, right, bottom) {
        var _this = this;
        this.on(gesturesModule.GestureTypes.pan, function (args) {
            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    _this._lastLocation.x = _this.ios.center.x;
                    _this._lastLocation.y = _this.ios.center.y;
                    break;
                }
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    var newCenter = {
                        x: _this._lastLocation.x + args.deltaX,
                        y: _this._lastLocation.y + args.deltaY
                    };
                    _this.ios.center = newCenter;
                    break;
                }
            }
        }, this);
    };
    return MyCustomView;
})(absoluteLayoutModule.AbsoluteLayout);
exports.MyCustomView = MyCustomView;
