import gesturesModule = require("ui/gestures");
import pageModule = require("ui/page");
import absoluteLayoutModule = require("ui/layouts/absolute-layout");
import labelModule = require("ui/label");
import {PanStateEnum} from "./panStateEnum";
import {Point} from "./point";




class MainPageController {
    
    public page: pageModule.Page;
    public layoutBase: absoluteLayoutModule.AbsoluteLayout;
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
        this.getViewRefs();
        this.attachEventListeners();
    }
    
    public getViewRefs() {
        this.layoutBase = <absoluteLayoutModule.AbsoluteLayout>this.page.getViewById("layoutBase");
        this.lblDrag = <labelModule.Label>this.page.getViewById("lblDrag");
    }
    
    public attachEventListeners() {
        this.layoutBase.on(gesturesModule.GestureTypes.pan, function (args: gesturesModule.PanGestureEventData) {
           
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
exports.pageLoaded = mpc.pageLoaded;


