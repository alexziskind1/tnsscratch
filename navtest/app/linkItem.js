var utilModule = require("./shared/util");
var LinkItem = (function () {
    function LinkItem(name, rect, isBack) {
        this.name = name;
        this.rect = rect;
        this.isBack = isBack;
    }
    LinkItem.prototype.isHitTestPositive = function (point) {
        return utilModule.isInsideRect(point, this.rect);
        //return utilModule.inside(point, utilModule.rectToPolygon(this.rect));
    };
    return LinkItem;
})();
exports.LinkItem = LinkItem;
