"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var label_1 = require("ui/label");
var animationUtilsModule = require("./utils");
var AnimatedLabel = (function (_super) {
    __extends(AnimatedLabel, _super);
    function AnimatedLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
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
}(label_1.Label));
exports.AnimatedLabel = AnimatedLabel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld0FuaW1hdGlvbkV4dGVuc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3QW5pbWF0aW9uRXh0ZW5zaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUErQjtBQUMvQiw4Q0FBaUQ7QUFTakQ7SUFBbUMsaUNBQUs7SUFBeEM7O0lBUUEsQ0FBQztJQVBVLDhCQUFNLEdBQWIsVUFBYyxRQUFzQjtRQUF0Qix5QkFBQSxFQUFBLGNBQXNCO1FBQ2hDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWUsUUFBc0I7UUFBdEIseUJBQUEsRUFBQSxjQUFzQjtRQUNqQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBbUMsYUFBSyxHQVF2QztBQVJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3fSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQge0xhYmVsfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCBhbmltYXRpb25VdGlsc01vZHVsZSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBmYWRlSW4oKTogUHJvbWlzZTx2b2lkPlxuICAgIGZhZGVPdXQoKTogUHJvbWlzZTx2b2lkPlxufVxuXG5cbmV4cG9ydCBjbGFzcyBBbmltYXRlZExhYmVsIGV4dGVuZHMgTGFiZWwgaW1wbGVtZW50cyBJVmlldyB7XG4gICAgcHVibGljIGZhZGVJbihkdXJhdGlvbjogbnVtYmVyID0gMzAwKSA6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gYW5pbWF0aW9uVXRpbHNNb2R1bGUuZmFkZUluKHRoaXMsIGR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmFkZU91dChkdXJhdGlvbjogbnVtYmVyID0gMzAwKSA6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gYW5pbWF0aW9uVXRpbHNNb2R1bGUuZmFkZU91dCh0aGlzLCBkdXJhdGlvbik7XG4gICAgfVxufSJdfQ==