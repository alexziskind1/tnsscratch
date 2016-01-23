var utilModule = require("./shared/util");
var LinkItem = (function () {
    function LinkItem(name, rect, parentSize, isBack) {
        this.name = name;
        this.rect = rect;
        this.parentSize = parentSize;
        this.isBack = isBack;
    }
    LinkItem.prototype.isHitTestPositive = function (point, currentParentSize) {
        //var relativeRect = this.transformToRelativeRect(this.rect, currentParentSize);
        var relativeRect = utilModule.changeRectangleRatio(this.rect, this.parentSize, currentParentSize);
        //return utilModule.isInsideRect(point, this.rect);
        return utilModule.isInsideRect(point, relativeRect);
    };
    return LinkItem;
})();
exports.LinkItem = LinkItem;
