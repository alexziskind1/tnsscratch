"use strict";
var core_1 = require("@angular/core");
var color_1 = require("color");
var FloatBtnComponent = (function () {
    function FloatBtnComponent() {
        this.tap = new core_1.EventEmitter();
    }
    Object.defineProperty(FloatBtnComponent.prototype, "shadowColor", {
        get: function () {
            return new color_1.Color('#888888');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FloatBtnComponent.prototype, "shadowOffset", {
        get: function () {
            return 2.0;
        },
        enumerable: true,
        configurable: true
    });
    FloatBtnComponent.prototype.onTap = function (args) {
        this.tap.emit(args);
    };
    FloatBtnComponent.prototype.onTouch = function (args) {
        var theBtn = args.view;
        switch (args.action) {
            case 'down':
                theBtn.className = 'float-btn down';
                break;
            case 'up':
                theBtn.className = 'float-btn';
                break;
        }
    };
    FloatBtnComponent.prototype.onLoaded = function (args) {
        var tnsView = args.object;
        setTimeout(function () {
            console.log('timeout done');
            tnsView.clipToBounds = false;
            if (tnsView.ios)
                tnsView.ios.clipsToBounds = false;
        }, 200);
        if (tnsView.android) {
            var nativeAnView = tnsView.android;
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
            shape.setColor(android.graphics.Color.parseColor("#30bcff"));
            nativeAnView.setBackgroundDrawable(shape);
            nativeAnView.setElevation(20);
        }
        else if (tnsView.ios) {
            var nativeView = tnsView.ios;
            nativeView.layer.shadowColor = this.shadowColor.ios.CGColor;
            nativeView.layer.shadowOffset = CGSizeMake(0, this.shadowOffset);
            nativeView.layer.shadowOpacity = 0.5;
            nativeView.layer.shadowRadius = 5.0;
        }
    };
    return FloatBtnComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FloatBtnComponent.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FloatBtnComponent.prototype, "tap", void 0);
FloatBtnComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "float-btn",
        template: "\n    <GridLayout class=\"float-btn-wrapper\">\n        <GridLayout class=\"float-btn-shadow\" (loaded)=\"onLoaded($event)\"> \n            <StackLayout class=\"float-btn\" (tap)=\"onTap($event)\" (touch)=\"onTouch($event)\">  \n                <Label class=\"float-btn-text\" [text]=\"text\"></Label>\n            </StackLayout>\n        </GridLayout>\n    </GridLayout>\n    ",
        styles: [
            "\n            .float-btn-wrapper {\n                width:75;\n                height:75;\n            }\n            .float-btn-shadow {\n                width:56;\n                height:56;\n            }\n\n            .float-btn {\n                background-color:#30bcff;\n                border-radius: 28;\n                width:56;\n                height:56;\n                text-align: center;\n                vertical-align: middle;         \n            }\n\n             .float-btn.down {\n                 animation-name: down;\n                 animation-duration: 0.2s;\n                 animation-fill-mode: forwards;\n             }\n\n            .float-btn-text {\n                color:#fff;\n                font-size: 36;\n                margin-top:-4;\n            }\n\n            @keyframes down {\n                from { background-color: #30bcff; }\n                to { background-color: purple;  }\n            }\n        "
        ]
    })
], FloatBtnComponent);
exports.FloatBtnComponent = FloatBtnComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsb2F0LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF1RTtBQUd2RSwrQkFBOEI7QUEwRDlCLElBQWEsaUJBQWlCO0lBbkQ5QjtRQXNEYyxRQUFHLEdBQW1DLElBQUksbUJBQVksRUFBb0IsQ0FBQztJQW9EekYsQ0FBQztJQWpERyxzQkFBYywwQ0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFjLDJDQUFZO2FBQTFCO1lBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBRU0saUNBQUssR0FBWixVQUFhLElBQXNCO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsSUFBMkI7UUFDdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLE1BQU07Z0JBQ1AsTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDcEMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLE1BQU0sQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO2dCQUMvQixLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUVNLG9DQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLE9BQU8sR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRS9CLFVBQVUsQ0FBQztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDMUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDN0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdELFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUM3QixVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDNUQsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakUsVUFBVSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQXJEWTtJQUFSLFlBQUssRUFBRTs7K0NBQWM7QUFDWjtJQUFULGFBQU0sRUFBRTs4QkFBTSxtQkFBWTs4Q0FBMEQ7QUFINUUsaUJBQWlCO0lBbkQ3QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSwyWEFRVDtRQUNELE1BQU0sRUFBRTtZQUNKLCs3QkFtQ0M7U0FDSjtLQUNKLENBQUM7R0FDVyxpQkFBaUIsQ0F1RDdCO0FBdkRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndWkvZ2VzdHVyZXMnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcic7XG5cblxuZGVjbGFyZSBjb25zdCBDR1NpemVNYWtlOiBhbnk7XG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcImZsb2F0LWJ0blwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJmbG9hdC1idG4td3JhcHBlclwiPlxuICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cImZsb2F0LWJ0bi1zaGFkb3dcIiAobG9hZGVkKT1cIm9uTG9hZGVkKCRldmVudClcIj4gXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmbG9hdC1idG5cIiAodGFwKT1cIm9uVGFwKCRldmVudClcIiAodG91Y2gpPVwib25Ub3VjaCgkZXZlbnQpXCI+ICBcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJmbG9hdC1idG4tdGV4dFwiIFt0ZXh0XT1cInRleHRcIj48L0xhYmVsPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIDwvR3JpZExheW91dD5cbiAgICBgLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgXG4gICAgICAgICAgICAuZmxvYXQtYnRuLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOjc1O1xuICAgICAgICAgICAgICAgIGhlaWdodDo3NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mbG9hdC1idG4tc2hhZG93IHtcbiAgICAgICAgICAgICAgICB3aWR0aDo1NjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NTY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mbG9hdC1idG4ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzMwYmNmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyODtcbiAgICAgICAgICAgICAgICB3aWR0aDo1NjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NTY7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAuZmxvYXQtYnRuLmRvd24ge1xuICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZG93bjtcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mbG9hdC1idG4tdGV4dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZG93biB7XG4gICAgICAgICAgICAgICAgZnJvbSB7IGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cbiAgICAgICAgICAgICAgICB0byB7IGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTsgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRmxvYXRCdG5Db21wb25lbnQge1xuXG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAgIEBPdXRwdXQoKSB0YXA6IEV2ZW50RW1pdHRlcjxHZXN0dXJlRXZlbnREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8R2VzdHVyZUV2ZW50RGF0YT4oKTtcblxuXG4gICAgcHJvdGVjdGVkIGdldCBzaGFkb3dDb2xvcigpOiBDb2xvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoJyM4ODg4ODgnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNoYWRvd09mZnNldCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMi4wO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMudGFwLmVtaXQoYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVG91Y2goYXJnczogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCB0aGVCdG4gPSBhcmdzLnZpZXc7XG4gICAgICAgIHN3aXRjaCAoYXJncy5hY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgIHRoZUJ0bi5jbGFzc05hbWUgPSAnZmxvYXQtYnRuIGRvd24nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgICAgIHRoZUJ0bi5jbGFzc05hbWUgPSAnZmxvYXQtYnRuJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvYWRlZChhcmdzKSB7XG4gICAgICAgIGxldCB0bnNWaWV3ID0gPGFueT5hcmdzLm9iamVjdDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lb3V0IGRvbmUnKTtcbiAgICAgICAgICAgIHRuc1ZpZXcuY2xpcFRvQm91bmRzID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodG5zVmlldy5pb3MpXG4gICAgICAgICAgICAgICAgdG5zVmlldy5pb3MuY2xpcHNUb0JvdW5kcyA9IGZhbHNlO1xuICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgIGlmICh0bnNWaWV3LmFuZHJvaWQpIHtcbiAgICAgICAgICAgIGxldCBuYXRpdmVBblZpZXcgPSB0bnNWaWV3LmFuZHJvaWQ7XG4gICAgICAgICAgICB2YXIgc2hhcGUgPSBuZXcgYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlKCk7XG4gICAgICAgICAgICBzaGFwZS5zZXRTaGFwZShhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUuT1ZBTCk7XG4gICAgICAgICAgICBzaGFwZS5zZXRDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLnBhcnNlQ29sb3IoXCIjMzBiY2ZmXCIpKTtcbiAgICAgICAgICAgIG5hdGl2ZUFuVmlldy5zZXRCYWNrZ3JvdW5kRHJhd2FibGUoc2hhcGUpO1xuICAgICAgICAgICAgbmF0aXZlQW5WaWV3LnNldEVsZXZhdGlvbigyMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodG5zVmlldy5pb3MpIHtcbiAgICAgICAgICAgIGxldCBuYXRpdmVWaWV3ID0gdG5zVmlldy5pb3M7XG4gICAgICAgICAgICBuYXRpdmVWaWV3LmxheWVyLnNoYWRvd0NvbG9yID0gdGhpcy5zaGFkb3dDb2xvci5pb3MuQ0dDb2xvcjtcbiAgICAgICAgICAgIG5hdGl2ZVZpZXcubGF5ZXIuc2hhZG93T2Zmc2V0ID0gQ0dTaXplTWFrZSgwLCB0aGlzLnNoYWRvd09mZnNldCk7XG4gICAgICAgICAgICBuYXRpdmVWaWV3LmxheWVyLnNoYWRvd09wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICBuYXRpdmVWaWV3LmxheWVyLnNoYWRvd1JhZGl1cyA9IDUuMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==