import {Color} from "color";
import {PanGestureEventData, GestureTypes, GestureStateTypes} from "ui/gestures";
import {Label} from "ui/label";
import {Point} from "./point";
import {MyViewOptions} from "./myViewOptions";


export class MySquare extends Label {

    //private _width: number = 50;
    //private _height: number = 50;
    private lastLocation: Point = new Point(0,0);

    constructor(private options: MyViewOptions){
        super();
        //this._width = options.width;
        //this._height = options.height;

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
        let blueValue = Math.floor(Math.random() * 255) + 1;
        let greenValue = Math.floor(Math.random() * 255) + 1;
        let redValue = Math.floor(Math.random() * 255) + 1;
        
        this.setMeasuredDimension(this.options.width, this.options.height);
        this.backgroundColor = new Color(255, redValue,greenValue,blueValue);
        this.color = new Color(255, redValue,greenValue,blueValue);
        
        //randomize location
        let pointX = Math.floor(Math.random() * (this.parent.getMeasuredWidth() - this.options.width)) + 1;
        let pointY = Math.floor(Math.random() * (this.parent.getMeasuredHeight() - this.options.height)) + 1

        this.translateX = pointX;
        this.translateY = pointY;
        this.applyStationaryShadow();
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
            //this.ios.layer.shadowRadius = 5;
            this.ios.layer.shadowOpacity = 0.5;
        }
    }
}