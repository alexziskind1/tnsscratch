var label_1 = require("ui/label");
var point_1 = require("./point");
var gesturesModule = require("ui/gestures");
var MyLabel = (function (_super) {
    __extends(MyLabel, _super);
    function MyLabel() {
        var _this = this;
        _super.call(this);
        this.lastLocation = new point_1.Point(0, 0);
        this.scaleDamper = .1;
        this._scale = 1;
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
    return MyLabel;
})(label_1.Label);
exports.MyLabel = MyLabel;
