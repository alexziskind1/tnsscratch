import {Rect} from "./rect";
import {Size} from "./size";
import {Point} from "./point";
import utilModule = require("./shared/util");

export class LinkItem {
    constructor(public name: string, public rect: Rect, public parentSize: Size, public isBack: boolean) {

    }

    public isHitTestPositive(point: Point) {
        return utilModule.isInsideRect(point, this.rect);
        //return utilModule.inside(point, utilModule.rectToPolygon(this.rect));
    }
}