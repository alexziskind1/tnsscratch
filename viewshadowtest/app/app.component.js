"use strict";
var core_1 = require("@angular/core");
var color_1 = require('color');
var AppComponent = (function () {
    function AppComponent() {
        this.slText = 'dfdf';
        console.log('ctorf');
    }
    Object.defineProperty(AppComponent.prototype, "shadowColor", {
        get: function () {
            return new color_1.Color('#888888');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "shadowOffset", {
        get: function () {
            return 2.0;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onLoaded = function (args) {
        var tnsView = args.object;
        if (tnsView.android) {
            var nativeAnView = tnsView.android;
            if (nativeAnView.setShadowLayer) {
                nativeAnView.setShadowLayer(10.0, this.shadowOffset, this.shadowOffset, this.shadowColor.android);
            }
            else {
                var shape = new android.graphics.drawable.GradientDrawable();
                shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
                shape.setColor(android.graphics.Color.parseColor("#eeeeee"));
                nativeAnView.setBackgroundDrawable(shape);
                nativeAnView.setElevation(20);
            }
        }
        if (tnsView.ios) {
            var nativeView = tnsView.ios;
            setTimeout(function () {
                tnsView.clipToBounds = false;
                tnsView.ios.clipsToBounds = false;
            }, 30);
            nativeView.layer.shadowColor = this.shadowColor.ios.CGColor;
            nativeView.layer.shadowOffset = CGSizeMake(0, this.shadowOffset);
            nativeView.layer.shadowOpacity = 0.5;
            nativeView.layer.shadowRadius = 5.0;
        }
    };
    AppComponent.prototype.onTap = function (args) {
        console.log('AppComponent tag');
        /*
        const nativeView = (<View>args.object).ios;
        nativeView.layer.shadowColor = this.shadowColor.ios.CGColor;
        nativeView.layer.shadowOffset = CGSizeMake(this.shadowOffset, this.shadowOffset);
        nativeView.layer.shadowOpacity = 1.0;
        nativeView.layer.shadowRadius = 2.0;
        */
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQVMxQyxzQkFBc0IsT0FBTyxDQUFDLENBQUE7QUFTOUI7SUFXSTtRQVRPLFdBQU0sR0FBVyxNQUFNLENBQUM7UUFVM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBVkQsc0JBQWMscUNBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYyxzQ0FBWTthQUExQjtZQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQU1NLCtCQUFRLEdBQWYsVUFBZ0IsSUFBZTtRQUMzQixJQUFJLE9BQU8sR0FBaUIsSUFBSSxDQUFDLE1BQU8sQ0FBQztRQUV6QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixZQUFZLENBQUMsY0FBYyxDQUN2QixJQUFJLEVBQ0osSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQzNCLENBQUM7WUFDTixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM3RCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxZQUFZLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNMLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFFN0IsVUFBVSxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDdEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRVAsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzVELFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pFLFVBQVUsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztZQUNyQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEMsQ0FBQztJQUNMLENBQUM7SUFFTSw0QkFBSyxHQUFaLFVBQWEsSUFBc0I7UUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDOzs7Ozs7VUFNRTtJQUVOLENBQUM7SUFsRUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDOztvQkFBQTtJQWdFRixtQkFBQztBQUFELENBQUMsQUEvREQsSUErREM7QUEvRFksb0JBQVksZUErRHhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndWkvbGFiZWwnO1xuaW1wb3J0IHsgTGF5b3V0QmFzZSB9IGZyb20gJ3VpL2xheW91dHMvbGF5b3V0LWJhc2UnO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9ncmlkLWxheW91dCc7XG5pbXBvcnQgeyBFdmVudERhdGEsIFByb3BlcnR5Q2hhbmdlRGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd1aS9nZXN0dXJlcyc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcblxuZGVjbGFyZSBjb25zdCBDR1NpemVNYWtlOiBhbnk7XG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc2xUZXh0OiBzdHJpbmcgPSAnZGZkZic7XG4gICAgcHJvdGVjdGVkIGdldCBzaGFkb3dDb2xvcigpOiBDb2xvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoJyM4ODg4ODgnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNoYWRvd09mZnNldCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMi4wO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY3RvcmYnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCB0bnNWaWV3ID0gKDxTdGFja0xheW91dD5hcmdzLm9iamVjdCk7XG5cbiAgICAgICAgaWYgKHRuc1ZpZXcuYW5kcm9pZCkge1xuICAgICAgICAgICAgbGV0IG5hdGl2ZUFuVmlldyA9IHRuc1ZpZXcuYW5kcm9pZDtcbiAgICAgICAgICAgIGlmIChuYXRpdmVBblZpZXcuc2V0U2hhZG93TGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBuYXRpdmVBblZpZXcuc2V0U2hhZG93TGF5ZXIoXG4gICAgICAgICAgICAgICAgICAgIDEwLjAsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhZG93T2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYWRvd09mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFkb3dDb2xvci5hbmRyb2lkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHNoYXBlID0gbmV3IGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZSgpO1xuICAgICAgICAgICAgICAgIHNoYXBlLnNldFNoYXBlKGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS5PVkFMKTtcbiAgICAgICAgICAgICAgICBzaGFwZS5zZXRDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLnBhcnNlQ29sb3IoXCIjZWVlZWVlXCIpKTtcbiAgICAgICAgICAgICAgICBuYXRpdmVBblZpZXcuc2V0QmFja2dyb3VuZERyYXdhYmxlKHNoYXBlKTtcbiAgICAgICAgICAgICAgICBuYXRpdmVBblZpZXcuc2V0RWxldmF0aW9uKDIwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0bnNWaWV3Lmlvcykge1xuICAgICAgICAgICAgbGV0IG5hdGl2ZVZpZXcgPSB0bnNWaWV3LmlvcztcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG5zVmlldy5jbGlwVG9Cb3VuZHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0bnNWaWV3Lmlvcy5jbGlwc1RvQm91bmRzID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAzMCk7XG5cbiAgICAgICAgICAgIG5hdGl2ZVZpZXcubGF5ZXIuc2hhZG93Q29sb3IgPSB0aGlzLnNoYWRvd0NvbG9yLmlvcy5DR0NvbG9yO1xuICAgICAgICAgICAgbmF0aXZlVmlldy5sYXllci5zaGFkb3dPZmZzZXQgPSBDR1NpemVNYWtlKDAsIHRoaXMuc2hhZG93T2Zmc2V0KTtcbiAgICAgICAgICAgIG5hdGl2ZVZpZXcubGF5ZXIuc2hhZG93T3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgIG5hdGl2ZVZpZXcubGF5ZXIuc2hhZG93UmFkaXVzID0gNS4wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpIHtcblxuICAgICAgICBjb25zb2xlLmxvZygnQXBwQ29tcG9uZW50IHRhZycpO1xuICAgICAgICAvKlxuICAgICAgICBjb25zdCBuYXRpdmVWaWV3ID0gKDxWaWV3PmFyZ3Mub2JqZWN0KS5pb3M7XG4gICAgICAgIG5hdGl2ZVZpZXcubGF5ZXIuc2hhZG93Q29sb3IgPSB0aGlzLnNoYWRvd0NvbG9yLmlvcy5DR0NvbG9yO1xuICAgICAgICBuYXRpdmVWaWV3LmxheWVyLnNoYWRvd09mZnNldCA9IENHU2l6ZU1ha2UodGhpcy5zaGFkb3dPZmZzZXQsIHRoaXMuc2hhZG93T2Zmc2V0KTtcbiAgICAgICAgbmF0aXZlVmlldy5sYXllci5zaGFkb3dPcGFjaXR5ID0gMS4wO1xuICAgICAgICBuYXRpdmVWaWV3LmxheWVyLnNoYWRvd1JhZGl1cyA9IDIuMDtcbiAgICAgICAgKi9cblxuICAgIH1cbn1cbiJdfQ==