import {pageNavData} from "./navdata";
import {NavPage} from "../navPageObj";
import {LinkItem} from "../linkItem";
import {Rect} from "../rect";
import navigationModule = require("./navigation");

export function convertNavDataToObjects() {
    var navPageItems = pageNavData.map( i => {
        var linkItems: Array<LinkItem> = i.links.map( l => {
            
            var x = l.rect.origin.x;
            var y = l.rect.origin.y;
            var width = l.rect.size.width;
            var height = l.rect.size.height;
            var linkRect = new Rect(x,y,width,height);
            
            return new LinkItem(l.name, linkRect, l.isBack);
        });
        
        return new NavPage(i.pageName, linkItems);
    });

    navigationModule.navPages = navPageItems;

    return navPageItems;
}