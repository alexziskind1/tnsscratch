import {Label} from "ui/label";
import {Point} from "./point";
import {MyOptions} from "./myOptions";
import gesturesModule = require("ui/gestures");
import colorModule = require("color");

export class MyLabel extends Label {

    private _width: number = 70;
    private _height: number = 40;
    private _pointX: number = 0;
    private _pointY: number = 0;
   public lastLocation: Point = new Point(0,0);
   private scaleDamper: number = .1;

   private _scale: number = 1;
   get scale(): number {
        return this._scale;
   }
   set scale(newScale: number) {
        this._scale = newScale;
        this.ios.setNeedsDisplay();
   }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
        //randomize color
        let blueValue = Math.floor(Math.random() * 255) + 1;
        let greenValue = Math.floor(Math.random() * 255) + 1;
        let redValue = Math.floor(Math.random() * 255) + 1;
        
        this.setMeasuredDimension(this._width, this._height);
        this.backgroundColor = new colorModule.Color(255, redValue,greenValue,blueValue);
        this.color = new colorModule.Color(255, redValue,greenValue,blueValue);
        
        
        let pointX = Math.floor(Math.random() * this.parent.getMeasuredWidth()) + 1;
        let pointY = Math.floor(Math.random() * this.parent.getMeasuredHeight()) + 1
        //this.parent.getMeasuredHeight();
        //this.parent.getMeasuredWidth();
        this.translateX = pointX;
        this.translateY = pointY;
    }
 

    constructor(options: MyOptions){
        super(options);

        this._pointX = options.marginLeft;
        this._pointY = options.marginTop;

        this.on(gesturesModule.GestureTypes.pan, (args: gesturesModule.PanGestureEventData) => {

            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    this.lastLocation.x = this.ios.center.x;
                    this.lastLocation.y = this.ios.center.y;
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

        this.on(gesturesModule.GestureTypes.pinch, (args: gesturesModule.PinchGestureEventData) => {

            switch (args.state) {
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {

                    if (args.scale > 1 ) {
                        this.scale = (((args.scale - this.scale) / 10) + this.scale) * this.scale;
                    }
                    else if (args.scale < 1) {
                        this.scale = (((args.scale - this.scale) / 10) + this.scale) * this.scale;
                    }

                    //this.scale *= args.scale;
                    args.scale = 1;


                    this.scaleX = this.scale;
                    this.scaleY = this.scale;

                    break;
                }
            }
        });

    }
}