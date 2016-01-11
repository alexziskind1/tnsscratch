import pageModule = require("ui/page");
import absoluteLayoutModule = require("ui/layouts/absolute-layout");

import {MySquare} from "./mySquare";
import {MyViewOptions} from "./myViewOptions";

let Constants = {
    squareSize: 50,
    maxNumViews: 25
};

class MainPageController {

    public page: pageModule.Page;
    public layoutBase: absoluteLayoutModule.AbsoluteLayout;
    private _pageWidth: number;
    private _pageHeight: number;

    public pageLoaded(args) {
        this.page = <pageModule.Page>args.object;
        this.page.bindingContext = this;
        this.getViewRefs();
        
        this._pageWidth = this.page.getMeasuredWidth();
        this._pageHeight = this.page.getMeasuredHeight();
        
        this.generateSquares(Constants.maxNumViews);
    }

    public getViewRefs() {
        this.layoutBase = <absoluteLayoutModule.AbsoluteLayout>this.page.getViewById("layoutBase");
    }

    private generateSquares(numSquares: number) {
        var options: MyViewOptions = {
            height: Constants.squareSize,
            width: Constants.squareSize,
            parentHeight: this._pageHeight,
            parentWidth: this._pageWidth
        };
        for (var i = 0; i < numSquares; i++) {
            this.createAndAddSquare(options);
        }
    }

    private createAndAddSquare(options: MyViewOptions) {
        var mySquare = new MySquare(options);
        this.layoutBase.addChild(mySquare);
    }

    public addLabel() {
        // Add the Views
        this.generateSquares(Constants.maxNumViews);
    }
}

var mpc = new MainPageController();
exports.pageLoaded = (args)=> mpc.pageLoaded(args);


