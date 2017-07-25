"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = require("ui/image");
var myglobalModule = require("../common/myglobal");
var ImageView = (function (_super) {
    __extends(ImageView, _super);
    /*
        constructor(private rect: Rect){
            super();
        }
        */
    function ImageView() {
        return _super.call(this) || this;
    }
    //View lifecycle
    ImageView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        //super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        //var width = utils.layout.getMeasureSpecSize(widthMeasureSpec);
        //var height = utils.layout.getMeasureSpecSize(heightMeasureSpec);
        //var width = this.page.getMeasuredWidth();
        //var height = this.page.getMeasuredHeight();
        //var width = this.pageSize.width;
        //var height = this.pageSize.height;
        var width = myglobalModule.pageSize.width;
        var height = myglobalModule.pageSize.height;
        //this.setMeasuredDimension(this.rect.size.width, this.rect.size.height);
        this.setMeasuredDimension(width, height);
    };
    ImageView.prototype.onLayout = function (left, top, right, bottom) {
        var a = 0;
    };
    return ImageView;
}(image_1.Image));
exports.ImageView = ImageView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2VWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0NBQWlDO0FBS2pDLG1EQUFzRDtBQUd0RDtJQUErQiw2QkFBSztJQUVoQzs7OztVQUlNO0lBQ047ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFRCxnQkFBZ0I7SUFDVCw2QkFBUyxHQUFoQixVQUFpQixnQkFBd0IsRUFBRSxpQkFBeUI7UUFFaEUsdURBQXVEO1FBRXZELGdFQUFnRTtRQUNoRSxrRUFBa0U7UUFFbEUsMkNBQTJDO1FBQzNDLDZDQUE2QztRQUM3QyxrQ0FBa0M7UUFDbEMsb0NBQW9DO1FBQ3BDLElBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzFDLElBQUksTUFBTSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRTVDLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTSw0QkFBUSxHQUFmLFVBQWdCLElBQVksRUFBRSxHQUFXLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDcEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0FBQyxBQWpDRCxDQUErQixhQUFLLEdBaUNuQztBQWpDWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEsIFBhbkdlc3R1cmVFdmVudERhdGEsIEdlc3R1cmVUeXBlcywgR2VzdHVyZVN0YXRlVHlwZXMgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcblxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcblxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcblxuaW1wb3J0IHsgUG9pbnQsIFNpemUsIFJlY3QgfSBmcm9tIFwiLi4vY29tbW9uL2dlb21ldHJ5XCI7XG5pbXBvcnQgbXlnbG9iYWxNb2R1bGUgPSByZXF1aXJlKFwiLi4vY29tbW9uL215Z2xvYmFsXCIpO1xuXG5cbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXcgZXh0ZW5kcyBJbWFnZSB7XG5cbiAgICAvKlxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlY3Q6IFJlY3Qpe1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8vVmlldyBsaWZlY3ljbGVcbiAgICBwdWJsaWMgb25NZWFzdXJlKHdpZHRoTWVhc3VyZVNwZWM6IG51bWJlciwgaGVpZ2h0TWVhc3VyZVNwZWM6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICAgIC8vc3VwZXIub25NZWFzdXJlKHdpZHRoTWVhc3VyZVNwZWMsIGhlaWdodE1lYXN1cmVTcGVjKTtcblxuICAgICAgICAvL3ZhciB3aWR0aCA9IHV0aWxzLmxheW91dC5nZXRNZWFzdXJlU3BlY1NpemUod2lkdGhNZWFzdXJlU3BlYyk7XG4gICAgICAgIC8vdmFyIGhlaWdodCA9IHV0aWxzLmxheW91dC5nZXRNZWFzdXJlU3BlY1NpemUoaGVpZ2h0TWVhc3VyZVNwZWMpO1xuXG4gICAgICAgIC8vdmFyIHdpZHRoID0gdGhpcy5wYWdlLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgICAgLy92YXIgaGVpZ2h0ID0gdGhpcy5wYWdlLmdldE1lYXN1cmVkSGVpZ2h0KCk7XG4gICAgICAgIC8vdmFyIHdpZHRoID0gdGhpcy5wYWdlU2l6ZS53aWR0aDtcbiAgICAgICAgLy92YXIgaGVpZ2h0ID0gdGhpcy5wYWdlU2l6ZS5oZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IG15Z2xvYmFsTW9kdWxlLnBhZ2VTaXplLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gbXlnbG9iYWxNb2R1bGUucGFnZVNpemUuaGVpZ2h0O1xuXG4gICAgICAgIC8vdGhpcy5zZXRNZWFzdXJlZERpbWVuc2lvbih0aGlzLnJlY3Quc2l6ZS53aWR0aCwgdGhpcy5yZWN0LnNpemUuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zZXRNZWFzdXJlZERpbWVuc2lvbih3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gICAgcHVibGljIG9uTGF5b3V0KGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKSB7XG4gICAgICAgIHZhciBhID0gMDtcbiAgICB9XG5cbn0iXX0=