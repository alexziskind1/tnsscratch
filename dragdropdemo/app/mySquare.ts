import {Label, PanGestureEventData, GestureTypes, GestureStateTypes} from "ui";
import {Point, Size} from "./common/geometry";
import {MyViewOptions} from "./myViewOptions";

import * as gen from "./common/generatorHelper";


export class MySquare extends Label {
    private lastLocation: Point = new Point(0,0);

    constructor(private options: MyViewOptions){
        super();

        this.on(GestureTypes.pan, (args: PanGestureEventData) => {
            switch (args.state) {
                case GestureStateTypes.began: {
                    this.dragStarted();
                    break;
                }
                case GestureStateTypes.changed:
                    this.dragged(args);
                    break;
                case GestureStateTypes.ended: {
                    this.dragged(args);
                    this.dradEnded();
                    break;
                }
            }
        });
    }

    //View lifecycle

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
        //randomize color
        var randColor = gen.generateRandomColor();
        this.backgroundColor = randColor;

        //randomize location
        var inSize = new Size(this.parent.getMeasuredWidth() - this.options.width, this.parent.getMeasuredHeight() - this.options.height);
        var randPoint = gen.generateRandomPoint(inSize);

        this.translateX = randPoint.x;
        this.translateY = randPoint.y;
        this.applyStationaryShadow();
        
        this.setMeasuredDimension(this.options.width, this.options.height);
    }


    //Private methods

    private dragged(args: PanGestureEventData) {
        var translation  = args.ios.translationInView(this.parent.ios);
        var newCenter = {
            x: this.lastLocation.x + translation.x,
            y: this.lastLocation.y + translation.y
        };
        this.ios.center = newCenter;
    }

    private dragStarted() {
        this.lastLocation.x = this.ios.center.x;
        this.lastLocation.y = this.ios.center.y;
        this.parent.ios.bringSubviewToFront(this.ios);
        this.applyRaisedShadow();
        this.animate({
            scale: {
                x: 1.5,
                y: 1.5
            },
            duration: 100
        });
    }

    private dradEnded() {
        this.applyStationaryShadow();
        this.animate({
            scale: {
                x: 1,
                y: 1
            },
            duration: 100
        });
    }

    private applyStationaryShadow() {
        if (this.ios) {
            this.ios.layer.shadowOffset = { height: 2, width: -2 };
            this.ios.layer.shadowRadius = 5;
            this.ios.layer.shadowOpacity = 0.3;
        }
    }

    private applyRaisedShadow() {
        if (this.ios) {
            this.ios.layer.shadowOffset = { height: 10, width: -10 };
            this.ios.layer.shadowOpacity = 0.5;
        }
    }
}