import {Image, GestureEventData, PanGestureEventData, GestureTypes, GestureStateTypes} from "ui";
import {Color} from "color";

import {Point, Size, Rect} from "../common/geometry";
import myglobalModule = require("../common/myglobal");


export class ImageView extends Image {

/*
    constructor(private rect: Rect){
        super();
    }
    */
    constructor() {
        super();
    }

    //View lifecycle
    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
        //super.onMeasure(widthMeasureSpec, heightMeasureSpec);

        //var width = utils.layout.getMeasureSpecSize(widthMeasureSpec);
        //var height = utils.layout.getMeasureSpecSize(heightMeasureSpec);

        //var width = this.page.getMeasuredWidth();
        //var height = this.page.getMeasuredHeight();
        //var width = this.pageSize.width;
        //var height = this.pageSize.height;
        var width = myglobalModule.pageSize.width;
        var height = myglobalModule.pageSize.height;

        //this.setMeasuredDimension(this.rect.size.width, this.rect.size.height);
        this.setMeasuredDimension(width, height);
    }
    public onLayout(left: number, top: number, right: number, bottom: number) {
        var a = 0;
    }

}