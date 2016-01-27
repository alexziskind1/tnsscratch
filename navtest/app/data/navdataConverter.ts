import {pageNavData} from "./navdata";
import {NavPage} from "../model/navPage";
import {LinkItem} from "../model/linkItem";
import {Rect, Size} from "../common/geometry";
import navigationModule = require("../common/navigation");

export function convertNavDataToObjects() {
    var navPageItems = pageNavData.map( i => {
        var linkItems: Array<LinkItem> = i.links.map( l => {

            var x = l.rect.origin.x;
            var y = l.rect.origin.y;
            var width = l.rect.size.width;
            var height = l.rect.size.height;
            var linkRect = new Rect(x,y,width,height);

            var parentSize = new Size(l.parent.size.width, l.parent.size.height);

            return new LinkItem(l.name, linkRect, parentSize, l.isBack);

        });

        return new NavPage(i.pageName, linkItems);
    });

    navigationModule.navPages = navPageItems;

    return navPageItems;
}