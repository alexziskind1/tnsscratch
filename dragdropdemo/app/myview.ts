import viewModule = require("ui/core/view");
import gesturesModule = require("ui/gestures");

export class MyView extends viewModule.View {

    private _height: number;
    private _width: number;

    constructor(options?: viewModule.Options) {
        super(options);
        this._height = options.height;
        this._width = options.width;
    }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
        this.setMeasuredDimension(this._width, this._height);
    }
    
    public onLoaded(): void {
        console.log("myView loaded");
    }

}