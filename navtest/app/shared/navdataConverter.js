var navdata_1 = require("./navdata");
var navPageObj_1 = require("../navPageObj");
var linkItem_1 = require("../linkItem");
var rect_1 = require("../rect");
var navigationModule = require("./navigation");
function convertNavDataToObjects() {
    var navPageItems = navdata_1.pageNavData.map(function (i) {
        var linkItems = i.links.map(function (l) {
            new linkItem_1.LinkItem(l.name, new rect_1.Rect(l.rect.origin.x, l.rect.origin.y, l.rect.size.width, l.rect.size.height), l.isBack);
        });
        return new navPageObj_1.NavPage(i.pageName, linkItems);
    });
    navigationModule.navPages = navPageItems;
    return navPageItems;
}
exports.convertNavDataToObjects = convertNavDataToObjects;
