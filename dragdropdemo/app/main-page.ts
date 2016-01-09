import gesturesModule = require("ui/gestures");
import pageModule = require("ui/page");
import colorModule = require("color");
import absoluteLayoutModule = require("ui/layouts/absolute-layout");
import wrapLayoutModule = require("ui/layouts/wrap-layout");
import labelModule = require("ui/label");
import viewModule = require("ui/core/view");
import imageModule = require("ui/image");
import imageSourceModule = require("image-source");
import enums = require("ui/enums");

import {MyCustomView} from "./myCustomView";
import {MyLabel} from "./myLabel";
import {MyOptions} from "./myOptions";
import {MyImage} from "./myImage";
import {Point} from "./point";

var UIColor: any;

class MainPageController {

    public page: pageModule.Page;
    //public layoutBase: wrapLayoutModule.WrapLayout;
    public layoutBase: absoluteLayoutModule.AbsoluteLayout;
    public layoutAbs: absoluteLayoutModule.AbsoluteLayout;
    public lblDrag: labelModule.Label;
    private lastLocation: Point = new Point(0,0);


    private _level: number = 25;
    get level(): number {
        return this._level;
    }
    set level(newLevel: number) {
        this._level = newLevel;
    }

    public pageLoaded(args) {
        this.page = <pageModule.Page>args.object;
        this.page.bindingContext = this;
        this.getViewRefs();
        //this.attachEventListeners();
    }

    public getViewRefs() {
        //this.layoutBase = <wrapLayoutModule.WrapLayout>this.page.getViewById("layoutBase");
        this.layoutBase = <absoluteLayoutModule.AbsoluteLayout>this.page.getViewById("layoutBase");
       
        //this.layoutAbs = <absoluteLayoutModule.AbsoluteLayout>this.page.getViewById("layoutAbs");
        //this.lblDrag = <labelModule.Label>this.page.getViewById("lblDrag");
    }

    private counter: number = 0;

    public addLabel() {
        this.counter++;
        
        let halfSizeOfView = 25.0;
        let maxViews = 25;
        //let insetSize = CGRectInset(self.view.bounds, CGFloat(Int(2 * halfSizeOfView)), CGFloat(Int(2 * halfSizeOfView))).size
        
        
                var options: MyOptions = new MyOptions;
            options.height = 50;
            options.width=50;
            options.marginLeft= 0;
            options.marginRight= 60;
             options.marginTop= 2;
             options.marginBottom= 70;
             options.className= 'myview';
        
        
        // Add the Views
        for (var i = 0; i < maxViews; i++) {
            
            let pointX = Math.floor(Math.random() * 200) + 1;
            let pointY = Math.floor(Math.random() * 200) + 1;
            
            options.marginLeft = pointX;
            options.marginTop = pointY;
            
            var myLabel = new MyLabel(options);
            //myLabel.text = "My Label " + this.counter;
            this.layoutBase.addChild(myLabel);
            
            
            //let newView = MyView(frame: CGRectMake(pointX, pointY, 50, 50))
            //self.view.addSubview(newView)
        }
        

    }

    public addView() {
        var options: MyOptions = new MyOptions;
            options.height = 50;
            options.width=50;
            options.marginLeft= 0;
            options.marginRight= 60;
             options.marginTop= 2;
             options.marginBottom= 70;
             options.className= 'myview';

        
        var myCustView = new MyCustomView(options);
        this.layoutBase.addChild(myCustView);
        

        /*
        var image = new MyImage();
        image.stretch = enums.Stretch.none;
        var imageSource = imageSourceModule.fromResource("icon-72");
        image.imageSource = imageSource;
        this.layoutBase.addChild(image);
        */


        /*
        var newAbsLay = new absoluteLayoutModule.AbsoluteLayout(options);
        newAbsLay.backgroundColor = new colorModule.Color(1, 200,0,78);
        this.layoutBase.addChild(newAbsLay);
        newAbsLay.borderColor = new colorModule.Color(1, 50, 100, 200);
        newAbsLay.borderWidth = 5;

        newAbsLay.ios.layer.borderWidth = 1.0;
        newAbsLay.ios.layer.borderColor = new colorModule.Color(1, 50, 100, 200);
        newAbsLay.ios.layer.cornerRadius = 2.0;
        newAbsLay.height = 40;
        newAbsLay.width = 60;
        newAbsLay.style.backgroundColor = new colorModule.Color(1, 200,0,78);
        //newAbsLay.ios.layer.setShadowOffset(CGSizeMake(-2, -2));
        //newAbsLay.ios.layer.setShadowColor(UIColor.lightGrayColor.CGColor);
        //newAbsLay.ios.layer.setShadowOpacity(0.5);
        */
        
        /*
        var myLabel = new MyLabel();
        myLabel.text = "Abs Label " + this.counter;
        newAbsLay.addChild(myLabel);
        this.counter++;
        */

        /*
        newAbsLay.on(gesturesModule.GestureTypes.pan, (args: gesturesModule.PanGestureEventData) => {
            alert('abs pan');
            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    this.lastLocation.x = newAbsLay.ios.center.x;
                    this.lastLocation.y = newAbsLay.ios.center.y;
                    break;
                }
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    var newCenter = {
                        x: this.lastLocation.x + args.deltaX,
                        y: this.lastLocation.y + args.deltaY
                    };
                    newAbsLay.ios.center = newCenter;
                    break;
                }
            }
        });
        */

    }

/*
    public attachEventListeners() {
        this.layoutAbs.on(gesturesModule.GestureTypes.pan, (args: gesturesModule.PanGestureEventData) => {
            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    this.lastLocation.x = this.layoutAbs.ios.center.x;
                    this.lastLocation.y = this.layoutAbs.ios.center.y;
                    break;
                }
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    var newCenter = {
                        x: this.lastLocation.x + args.deltaX,
                        y: this.lastLocation.y + args.deltaY
                    };
                    this.layoutAbs.ios.center = newCenter;
                    break;
                }
            }
        });
    }
    */

}

var mpc = new MainPageController();
exports.pageLoaded = (args)=> mpc.pageLoaded(args);


