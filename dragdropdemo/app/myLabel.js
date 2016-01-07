var label_1 = require("ui/label");
var point_1 = require("./point");
var gesturesModule = require("ui/gestures");
var MyLabel = (function (_super) {
    __extends(MyLabel, _super);
    function MyLabel() {
        var _this = this;
        _super.call(this);
        this.lastLocation = new point_1.Point(0, 0);
        this.on(gesturesModule.GestureTypes.pan, function (args) {
            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    _this.lastLocation.x = _this.ios.center.x;
                    _this.lastLocation.y = _this.ios.center.y;
                    break;
                }
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    var newCenter = {
                        x: _this.lastLocation.x + args.deltaX,
                        y: _this.lastLocation.y + args.deltaY
                    };
                    _this.ios.center = newCenter;
                    break;
                }
            }
        });
    }
    return MyLabel;
})(label_1.Label);
exports.MyLabel = MyLabel;
