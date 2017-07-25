"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.Point = Point;
var Size = (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
    }
    return Size;
}());
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
}());
exports.Rect = Rect;
/*
export function inside(point: Point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    //var x = point[0], y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];

        var intersect = ((yi > point.y) != (yj > point.y))
            && (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};
*/
/*
export function isInsideRect(point: Point, rect: Rect) {
    var z1 = rect.origin.x;
    var z2 = rect.origin.y;
    var z3 = rect.origin.x + rect.size.width;
    var z4 = rect.origin.y + rect.size.height;

    var x1 = Math.min(z1, z3);
    var x2 = Math.max(z1, z3);
    var y1 = Math.min(z2, z4);
    var y2 = Math.max(z2, z4);
    if ((x1 <= point.x ) && ( point.x <= x2) && (y1 <= point.y) && (point.y <= y2)) {
        return true;
    } else {
        return false;
    };
};
*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZW9tZXRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQ0ksZUFBbUIsQ0FBUyxFQUFTLENBQVM7UUFBM0IsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7SUFBRSxDQUFDO0lBQ3JELFlBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLHNCQUFLO0FBSWxCO0lBQ0ksY0FBbUIsS0FBYSxFQUFTLE1BQWM7UUFBcEMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBQy9ELFdBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLG9CQUFJO0FBSWpCO0lBSUksY0FBWSxDQUFTLEVBQ1QsQ0FBUyxFQUNULEtBQWEsRUFDYixNQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSx1QkFBUSxHQUFmO1FBQ0ksTUFBTSxDQUFDLENBQUUsSUFBSSxDQUFDLE1BQU07WUFDWCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1RSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNsRSxDQUFDO0lBQ04sQ0FBQztJQUVNLHdCQUFTLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLGtCQUFhLEdBQXBCLFVBQXFCLElBQVU7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sMEJBQVcsR0FBbEIsVUFBbUIsUUFBYyxFQUFFLE1BQVk7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSw0QkFBYSxHQUFwQixVQUFxQixLQUFZO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSx5QkFBb0IsR0FBM0IsVUFBNEIsSUFBVSxFQUFFLFFBQWMsRUFBRSxNQUFZO1FBQ2hFLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFFekMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRTFDLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVNLHNCQUFpQixHQUF4QixVQUF5QixLQUFZLEVBQUUsSUFBVTtRQUM3QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUxQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUEsQ0FBQztJQUNOLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQWpFRCxJQWlFQztBQWpFWSxvQkFBSTtBQW1FakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtQkU7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpQkUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIpe31cbn1cblxuZXhwb3J0IGNsYXNzIFNpemUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB3aWR0aDogbnVtYmVyLCBwdWJsaWMgaGVpZ2h0OiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWN0IHtcbiAgICBwdWJsaWMgb3JpZ2luOiBQb2ludDtcbiAgICBwdWJsaWMgc2l6ZTogU2l6ZTtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlcixcbiAgICAgICAgICAgICAgICB5OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IG51bWJlcixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLm9yaWdpbiA9IG5ldyBQb2ludCh4LCB5KTtcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvUG9pbnRzKCk6IEFycmF5PFBvaW50PiB7XG4gICAgICAgIHJldHVybiBbIHRoaXMub3JpZ2luLFxuICAgICAgICAgICAgICAgICBuZXcgUG9pbnQodGhpcy5vcmlnaW4ueCArIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5vcmlnaW4ueSksXG4gICAgICAgICAgICAgICAgIG5ldyBQb2ludCh0aGlzLm9yaWdpbi54ICsgdGhpcy5zaXplLndpZHRoLCB0aGlzLm9yaWdpbi55ICsgdGhpcy5zaXplLmhlaWdodCksXG4gICAgICAgICAgICAgICAgIG5ldyBQb2ludCh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55ICsgdGhpcy5zaXplLmhlaWdodClcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9Qb2x5Z29uKCkgOiBBcnJheTxQb2ludD4ge1xuICAgICAgICByZXR1cm4gUmVjdC5yZWN0VG9Qb2x5Z29uKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWN0VG9Qb2x5Z29uKHJlY3Q6IFJlY3QpIDogQXJyYXk8UG9pbnQ+IHtcbiAgICAgICAgcmV0dXJuIHJlY3QudG9Qb2ludHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlUmF0aW8oZnJvbVNpemU6IFNpemUsIHRvU2l6ZTogU2l6ZSkgOiBSZWN0IHtcbiAgICAgICAgcmV0dXJuIFJlY3QuY2hhbmdlUmVjdGFuZ2xlUmF0aW8odGhpcywgZnJvbVNpemUsIHRvU2l6ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzUG9pbnRJbnNpZGUocG9pbnQ6IFBvaW50KSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gUmVjdC5pc1BvaW50SW5zaWRlUmVjdChwb2ludCwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNoYW5nZVJlY3RhbmdsZVJhdGlvKHJlY3Q6IFJlY3QsIGZyb21TaXplOiBTaXplLCB0b1NpemU6IFNpemUpIDogUmVjdCB7XG4gICAgICAgIHZhciB5UmF0aW8gPSB0b1NpemUuaGVpZ2h0L2Zyb21TaXplLmhlaWdodDtcbiAgICAgICAgdmFyIHhSYXRpbyA9IHRvU2l6ZS53aWR0aC9mcm9tU2l6ZS53aWR0aDtcblxuICAgICAgICB2YXIgcmVsWSA9IHJlY3Qub3JpZ2luLnkgKiB5UmF0aW87XG4gICAgICAgIHZhciByZWxYID0gcmVjdC5vcmlnaW4ueCAqIHhSYXRpbztcbiAgICAgICAgdmFyIHJlbFdpZHRoID0gcmVjdC5zaXplLndpZHRoICogeFJhdGlvO1xuICAgICAgICB2YXIgcmVsSGVpZ2h0ID0gcmVjdC5zaXplLmhlaWdodCAqIHlSYXRpbztcblxuICAgICAgICB2YXIgcmVsUmVjdCA9IG5ldyBSZWN0KHJlbFgsIHJlbFksIHJlbFdpZHRoLCByZWxIZWlnaHQpO1xuICAgICAgICByZXR1cm4gcmVsUmVjdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNQb2ludEluc2lkZVJlY3QocG9pbnQ6IFBvaW50LCByZWN0OiBSZWN0KSA6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgejEgPSByZWN0Lm9yaWdpbi54O1xuICAgICAgICB2YXIgejIgPSByZWN0Lm9yaWdpbi55O1xuICAgICAgICB2YXIgejMgPSByZWN0Lm9yaWdpbi54ICsgcmVjdC5zaXplLndpZHRoO1xuICAgICAgICB2YXIgejQgPSByZWN0Lm9yaWdpbi55ICsgcmVjdC5zaXplLmhlaWdodDtcblxuICAgICAgICB2YXIgeDEgPSBNYXRoLm1pbih6MSwgejMpO1xuICAgICAgICB2YXIgeDIgPSBNYXRoLm1heCh6MSwgejMpO1xuICAgICAgICB2YXIgeTEgPSBNYXRoLm1pbih6MiwgejQpO1xuICAgICAgICB2YXIgeTIgPSBNYXRoLm1heCh6MiwgejQpO1xuICAgICAgICBpZiAoKHgxIDw9IHBvaW50LnggKSAmJiAoIHBvaW50LnggPD0geDIpICYmICh5MSA8PSBwb2ludC55KSAmJiAocG9pbnQueSA8PSB5MikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuLypcbmV4cG9ydCBmdW5jdGlvbiBpbnNpZGUocG9pbnQ6IFBvaW50LCB2cykge1xuICAgIC8vIHJheS1jYXN0aW5nIGFsZ29yaXRobSBiYXNlZCBvblxuICAgIC8vIGh0dHA6Ly93d3cuZWNzZS5ycGkuZWR1L0hvbWVwYWdlcy93cmYvUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcblxuICAgIC8vdmFyIHggPSBwb2ludFswXSwgeSA9IHBvaW50WzFdO1xuXG4gICAgdmFyIGluc2lkZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gdnMubGVuZ3RoIC0gMTsgaSA8IHZzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgICAgICB2YXIgeGkgPSB2c1tpXVswXSwgeWkgPSB2c1tpXVsxXTtcbiAgICAgICAgdmFyIHhqID0gdnNbal1bMF0sIHlqID0gdnNbal1bMV07XG5cbiAgICAgICAgdmFyIGludGVyc2VjdCA9ICgoeWkgPiBwb2ludC55KSAhPSAoeWogPiBwb2ludC55KSlcbiAgICAgICAgICAgICYmIChwb2ludC54IDwgKHhqIC0geGkpICogKHBvaW50LnkgLSB5aSkgLyAoeWogLSB5aSkgKyB4aSk7XG4gICAgICAgIGlmIChpbnRlcnNlY3QpIGluc2lkZSA9ICFpbnNpZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc2lkZTtcbn07XG4qL1xuXG4vKlxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5zaWRlUmVjdChwb2ludDogUG9pbnQsIHJlY3Q6IFJlY3QpIHtcbiAgICB2YXIgejEgPSByZWN0Lm9yaWdpbi54O1xuICAgIHZhciB6MiA9IHJlY3Qub3JpZ2luLnk7XG4gICAgdmFyIHozID0gcmVjdC5vcmlnaW4ueCArIHJlY3Quc2l6ZS53aWR0aDtcbiAgICB2YXIgejQgPSByZWN0Lm9yaWdpbi55ICsgcmVjdC5zaXplLmhlaWdodDtcblxuICAgIHZhciB4MSA9IE1hdGgubWluKHoxLCB6Myk7XG4gICAgdmFyIHgyID0gTWF0aC5tYXgoejEsIHozKTtcbiAgICB2YXIgeTEgPSBNYXRoLm1pbih6MiwgejQpO1xuICAgIHZhciB5MiA9IE1hdGgubWF4KHoyLCB6NCk7XG4gICAgaWYgKCh4MSA8PSBwb2ludC54ICkgJiYgKCBwb2ludC54IDw9IHgyKSAmJiAoeTEgPD0gcG9pbnQueSkgJiYgKHBvaW50LnkgPD0geTIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufTtcbiovIl19