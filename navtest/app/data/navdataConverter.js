var navdata_1 = require("./navdata");
var navPage_1 = require("../model/navPage");
var linkItem_1 = require("../model/linkItem");
var geometry_1 = require("../common/geometry");
var navigationModule = require("../common/navigation");
function convertNavDataToObjects() {
    var navPageItems = navdata_1.pageNavData.map(function (i) {
        var linkItems = i.links.map(function (l) {
            var x = l.rect.origin.x;
            var y = l.rect.origin.y;
            var width = l.rect.size.width;
            var height = l.rect.size.height;
            var linkRect = new geometry_1.Rect(x, y, width, height);
            var parentSize = new geometry_1.Size(l.parent.size.width, l.parent.size.height);
            return new linkItem_1.LinkItem(l.id, l.name, linkRect, parentSize, l.isBack);
        });
        return new navPage_1.NavPage(i.pageName, linkItems);
    });
    navigationModule.navPages = navPageItems;
    return navPageItems;
}
exports.convertNavDataToObjects = convertNavDataToObjects;
