import {Label} from "ui/label";
import {Point} from "./point";
import gesturesModule = require("ui/gestures");

export class MyLabel extends Label {

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


    constructor(){
        super();

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