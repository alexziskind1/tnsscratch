import gesturesModule = require("ui/gestures");
import colorModule = require("color");

import {Label} from "ui/label";
import {Point} from "./point";
import {MyViewOptions} from "./myViewOptions";


export class MySquare extends Label {

    private _width: number = 50;
    private _height: number = 50;
    private lastLocation: Point = new Point(0,0);

    constructor(options: MyViewOptions){
        super();
        this._width = options.width;
        this._height = options.height;

        this.on(gesturesModule.GestureTypes.pan, (args: gesturesModule.PanGestureEventData) => {

            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    this.lastLocation.x = this.ios.center.x;
                    this.lastLocation.y = this.ios.center.y;
                    
                    this.parent.ios.bringSubviewToFront(this.ios);
                    break;
                }
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    var translation  = args.ios.translationInView(this.parent.ios);

                    var newCenter = {
                        x: this.lastLocation.x + translation.x,
                        y: this.lastLocation.y + translation.y
                    };

                    this.ios.center = newCenter;
                    break;
                }
            }
        });
    }
    
    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
        //randomize color
        let blueValue = Math.floor(Math.random() * 255) + 1;
        let greenValue = Math.floor(Math.random() * 255) + 1;
        let redValue = Math.floor(Math.random() * 255) + 1;
        
        this.setMeasuredDimension(this._width, this._height);
        this.backgroundColor = new colorModule.Color(255, redValue,greenValue,blueValue);
        this.color = new colorModule.Color(255, redValue,greenValue,blueValue);
        
        //randomize location
        let pointX = Math.floor(Math.random() * (this.parent.getMeasuredWidth() - this._width)) + 1;
        let pointY = Math.floor(Math.random() * (this.parent.getMeasuredHeight() - this._height)) + 1

        this.translateX = pointX;
        this.translateY = pointY;
    }
}