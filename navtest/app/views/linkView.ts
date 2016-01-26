import {Color} from "color";
import {GestureEventData, PanGestureEventData, GestureTypes, GestureStateTypes} from "ui/gestures";
import {Label} from "ui/label";
import {Point} from "../point";
import {Rect} from "../rect";
import {Page} from "ui/page";
import {LinkItem} from "../linkItem";
//import {LinkViewOptions} from "./linkViewOptions";


export class LinkView extends Label {

    //private _width: number = 50;
    //private _height: number = 50;
    private lastLocation: Point = new Point(0,0);
    private linkItem: LinkItem;
    private showLinkPickerCallback: Function;

    constructor(li: LinkItem, private rect: Rect, showLPCallback: Function){
        super();
        //this._width = options.width;
        //this._height = options.height;
        this.linkItem = li;
        this.showLinkPickerCallback = showLPCallback;

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

        this.on(GestureTypes.longPress, (args: GestureEventData) => {
            console.log('link view long press');
        });

        this.on(GestureTypes.tap, (args: GestureEventData) => {
            console.log('link view tap');
            this.showLinkPickerCallback.call(this, this.linkItem);

            //this.showLinkPicker();
        });


    }

/*
    public showLinkPicker() {
        var p: Page = <Page>this.page;
        var fullscreen: boolean = true;

        p.showModal("../linkPicker", "Context from showModal", function (username: string, password: string) {
            console.log(username + "/" + password);
            //label.text = username + "/" + password;
        }, fullscreen);
    }
    */

    //View lifecycle

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
        //randomize color
        let blueValue = Math.floor(Math.random() * 255) + 1;
        let greenValue = Math.floor(Math.random() * 255) + 1;
        let redValue = Math.floor(Math.random() * 255) + 1;

        this.setMeasuredDimension(this.rect.size.width, this.rect.size.height);
        this.backgroundColor = new Color(255, redValue,greenValue,blueValue);
        this.color = new Color(255, redValue,greenValue,blueValue);

        //randomize location
        //let pointX = Math.floor(Math.random() * (this.parent.getMeasuredWidth() - this.rect.size.width)) + 1;
        //let pointY = Math.floor(Math.random() * (this.parent.getMeasuredHeight() - this.rect.size.height)) + 1



        this.translateX = this.rect.origin.x;
        this.translateY = this.rect.origin.y;
        //this.applyStationaryShadow();
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