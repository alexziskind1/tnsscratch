import absoluteLayoutModule = require("ui/layouts/absolute-layout");
import viewModule = require("ui/core/view");
import gesturesModule = require("ui/gestures");
import colorModule = require("color");
import {Point} from "./point";


export class MyCustomView extends viewModule.View {

    private _height: number;
    private _width: number;
    private _lastLocation: Point = new Point(0,0);

    constructor(options?: viewModule.Options) {
        super();
        this._height = options.height;
        this._width = options.width;
        var rand = Math.random();



        this.on(gesturesModule.GestureTypes.tap, (args: gesturesModule.GestureEventData) => {
            alert('tap');
        });

    }

    public onLoaded() {

    }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
        this.setMeasuredDimension(this._width, this._height);
        this.style.backgroundColor = new colorModule.Color("red");
        this.style.color = new colorModule.Color("red");
    }

    public onLayout(left: number, top: number, right: number, bottom: number): void {
        
        this.backgroundColor = new colorModule.Color("red");
        this.color = new colorModule.Color("red");
         this.on(gesturesModule.GestureTypes.pan, (args: gesturesModule.PanGestureEventData) => {
            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    this._lastLocation.x = this.ios.center.x;
                    this._lastLocation.y = this.ios.center.y;
                    break;
                }
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    var newCenter = {
                        x: this._lastLocation.x + args.deltaX,
                        y: this._lastLocation.y + args.deltaY
                    };
                    this.ios.center = newCenter;
                    break;
                }
            }
        }, this);
    }

}