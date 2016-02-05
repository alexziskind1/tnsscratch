var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
})();
exports.Point = Point;
var Size = (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
    }
    return Size;
})();
exports.Size = Size;
var Rect = (function () {
    function Rect(x, y, width, height) {
        this.origin = new Point(x, y);
        this.size = new Size(width, height);
    }
    Rect.prototype.toPoints = function () {
        return [this.origin,
            new Point(this.origin.x + this.size.width, this.origin.y),
            new Point(this.origin.x + this.size.width, this.origin.y + this.size.height),
            new Point(this.origin.x, this.origin.y + this.size.height)
        ];
    };
    Rect.prototype.toPolygon = function () {
        return Rect.rectToPolygon(this);
    };
    Rect.rectToPolygon = function (rect) {
        return rect.toPoints();
    };
    Rect.prototype.changeRatio = function (fromSize, toSize) {
        return Rect.changeRectangleRatio(this, fromSize, toSize);
    };
    Rect.prototype.isPointInside = function (point) {
        return Rect.isPointInsideRect(point, this);
    };
    Rect.changeRectangleRatio = function (rect, fromSize, toSize) {
        var yRatio = toSize.height / fromSize.height;
        var xRatio = toSize.width / fromSize.width;
        var relY = rect.origin.y * yRatio;
        var relX = rect.origin.x * xRatio;
        var relWidth = rect.size.width * xRatio;
        var relHeight = rect.size.height * yRatio;
        var relRect = new Rect(relX, relY, relWidth, relHeight);
        return relRect;
    };
    Rect.isPointInsideRect = function (point, rect) {
        var z1 = rect.origin.x;
        var z2 = rect.origin.y;
        var z3 = rect.origin.x + rect.size.width;
        var z4 = rect.origin.y + rect.size.height;
        var x1 = Math.min(z1, z3);
        var x2 = Math.max(z1, z3);
        var y1 = Math.min(z2, z4);
        var y2 = Math.max(z2, z4);
        if ((x1 <= point.x) && (point.x <= x2) && (y1 <= point.y) && (point.y <= y2)) {
            return true;
        }
        else {
            return false;
        }
        ;
    };
    return Rect;
})();
exports.Rect = Rect;
