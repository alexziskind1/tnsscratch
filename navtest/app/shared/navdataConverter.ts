import {pageNavData} from "./navdata";
import {NavPage} from "../navPageObj";
import {LinkItem} from "../linkItem";
import {Rect} from "../rect";
import navigationModule = require("./navigation");

export function convertNavDataToObjects() {
    var navPageItems = pageNavData.map( i => {
        var linkItems: Array<LinkItem> = i.links.map(l => new LinkItem(l.name, new Rect(l.rect.origin.x, l.rect.origin.y, l.rect.size.width, l.rect.size.height), l.isBack));

        return new NavPage(i.pageName, linkItems);
    });

    navigationModule.navPages = navPageItems;

    return navPageItems;
}