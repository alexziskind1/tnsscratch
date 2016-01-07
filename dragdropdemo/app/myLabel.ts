import {Label} from "ui/label";
import {Point} from "./point";
import gesturesModule = require("ui/gestures");

export class MyLabel extends Label {

   public lastLocation: Point = new Point(0,0);


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
                    var newCenter = {
                        x: this.lastLocation.x + args.deltaX,
                        y: this.lastLocation.y + args.deltaY
                    };

                    this.ios.center = newCenter;

                    break;
                }
            }
        });

    }
}