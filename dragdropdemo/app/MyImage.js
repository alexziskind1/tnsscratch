var image_1 = require("ui/image");
var point_1 = require("./point");
var gesturesModule = require("ui/gestures");
var MyImage = (function (_super) {
    __extends(MyImage, _super);
    function MyImage() {
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
    return MyImage;
})(image_1.Image);
exports.MyImage = MyImage;
