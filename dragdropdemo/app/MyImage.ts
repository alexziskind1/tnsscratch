import {Image} from "ui/image";
import {Point} from "./point";
import gesturesModule = require("ui/gestures");

export class MyImage extends Image {
    private lastLocation: Point = new Point(0,0);

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

    }

}