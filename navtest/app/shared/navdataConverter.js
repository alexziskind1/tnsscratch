var navdata_1 = require("./navdata");
var navPageObj_1 = require("../navPageObj");
var linkItem_1 = require("../linkItem");
var rect_1 = require("../rect");
var size_1 = require("../size");
var navigationModule = require("./navigation");
function convertNavDataToObjects() {
    var navPageItems = navdata_1.pageNavData.map(function (i) {
        var linkItems = i.links.map(function (l) {
            var x = l.rect.origin.x;
            var y = l.rect.origin.y;
            var width = l.rect.size.width;
            var height = l.rect.size.height;
            var linkRect = new rect_1.Rect(x, y, width, height);
            var parentSize = new size_1.Size(l.parent.size.width, l.parent.size.height);
            return new linkItem_1.LinkItem(l.name, linkRect, parentSize, l.isBack);
        });
        return new navPageObj_1.NavPage(i.pageName, linkItems);
    });
    navigationModule.navPages = navPageItems;
    return navPageItems;
}
exports.convertNavDataToObjects = convertNavDataToObjects;
