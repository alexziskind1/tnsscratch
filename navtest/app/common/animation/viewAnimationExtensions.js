var label_1 = require("ui/label");
var animationUtilsModule = require("./utils");
var AnimatedLabel = (function (_super) {
    __extends(AnimatedLabel, _super);
    function AnimatedLabel() {
        _super.apply(this, arguments);
    }
    AnimatedLabel.prototype.fadeIn = function (duration) {
        if (duration === void 0) { duration = 300; }
        return animationUtilsModule.fadeIn(this, duration);
    };
    AnimatedLabel.prototype.fadeOut = function (duration) {
        if (duration === void 0) { duration = 300; }
        return animationUtilsModule.fadeOut(this, duration);
    };
    return AnimatedLabel;
})(label_1.Label);
exports.AnimatedLabel = AnimatedLabel;
