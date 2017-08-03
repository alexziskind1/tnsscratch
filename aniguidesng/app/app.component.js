"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs");
var rxjs_1 = require("rxjs");
var page_1 = require("tns-core-modules/ui/page");
var platform_1 = require("platform");
var frame_1 = require("ui/frame");
var d3e = require("d3-ease");
var timeElapsed = rxjs_1.Observable.defer(function () {
    var start = rxjs_1.Scheduler.animationFrame.now();
    return rxjs_1.Observable.interval(1)
        .map(function () { return Math.floor((Date.now() - start)); });
});
var duration = function (totalMs) {
    return timeElapsed
        .map(function (elapsedMs) { return elapsedMs / totalMs; })
        .takeWhile(function (t) { return t <= 1; });
};
var amountFromTo = function (range) {
    return function (t) {
        var ret = range.from + t * (range.to - range.from);
        return ret;
    };
};
var AppComponent = (function () {
    function AppComponent(page) {
        this.page = page;
        this.items = [];
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.actionBarHidden = true;
        if (platform_1.isIOS) {
            frame_1.topmost().ios.controller.navigationBar.barStyle = 1;
        }
        this.coverHeight$ = rxjs_1.Observable.of(this.screenHeight);
    }
    Object.defineProperty(AppComponent.prototype, "screenHeight", {
        get: function () {
            return platform_1.screen.mainScreen.heightDIPs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "rangeOneWayPixels", {
        get: function () {
            return { from: this.screenHeight, to: 50 };
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        var _this = this;
        this.coverHeight$ = duration(700)
            .map(d3e.easeExpOut)
            .map(amountFromTo(this.rangeOneWayPixels));
        rxjs_1.Observable.interval(200)
            .take(ITEMS.length)
            .map(function (t) { return _this.items.push(ITEMS[t]); })
            .subscribe();
    };
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        template: "\n        <StackLayout>\n            \n            <GridLayout class=\"loading-cover\" (tap)=\"onTap($event)\" [height]=\"coverHeight$ | async\">\n                <Label class=\"thelabel\" text=\"Hello\"></Label>\n            </GridLayout>\n            <ScrollView>\n                <StackLayout>\n                    <StackLayout class=\"item-wrapper\" *ngFor=\"let item of items\">\n                        <!--Label [text]=\"item.title\"></Label-->\n                        <Image [src]=\"item.picSource\"></Image>\n                    </StackLayout>\n                </StackLayout>\n            </ScrollView>\n        </StackLayout>\n    ",
        styles: [
            "\n            .loading-cover {\n                background-color: red;\n                height: 100%;\n                width: 100%;\n                text-align: center;\n            }\n            .thelabel {\n                font-size: 28;\n                font-weight: bold;\n                color: white;\n            }\n            ScrollView {\n                height: 100%;\n            }\n            .item-wrapper {\n                border-color: #efefef;\n                border-width: 1;\n\n                animation-name: itemin;\n                animation-duration: 300ms;\n                animation-fill-mode: forwards;\n            }\n\n            @keyframes itemin {\n                from { opacity: 0; transform: translateY(250px); }\n                to { opacity: 1; transform: translateY(0px); }\n            }\n        "
        ]
    }),
    __metadata("design:paramtypes", [page_1.Page])
], AppComponent);
exports.AppComponent = AppComponent;
var ITEMS = [];
var fillMoreItems = function (numItems) {
    for (var i = 0; i < numItems; i++) {
        ITEMS.push({ title: "dynitem " + i, picSource: "~/images/post" + i + ".png" });
    }
};
fillMoreItems(20);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0JBQWM7QUFDZCw2QkFBNkM7QUFDN0MsaURBQWdEO0FBQ2hELHFDQUF5QztBQUN6QyxrQ0FBbUM7QUFFbkMsNkJBQStCO0FBRS9CLElBQU0sV0FBVyxHQUFHLGlCQUFVLENBQUMsS0FBSyxDQUFDO0lBQ2pDLElBQU0sS0FBSyxHQUFHLGdCQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDeEIsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sUUFBUSxHQUFHLFVBQUMsT0FBTztJQUNyQixPQUFBLFdBQVc7U0FDTixHQUFHLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLEdBQUcsT0FBTyxFQUFuQixDQUFtQixDQUFDO1NBQ3JDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEVBQU4sQ0FBTSxDQUFDO0FBRjNCLENBRTJCLENBQUM7QUFFaEMsSUFBTSxZQUFZLEdBQUcsVUFBVSxLQUFLO0lBQ2hDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDZCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFzREYsSUFBYSxZQUFZO0lBY3JCLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVp2QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBYXRCLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxnQkFBSyxDQUFDLENBQUMsQ0FBQztZQUNSLGVBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFkRCxzQkFBWSxzQ0FBWTthQUF4QjtZQUNJLE1BQU0sQ0FBQyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBWSwyQ0FBaUI7YUFBN0I7WUFDSSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFXRCw0QkFBSyxHQUFMO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7YUFDbkIsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBRS9DLGlCQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzthQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNsQixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQzthQUNuQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsK0JBQVEsR0FBUixjQUFhLENBQUM7SUFDbEIsbUJBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBbkNZLFlBQVk7SUFuRHhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsb29CQWVUO1FBQ0QsTUFBTSxFQUFFO1lBQ0oseTBCQTRCQztTQUNKO0tBQ0osQ0FBQztxQ0FnQjRCLFdBQUk7R0FkckIsWUFBWSxDQW1DeEI7QUFuQ1ksb0NBQVk7QUEyQ3pCLElBQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQztBQUV6QixJQUFNLGFBQWEsR0FBRyxVQUFDLFFBQWdCO0lBQ25DLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxhQUFXLENBQUcsRUFBRSxTQUFTLEVBQUUsa0JBQWdCLENBQUMsU0FBTSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFwicnhqc1wiO1xuaW1wb3J0IHsgU2NoZWR1bGVyLCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBpc0lPUywgc2NyZWVuIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gJ3VpL2ZyYW1lJztcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0ICogYXMgZDNlIGZyb20gJ2QzLWVhc2UnO1xuXG5jb25zdCB0aW1lRWxhcHNlZCA9IE9ic2VydmFibGUuZGVmZXIoKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gU2NoZWR1bGVyLmFuaW1hdGlvbkZyYW1lLm5vdygpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmludGVydmFsKDEpXG4gICAgICAgIC5tYXAoKCkgPT4gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIHN0YXJ0KSkpO1xufSk7XG5cbmNvbnN0IGR1cmF0aW9uID0gKHRvdGFsTXMpID0+XG4gICAgdGltZUVsYXBzZWRcbiAgICAgICAgLm1hcChlbGFwc2VkTXMgPT4gZWxhcHNlZE1zIC8gdG90YWxNcylcbiAgICAgICAgLnRha2VXaGlsZSh0ID0+IHQgPD0gMSk7XG5cbmNvbnN0IGFtb3VudEZyb21UbyA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICBjb25zdCByZXQgPSByYW5nZS5mcm9tICsgdCAqIChyYW5nZS50byAtIHJhbmdlLmZyb20pO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59O1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJsb2FkaW5nLWNvdmVyXCIgKHRhcCk9XCJvblRhcCgkZXZlbnQpXCIgW2hlaWdodF09XCJjb3ZlckhlaWdodCQgfCBhc3luY1wiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInRoZWxhYmVsXCIgdGV4dD1cIkhlbGxvXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDxTY3JvbGxWaWV3PlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaXRlbS13cmFwcGVyXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1MYWJlbCBbdGV4dF09XCJpdGVtLnRpdGxlXCI+PC9MYWJlbC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFtzcmNdPVwiaXRlbS5waWNTb3VyY2VcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtcbiAgICAgICAgYFxuICAgICAgICAgICAgLmxvYWRpbmctY292ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRoZWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFNjcm9sbFZpZXcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pdGVtLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDE7XG5cbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogaXRlbWluO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgaXRlbWluIHtcbiAgICAgICAgICAgICAgICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1MHB4KTsgfVxuICAgICAgICAgICAgICAgIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGl0ZW1zOiBJdGVtW10gPSBbXTtcbiAgICBwdWJsaWMgaXRlbXMkOiBPYnNlcnZhYmxlPEl0ZW1bXT47XG5cbiAgICBwdWJsaWMgY292ZXJIZWlnaHQkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgICBwcml2YXRlIGdldCBzY3JlZW5IZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzO1xuICAgIH1cbiAgICBwcml2YXRlIGdldCByYW5nZU9uZVdheVBpeGVscygpIHtcbiAgICAgICAgcmV0dXJuIHsgZnJvbTogdGhpcy5zY3JlZW5IZWlnaHQsIHRvOiA1MCB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhciA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgIHRvcG1vc3QoKS5pb3MuY29udHJvbGxlci5uYXZpZ2F0aW9uQmFyLmJhclN0eWxlID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvdmVySGVpZ2h0JCA9IE9ic2VydmFibGUub2YodGhpcy5zY3JlZW5IZWlnaHQpO1xuICAgIH1cblxuICAgIG9uVGFwKCkge1xuICAgICAgICB0aGlzLmNvdmVySGVpZ2h0JCA9IGR1cmF0aW9uKDcwMClcbiAgICAgICAgICAgIC5tYXAoZDNlLmVhc2VFeHBPdXQpXG4gICAgICAgICAgICAubWFwKGFtb3VudEZyb21Ubyh0aGlzLnJhbmdlT25lV2F5UGl4ZWxzKSk7XG5cbiAgICAgICAgT2JzZXJ2YWJsZS5pbnRlcnZhbCgyMDApXG4gICAgICAgICAgICAudGFrZShJVEVNUy5sZW5ndGgpXG4gICAgICAgICAgICAubWFwKHQgPT4gdGhpcy5pdGVtcy5wdXNoKElURU1TW3RdKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxufVxuXG5cbmludGVyZmFjZSBJdGVtIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHBpY1NvdXJjZTogc3RyaW5nO1xufVxuXG5jb25zdCBJVEVNUzogSXRlbVtdID0gW107XG5cbmNvbnN0IGZpbGxNb3JlSXRlbXMgPSAobnVtSXRlbXM6IG51bWJlcikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtSXRlbXM7IGkrKykge1xuICAgICAgICBJVEVNUy5wdXNoKHsgdGl0bGU6IGBkeW5pdGVtICR7aX1gLCBwaWNTb3VyY2U6IGB+L2ltYWdlcy9wb3N0JHtpfS5wbmdgIH0pO1xuICAgIH1cbn07XG5cbmZpbGxNb3JlSXRlbXMoMjApO1xuIl19