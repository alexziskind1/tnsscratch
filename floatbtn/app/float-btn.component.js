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
        template: "\n    <GridLayout class=\"float-btn-wrapper\">\n        <StackLayout (tap)=\"onTap($event)\" (touch)=\"onTouch($event)\" class=\"float-btn\" (loaded)=\"onLoaded($event)\">   \n            <Label class=\"float-btn-text\" [text]=\"text\"></Label>\n        </StackLayout>\n    </GridLayout>\n    ",
        styles: [
            "\n            .float-btn-wrapper {\n                width:75;\n                height:75;\n            }\n\n            .float-btn {\n                background-color:#30bcff;\n                border-radius: 28;\n                width:56;\n                height:56;\n                text-align: center;\n                vertical-align: middle;         \n            }\n\n             .float-btn.down {\n                 animation-name: down;\n                 animation-duration: 0.2s;\n                 animation-fill-mode: forwards;\n             }\n\n            .float-btn-text {\n                color:#fff;\n                font-size: 36;\n                margin-top:-4;\n            }\n\n            @keyframes down {\n                from { background-color: #30bcff; }\n                to { background-color: purple;  }\n            }\n        "
        ]
    })
], FloatBtnComponent);
exports.FloatBtnComponent = FloatBtnComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsb2F0LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF1RTtBQUd2RSwrQkFBOEI7QUFvRDlCLElBQWEsaUJBQWlCO0lBN0M5QjtRQWdEYyxRQUFHLEdBQW1DLElBQUksbUJBQVksRUFBb0IsQ0FBQztJQW9EekYsQ0FBQztJQWpERyxzQkFBYywwQ0FBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFjLDJDQUFZO2FBQTFCO1lBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBRU0saUNBQUssR0FBWixVQUFhLElBQXNCO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsSUFBMkI7UUFDdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLE1BQU07Z0JBQ1AsTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDcEMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLE1BQU0sQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO2dCQUMvQixLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUVNLG9DQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLE9BQU8sR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRS9CLFVBQVUsQ0FBQztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDMUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDN0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdELFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUM3QixVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDNUQsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakUsVUFBVSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQXJEWTtJQUFSLFlBQUssRUFBRTs7K0NBQWM7QUFDWjtJQUFULGFBQU0sRUFBRTs4QkFBTSxtQkFBWTs4Q0FBMEQ7QUFINUUsaUJBQWlCO0lBN0M3QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSx1U0FNVDtRQUNELE1BQU0sRUFBRTtZQUNKLHcxQkErQkM7U0FDSjtLQUNKLENBQUM7R0FDVyxpQkFBaUIsQ0F1RDdCO0FBdkRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndWkvZ2VzdHVyZXMnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcic7XG5cblxuZGVjbGFyZSBjb25zdCBDR1NpemVNYWtlOiBhbnk7XG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcImZsb2F0LWJ0blwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJmbG9hdC1idG4td3JhcHBlclwiPlxuICAgICAgICA8U3RhY2tMYXlvdXQgKHRhcCk9XCJvblRhcCgkZXZlbnQpXCIgKHRvdWNoKT1cIm9uVG91Y2goJGV2ZW50KVwiIGNsYXNzPVwiZmxvYXQtYnRuXCIgKGxvYWRlZCk9XCJvbkxvYWRlZCgkZXZlbnQpXCI+ICAgXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJmbG9hdC1idG4tdGV4dFwiIFt0ZXh0XT1cInRleHRcIj48L0xhYmVsPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvR3JpZExheW91dD5cbiAgICBgLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgXG4gICAgICAgICAgICAuZmxvYXQtYnRuLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOjc1O1xuICAgICAgICAgICAgICAgIGhlaWdodDo3NTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZsb2F0LWJ0biB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMzBiY2ZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI4O1xuICAgICAgICAgICAgICAgIHdpZHRoOjU2O1xuICAgICAgICAgICAgICAgIGhlaWdodDo1NjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIC5mbG9hdC1idG4uZG93biB7XG4gICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBkb3duO1xuICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZsb2F0LWJ0bi10ZXh0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDotNDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGtleWZyYW1lcyBkb3duIHtcbiAgICAgICAgICAgICAgICBmcm9tIHsgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxuICAgICAgICAgICAgICAgIHRvIHsgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlOyAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBGbG9hdEJ0bkNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gICAgQE91dHB1dCgpIHRhcDogRXZlbnRFbWl0dGVyPEdlc3R1cmVFdmVudERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxHZXN0dXJlRXZlbnREYXRhPigpO1xuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNoYWRvd0NvbG9yKCk6IENvbG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcignIzg4ODg4OCcpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgc2hhZG93T2Zmc2V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAyLjA7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpIHtcbiAgICAgICAgdGhpcy50YXAuZW1pdChhcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Ub3VjaChhcmdzOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpIHtcbiAgICAgICAgbGV0IHRoZUJ0biA9IGFyZ3MudmlldztcbiAgICAgICAgc3dpdGNoIChhcmdzLmFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgdGhlQnRuLmNsYXNzTmFtZSA9ICdmbG9hdC1idG4gZG93bic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgICAgICAgdGhlQnRuLmNsYXNzTmFtZSA9ICdmbG9hdC1idG4nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHRuc1ZpZXcgPSA8YW55PmFyZ3Mub2JqZWN0O1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVvdXQgZG9uZScpO1xuICAgICAgICAgICAgdG5zVmlldy5jbGlwVG9Cb3VuZHMgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0bnNWaWV3LmlvcylcbiAgICAgICAgICAgICAgICB0bnNWaWV3Lmlvcy5jbGlwc1RvQm91bmRzID0gZmFsc2U7XG4gICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgaWYgKHRuc1ZpZXcuYW5kcm9pZCkge1xuICAgICAgICAgICAgbGV0IG5hdGl2ZUFuVmlldyA9IHRuc1ZpZXcuYW5kcm9pZDtcbiAgICAgICAgICAgIHZhciBzaGFwZSA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUoKTtcbiAgICAgICAgICAgIHNoYXBlLnNldFNoYXBlKGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS5PVkFMKTtcbiAgICAgICAgICAgIHNoYXBlLnNldENvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IucGFyc2VDb2xvcihcIiMzMGJjZmZcIikpO1xuICAgICAgICAgICAgbmF0aXZlQW5WaWV3LnNldEJhY2tncm91bmREcmF3YWJsZShzaGFwZSk7XG4gICAgICAgICAgICBuYXRpdmVBblZpZXcuc2V0RWxldmF0aW9uKDIwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0bnNWaWV3Lmlvcykge1xuICAgICAgICAgICAgbGV0IG5hdGl2ZVZpZXcgPSB0bnNWaWV3LmlvcztcbiAgICAgICAgICAgIG5hdGl2ZVZpZXcubGF5ZXIuc2hhZG93Q29sb3IgPSB0aGlzLnNoYWRvd0NvbG9yLmlvcy5DR0NvbG9yO1xuICAgICAgICAgICAgbmF0aXZlVmlldy5sYXllci5zaGFkb3dPZmZzZXQgPSBDR1NpemVNYWtlKDAsIHRoaXMuc2hhZG93T2Zmc2V0KTtcbiAgICAgICAgICAgIG5hdGl2ZVZpZXcubGF5ZXIuc2hhZG93T3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgIG5hdGl2ZVZpZXcubGF5ZXIuc2hhZG93UmFkaXVzID0gNS4wO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19