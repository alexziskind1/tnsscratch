import {Point, Size, Rect} from "../common/geometry";


export class LinkItem {
    constructor(public name: string, public rect: Rect, public parentSize: Size, public isBack: boolean) {

    }

    public isHitTestPositive(point: Point, currentParentSize: Size) : boolean {
        //var relativeRect = this.transformToRelativeRect(this.rect, currentParentSize);

        var relativeRect = this.rect.changeRatio(this.parentSize, currentParentSize);

        //var relativeRect = utilModule.changeRectangleRatio(this.rect, this.parentSize, currentParentSize);

        //return utilModule.isInsideRect(point, this.rect);
        //return utilModule.isInsideRect(point, relativeRect);
        return relativeRect.isPointInside(point);
    }

    /*
    private transformToRelativeRect(rect: Rect, currentParentSize: Size) : Rect {
        var yRatio = currentParentSize.height/this.parentSize.height;
        var xRatio = currentParentSize.width/this.parentSize.width;

        var relY = this.rect.origin.y * yRatio;
        var relX = this.rect.origin.x * xRatio;
        var relWidth = this.rect.size.width * xRatio;
        var relHeight = this.rect.size.height * yRatio;

        var relRect = new Rect(relX, relY, relWidth, relHeight);
        return relRect;
    }
    */
}