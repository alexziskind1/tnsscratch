var point_1 = require("./point");
var size_1 = require("./size");
var Rect = (function () {
    function Rect(x, y, width, height) {
        this.origin = new point_1.Point(x, y);
        this.size = new size_1.Size(width, height);
    }
    Rect.prototype.toPoints = function () {
        return [this.origin,
            new point_1.Point(this.origin.x + this.size.width, this.origin.y),
            new point_1.Point(this.origin.x + this.size.width, this.origin.y + this.size.height),
            new point_1.Point(this.origin.x, this.origin.y + this.size.height)
        ];
    };
    return Rect;
})();
exports.Rect = Rect;
