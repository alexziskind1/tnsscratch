"use strict";
var core_1 = require("@angular/core");
var FloatBtnComponent = (function () {
    function FloatBtnComponent() {
        this.tap = new core_1.EventEmitter();
    }
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
        template: "\n    <StackLayout (tap)=\"onTap($event)\" (touch)=\"onTouch($event)\"  class=\"float-btn\" >   \n        <Label class=\"float-btn-text\" [text]=\"text\"></Label>\n    </StackLayout>\n    ",
        styles: [
            "\n            .float-btn {\n                background-color:#30bcff;\n                border-radius: 28;\n                width:56;\n                height:56;\n                text-align: center;\n                vertical-align: middle;\n            }\n\n             .float-btn.down {\n                 animation-name: down;\n                 animation-duration: 0.2s;\n                 animation-fill-mode: forwards;\n             }\n\n            .float-btn-text {\n                color:#fff;\n                font-size: 36;\n                margin-top:-4;\n            }\n\n            @keyframes down {\n                from { background-color: #30bcff; }\n                to { background-color: purple;  }\n            }\n        "
        ]
    })
], FloatBtnComponent);
exports.FloatBtnComponent = FloatBtnComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsb2F0LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF1RTtBQTJDdkUsSUFBYSxpQkFBaUI7SUF0QzlCO1FBeUNjLFFBQUcsR0FBbUMsSUFBSSxtQkFBWSxFQUFvQixDQUFDO0lBaUJ6RixDQUFDO0lBZlUsaUNBQUssR0FBWixVQUFhLElBQXNCO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsSUFBMkI7UUFDdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLE1BQU07Z0JBQ1AsTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDcEMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLE1BQU0sQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO2dCQUMvQixLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQWxCWTtJQUFSLFlBQUssRUFBRTs7K0NBQWM7QUFDWjtJQUFULGFBQU0sRUFBRTs4QkFBTSxtQkFBWTs4Q0FBMEQ7QUFINUUsaUJBQWlCO0lBdEM3QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSw4TEFJVDtRQUNELE1BQU0sRUFBRTtZQUNKLHF1QkEwQkM7U0FDSjtLQUNKLENBQUM7R0FDVyxpQkFBaUIsQ0FvQjdCO0FBcEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndWkvZ2VzdHVyZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwiZmxvYXQtYnRuXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8U3RhY2tMYXlvdXQgKHRhcCk9XCJvblRhcCgkZXZlbnQpXCIgKHRvdWNoKT1cIm9uVG91Y2goJGV2ZW50KVwiICBjbGFzcz1cImZsb2F0LWJ0blwiID4gICBcbiAgICAgICAgPExhYmVsIGNsYXNzPVwiZmxvYXQtYnRuLXRleHRcIiBbdGV4dF09XCJ0ZXh0XCI+PC9MYWJlbD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbXG4gICAgICAgIGBcbiAgICAgICAgICAgIC5mbG9hdC1idG4ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzMwYmNmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyODtcbiAgICAgICAgICAgICAgICB3aWR0aDo1NjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NTY7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAuZmxvYXQtYnRuLmRvd24ge1xuICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZG93bjtcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mbG9hdC1idG4tdGV4dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZG93biB7XG4gICAgICAgICAgICAgICAgZnJvbSB7IGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cbiAgICAgICAgICAgICAgICB0byB7IGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTsgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRmxvYXRCdG5Db21wb25lbnQge1xuXG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAgIEBPdXRwdXQoKSB0YXA6IEV2ZW50RW1pdHRlcjxHZXN0dXJlRXZlbnREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8R2VzdHVyZUV2ZW50RGF0YT4oKTtcblxuICAgIHB1YmxpYyBvblRhcChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMudGFwLmVtaXQoYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVG91Y2goYXJnczogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCB0aGVCdG4gPSBhcmdzLnZpZXc7XG4gICAgICAgIHN3aXRjaCAoYXJncy5hY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgIHRoZUJ0bi5jbGFzc05hbWUgPSAnZmxvYXQtYnRuIGRvd24nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgICAgIHRoZUJ0bi5jbGFzc05hbWUgPSAnZmxvYXQtYnRuJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==