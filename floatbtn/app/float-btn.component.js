"use strict";
var core_1 = require("@angular/core");
var FloatBtnComponent = (function () {
    function FloatBtnComponent() {
        this.tap = new core_1.EventEmitter();
    }
    FloatBtnComponent.prototype.outerTap = function (args) {
        console.log('outerTap');
    };
    FloatBtnComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
    };
    FloatBtnComponent.prototype.onLoaded = function (args) {
        //let obj = args.object;
        //args.object.android.setBackgroundResource(android.R.drawable.dialog_holo_light_frame);
        //args.object.android.setElevation(2);
        //args.object.android.elevation = '2dp';
        console.log('onLoaded');
        console.log('backgorund before: ' + args.object.android.getBackground());
        //args.object.android.setBackgroundColor(android.graphics.Color.parseColor("#000000"));
        //console.dir(android.R.drawable());
        //args.object.android.setBackgroundResource(android.R.drawable.tags_rounded_corners);
        //let drawable = args.object.android.getBackground();
        //drawable.setColor(android.graphics.Color.RED);
        console.log('constant color: ' + android.graphics.Color.RED);
        var shape = new android.graphics.drawable.GradientDrawable();
        shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
        //shape.setCornerRadii([ 40, 40, 40, 40, 40, 40, 40, 40 ]);
        shape.setColor(android.graphics.Color.RED);
        //shape.setStroke(3, android.graphics.Color.RED);
        args.object.android.setBackgroundDrawable(shape);
        //args.object.android.setElevation(10);
        args.object.android.setTranslationZ(10);
        //args.object.android.elevation = 40;
        //args.object.android.getChildAt(0).setElevation(20);
        //args.object.android.getChildAt(0).elevation = 20;
        //args.object.android.clipToPadding = false;
        //console.log('elevation: ' + args.object.android.getChildAt(0).getElevation());
    };
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
                //theBtn.className = 'float-btn';
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
        template: "\n    <StackLayout (tap)=\"onTap($event)\" (touch)=\"onTouch($event)\" (loaded)=\"onLoaded($event)\" class=\"float-btn\" >   \n        <Label class=\"float-btn-text\" [text]=\"text\"></Label>\n    </StackLayout>\n\n\n    <StackLayout class=\"outer\" (tap)=\"outerTap($event)\" >\n        <StackLayout class=\"inner\">\n            <Label class=\"inner-lbl\" text=\"hi\"></Label>\n        </StackLayout>\n    </StackLayout>\n    ",
        styles: [
            "\n            .outer {\n                background-color: green;\n                margin: 5;\n                padding: 5;\n            }\n            .inner {\n                background-color: red;\n                margin: 5;\n                padding: 5;\n            }\n            .float-btn-text {\n                margin: 5;\n                padding: 5;\n            }\n\n\n            .float-btn {\n                background-color:#30bcff;\n                border-color:#30bcff;\n                border-radius: 28;\n                width:56;\n                height:56;\n                text-align: center;\n                vertical-align: middle;\n            }\n\n             .float-btn.down {\n                 animation-name: down;\n                 animation-duration: 0.2s;\n                 animation-fill-mode: forwards;\n             }\n\n            .float-btn-text {\n                color:#fff;\n                font-size: 36;\n                margin-top:-4;\n            }\n\n            @keyframes down {\n                from { background-color: #30bcff; }\n                to { background-color: red;  }\n            }\n        "
        ]
    })
], FloatBtnComponent);
exports.FloatBtnComponent = FloatBtnComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsb2F0LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUErRTtBQXNFL0UsSUFBYSxpQkFBaUI7SUE5RDlCO1FBaUVjLFFBQUcsR0FBbUMsSUFBSSxtQkFBWSxFQUFvQixDQUFDO0lBOER6RixDQUFDO0lBM0RVLG9DQUFRLEdBQWYsVUFBZ0IsSUFBc0I7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0sb0NBQVEsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLG9DQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQix3QkFBd0I7UUFDeEIsd0ZBQXdGO1FBQ3hGLHNDQUFzQztRQUN0Qyx3Q0FBd0M7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFFekUsdUZBQXVGO1FBRS9GLG9DQUFvQztRQUU1QixxRkFBcUY7UUFFckYscURBQXFEO1FBRXJELGdEQUFnRDtRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpELElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM3RCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLDJEQUEyRDtRQUMzRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUc3Qyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLHFDQUFxQztRQUNyQyxxREFBcUQ7UUFDckQsbURBQW1EO1FBQ25ELDRDQUE0QztRQUM1QyxnRkFBZ0Y7SUFDcEYsQ0FBQztJQUVNLGlDQUFLLEdBQVosVUFBYSxJQUFzQjtRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU0sbUNBQU8sR0FBZCxVQUFlLElBQTJCO1FBQ3RDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxNQUFNO2dCQUNQLE1BQU0sQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQztZQUNWLEtBQUssSUFBSTtnQkFDTCxpQ0FBaUM7Z0JBQ2pDLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBakVELElBaUVDO0FBL0RZO0lBQVIsWUFBSyxFQUFFOzsrQ0FBYztBQUNaO0lBQVQsYUFBTSxFQUFFOzhCQUFNLG1CQUFZOzhDQUEwRDtBQUg1RSxpQkFBaUI7SUE5RDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLDhhQVdUO1FBQ0QsTUFBTSxFQUFFO1lBQ0osa29DQTJDQztTQUNKO0tBQ0osQ0FBQztHQUNXLGlCQUFpQixDQWlFN0I7QUFqRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndWkvZ2VzdHVyZXMnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcic7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJmbG9hdC1idG5cIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dCAodGFwKT1cIm9uVGFwKCRldmVudClcIiAodG91Y2gpPVwib25Ub3VjaCgkZXZlbnQpXCIgKGxvYWRlZCk9XCJvbkxvYWRlZCgkZXZlbnQpXCIgY2xhc3M9XCJmbG9hdC1idG5cIiA+ICAgXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cImZsb2F0LWJ0bi10ZXh0XCIgW3RleHRdPVwidGV4dFwiPjwvTGFiZWw+XG4gICAgPC9TdGFja0xheW91dD5cblxuXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwib3V0ZXJcIiAodGFwKT1cIm91dGVyVGFwKCRldmVudClcIiA+XG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlubmVyXCI+XG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJpbm5lci1sYmxcIiB0ZXh0PVwiaGlcIj48L0xhYmVsPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtcbiAgICAgICAgYFxuICAgICAgICAgICAgLm91dGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbm5lciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZsb2F0LWJ0bi10ZXh0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAuZmxvYXQtYnRuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMGJjZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiMzMGJjZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjg7XG4gICAgICAgICAgICAgICAgd2lkdGg6NTY7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjU2O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgLmZsb2F0LWJ0bi5kb3duIHtcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGRvd247XG4gICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZmxvYXQtYnRuLXRleHQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOi00O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGRvd24ge1xuICAgICAgICAgICAgICAgIGZyb20geyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XG4gICAgICAgICAgICAgICAgdG8geyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGBcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEZsb2F0QnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgICBAT3V0cHV0KCkgdGFwOiBFdmVudEVtaXR0ZXI8R2VzdHVyZUV2ZW50RGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPEdlc3R1cmVFdmVudERhdGE+KCk7XG5cblxuICAgIHB1YmxpYyBvdXRlclRhcChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvdXRlclRhcCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25nT25Jbml0Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgLy9sZXQgb2JqID0gYXJncy5vYmplY3Q7XG4gICAgICAgIC8vYXJncy5vYmplY3QuYW5kcm9pZC5zZXRCYWNrZ3JvdW5kUmVzb3VyY2UoYW5kcm9pZC5SLmRyYXdhYmxlLmRpYWxvZ19ob2xvX2xpZ2h0X2ZyYW1lKTtcbiAgICAgICAgLy9hcmdzLm9iamVjdC5hbmRyb2lkLnNldEVsZXZhdGlvbigyKTtcbiAgICAgICAgLy9hcmdzLm9iamVjdC5hbmRyb2lkLmVsZXZhdGlvbiA9ICcyZHAnO1xuICAgICAgICBjb25zb2xlLmxvZygnb25Mb2FkZWQnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2JhY2tnb3J1bmQgYmVmb3JlOiAnICsgYXJncy5vYmplY3QuYW5kcm9pZC5nZXRCYWNrZ3JvdW5kKCkpO1xuXG4gICAgICAgIC8vYXJncy5vYmplY3QuYW5kcm9pZC5zZXRCYWNrZ3JvdW5kQ29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5wYXJzZUNvbG9yKFwiIzAwMDAwMFwiKSk7XG5cbi8vY29uc29sZS5kaXIoYW5kcm9pZC5SLmRyYXdhYmxlKCkpO1xuXG4gICAgICAgIC8vYXJncy5vYmplY3QuYW5kcm9pZC5zZXRCYWNrZ3JvdW5kUmVzb3VyY2UoYW5kcm9pZC5SLmRyYXdhYmxlLnRhZ3Nfcm91bmRlZF9jb3JuZXJzKTtcbiAgICAgIFxuICAgICAgICAvL2xldCBkcmF3YWJsZSA9IGFyZ3Mub2JqZWN0LmFuZHJvaWQuZ2V0QmFja2dyb3VuZCgpO1xuXG4gICAgICAgIC8vZHJhd2FibGUuc2V0Q29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5SRUQpO1xuY29uc29sZS5sb2coJ2NvbnN0YW50IGNvbG9yOiAnICsgYW5kcm9pZC5ncmFwaGljcy5Db2xvci5SRUQpO1xuXG4gICAgdmFyIHNoYXBlID0gbmV3IGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZSgpO1xuICAgIHNoYXBlLnNldFNoYXBlKGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS5PVkFMKTtcbiAgICAvL3NoYXBlLnNldENvcm5lclJhZGlpKFsgNDAsIDQwLCA0MCwgNDAsIDQwLCA0MCwgNDAsIDQwIF0pO1xuICAgIHNoYXBlLnNldENvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuUkVEKTtcbiAgICAvL3NoYXBlLnNldFN0cm9rZSgzLCBhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLlJFRCk7XG4gICAgYXJncy5vYmplY3QuYW5kcm9pZC5zZXRCYWNrZ3JvdW5kRHJhd2FibGUoc2hhcGUpO1xuXG5cbiAgICAgICAgLy9hcmdzLm9iamVjdC5hbmRyb2lkLnNldEVsZXZhdGlvbigxMCk7XG4gICAgICAgIGFyZ3Mub2JqZWN0LmFuZHJvaWQuc2V0VHJhbnNsYXRpb25aKDEwKTtcbiAgICAgICAgLy9hcmdzLm9iamVjdC5hbmRyb2lkLmVsZXZhdGlvbiA9IDQwO1xuICAgICAgICAvL2FyZ3Mub2JqZWN0LmFuZHJvaWQuZ2V0Q2hpbGRBdCgwKS5zZXRFbGV2YXRpb24oMjApO1xuICAgICAgICAvL2FyZ3Mub2JqZWN0LmFuZHJvaWQuZ2V0Q2hpbGRBdCgwKS5lbGV2YXRpb24gPSAyMDtcbiAgICAgICAgLy9hcmdzLm9iamVjdC5hbmRyb2lkLmNsaXBUb1BhZGRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZWxldmF0aW9uOiAnICsgYXJncy5vYmplY3QuYW5kcm9pZC5nZXRDaGlsZEF0KDApLmdldEVsZXZhdGlvbigpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnRhcC5lbWl0KGFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRvdWNoKGFyZ3M6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgdGhlQnRuID0gYXJncy52aWV3O1xuICAgICAgICBzd2l0Y2ggKGFyZ3MuYWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICB0aGVCdG4uY2xhc3NOYW1lID0gJ2Zsb2F0LWJ0biBkb3duJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgICAgICAvL3RoZUJ0bi5jbGFzc05hbWUgPSAnZmxvYXQtYnRuJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==