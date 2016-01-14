function inside(point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    //var x = point[0], y = point[1];
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        var intersect = ((yi > point.y) != (yj > point.y))
            && (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);
        if (intersect)
            inside = !inside;
    }
    return inside;
}
exports.inside = inside;
;
function isInsideRect(point, rect) {
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
}
exports.isInsideRect = isInsideRect;
;
//Usage
// array of coordinates of each vertex of the polygon
//var polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];
//inside([ 1.5, 1.5 ], polygon); // true
function rectToPolygon(rect) {
    return rect.toPoints();
}
exports.rectToPolygon = rectToPolygon;
