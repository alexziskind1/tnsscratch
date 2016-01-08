import gesturesModule = require("ui/gestures");
import pageModule = require("ui/page");
import colorModule = require("color");
import absoluteLayoutModule = require("ui/layouts/absolute-layout");
import wrapLayoutModule = require("ui/layouts/wrap-layout");
import labelModule = require("ui/label");
import viewModule = require("ui/core/view");
//import {PanStateEnum} from "./panStateEnum";
import {Point} from "./point";
import {MyView} from "./myview";
import {MyLabel} from "./myLabel";
import {MyOptions} from "./myOptions";

var UIColor: any;

class MainPageController {

    public page: pageModule.Page;
    public layoutBase: wrapLayoutModule.WrapLayout;
    public layoutAbs: absoluteLayoutModule.AbsoluteLayout;
    public lblDrag: labelModule.Label;
    public lastLocation: Point = new Point(0,0);

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

        //var newView = new MyView();
        //this.layoutBase.addChild(newView);


/*
        var myLabel = new MyLabel();
        myLabel.text = "My Label";
        this.layoutBase.addChild(myLabel);
        */
    }

    public getViewRefs() {
        this.layoutBase = <wrapLayoutModule.WrapLayout>this.page.getViewById("layoutBase");
        this.layoutAbs = <absoluteLayoutModule.AbsoluteLayout>this.page.getViewById("layoutAbs");
        this.lblDrag = <labelModule.Label>this.page.getViewById("lblDrag");
    }
    
    private counter: number = 1;

    public tapAction() {

        
        var options: MyOptions = new MyOptions;
            options.height = 50;
            options.width=50;
            options.marginLeft= 0;
            options.marginRight= 60;
             options.marginTop= 2;
             options.marginBottom= 70;
             options.className= 'myview';
        
        
         var newView = new MyView(options);
         newView.className = "myview";
         newView.backgroundColor = new colorModule.Color(1, 200,0,78);
         newView.style.backgroundColor = new colorModule.Color(1, 200,0,78);
         this.layoutBase.addChild(newView);
         

         
         
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
         
        var myLabel = new MyLabel();
        myLabel.text = "My Label " + this.counter;
        newAbsLay.addChild(myLabel);
        this.counter++;
       
    }

    public attachEventListeners() {
        this.layoutBase.on(gesturesModule.GestureTypes.pan, (args: gesturesModule.PanGestureEventData) => {
            switch (args.state) {
                case gesturesModule.GestureStateTypes.began: {
                    this.lastLocation.x = this.lblDrag.ios.center.x;
                    this.lastLocation.y = this.lblDrag.ios.center.y;
                }
                case gesturesModule.GestureStateTypes.changed:
                case gesturesModule.GestureStateTypes.ended: {
                    var translationX = args.deltaX;
                    var translationY = args.deltaY;

                    var change = translationY * -1;
                    if (change != 0) {

                    }

                    var center = {
                        x: this.lastLocation.x + translationX,
                        y: this.lastLocation.y + translationY
                    };

                    break;
                }
            }
        });
    }
}

var mpc = new MainPageController();
exports.pageLoaded = (args)=> mpc.pageLoaded(args);


