export class Point {
    constructor(public x: number, public y: number){}
}

export class Size {
    constructor(public width: number, public height: number) {}
}

export class Rect {
    public origin: Point;
    public size: Size;

    constructor(x: number,
                y: number,
                width: number,
                height: number) {
        this.origin = new Point(x, y);
        this.size = new Size(width, height);
    }

    public toPoints(): Array<Point> {
        return [ this.origin,
                 new Point(this.origin.x + this.size.width, this.origin.y),
                 new Point(this.origin.x + this.size.width, this.origin.y + this.size.height),
                 new Point(this.origin.x, this.origin.y + this.size.height)
        ];
    }

    public toPolygon() : Array<Point> {
        return Rect.rectToPolygon(this);
    }

    static rectToPolygon(rect: Rect) : Array<Point> {
        return rect.toPoints();
    }

    public changeRatio(fromSize: Size, toSize: Size) : Rect {
        return Rect.changeRectangleRatio(this, fromSize, toSize);
    }

    public isPointInside(point: Point) : boolean {
        return Rect.isPointInsideRect(point, this);
    }

    static changeRectangleRatio(rect: Rect, fromSize: Size, toSize: Size) : Rect {
        var yRatio = toSize.height/fromSize.height;
        var xRatio = toSize.width/fromSize.width;

        var relY = rect.origin.y * yRatio;
        var relX = rect.origin.x * xRatio;
        var relWidth = rect.size.width * xRatio;
        var relHeight = rect.size.height * yRatio;

        var relRect = new Rect(relX, relY, relWidth, relHeight);
        return relRect;
    }

    static isPointInsideRect(point: Point, rect: Rect) : boolean {
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
    }
}

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