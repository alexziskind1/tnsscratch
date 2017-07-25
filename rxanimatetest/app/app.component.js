"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs");
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/do");
var eases = require("eases");
//import 'd3-ease';
//var d3Ease = require("d3-ease");
var msElapsed = function (scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.Scheduler.animationFrame; }
    return rxjs_1.Observable.defer(function () {
        var start = scheduler.now();
        return rxjs_1.Observable.interval(0, scheduler)
            .map(function () { return scheduler.now() - start; });
    });
};
var pixelsPerSecond = function (v) { return function (ms) { return v * ms / 1000; }; };
var duration = function (ms, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.Scheduler.animationFrame; }
    return msElapsed(scheduler)
        .map(function (elapsedMs) { return elapsedMs / ms; })
        .takeWhile(function (t) { return t <= 1; });
};
var distance = function (d) { return function (t) { return t * d; }; };
var elasticOut = function (t) {
    return Math.sin(-13.0 * (t + 1.0) *
        Math.PI / 2) *
        Math.pow(2.0, -10.0 * t) +
        1.0;
};
var moveDown = function (view) { return function (duration$) {
    return duration$
        .map(eases.bounceOut)
        .map(distance(200))
        .do(function (frame) {
        view.style.height = frame;
    });
}; };
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var myLbl = this.lblRef.nativeElement;
        var myLbl2 = this.lbl2Ref.nativeElement;
        var myLbl3 = this.lbl3Ref.nativeElement;
        //Velocity animation - infinite time
        /*
        msElapsed()
            .map(pixelsPerSecond(50))
            .subscribe(frame => {
                //myLbl.style.transform = `translate(0,${frame}px)`;
                //myLbl.style.transform = `rotate(${frame}px)`;
                myLbl.style.height = frame;
            });
            */
        //duration animation
        /*
        duration(2000)
            .map(elasticOut)
            .map(distance(100))
            .subscribe(frame => {
                myLbl.style.height = frame;
            });
            */
        rxjs_1.Observable.from([myLbl, myLbl2, myLbl3])
            .concatMap(function (view, i) {
            return duration((i + 1) * 500)
                .let(moveDown(view));
        })
            .subscribe();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('lbl'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "lblRef", void 0);
__decorate([
    core_1.ViewChild('lbl2'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "lbl2Ref", void 0);
__decorate([
    core_1.ViewChild('lbl3'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "lbl3Ref", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUU7QUFDakUsZ0JBQWM7QUFDZCw2QkFBNkM7QUFFN0MsZ0NBQThCO0FBQzlCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixtQkFBbUI7QUFDbkIsa0NBQWtDO0FBR2xDLElBQU0sU0FBUyxHQUFHLFVBQUMsU0FBb0M7SUFBcEMsMEJBQUEsRUFBQSxZQUFZLGdCQUFTLENBQUMsY0FBYztJQUNuRCxPQUFBLGlCQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2IsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDO2FBQ25DLEdBQUcsQ0FBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQztBQUpGLENBSUUsQ0FBQztBQUVQLElBQU0sZUFBZSxHQUFHLFVBQUMsQ0FBQyxJQUFLLE9BQUEsVUFBQyxFQUFFLElBQUssT0FBQSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBYixDQUFhLEVBQXJCLENBQXFCLENBQUM7QUFDckQsSUFBTSxRQUFRLEdBQUcsVUFBQyxFQUFFLEVBQUUsU0FBb0M7SUFBcEMsMEJBQUEsRUFBQSxZQUFZLGdCQUFTLENBQUMsY0FBYztJQUN0RCxPQUFBLFNBQVMsQ0FBQyxTQUFTLENBQUM7U0FDZixHQUFHLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLEdBQUcsRUFBRSxFQUFkLENBQWMsQ0FBQztTQUNoQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksQ0FBQyxFQUFOLENBQU0sQ0FBQztBQUYzQixDQUUyQixDQUFDO0FBQ2hDLElBQU0sUUFBUSxHQUFHLFVBQUMsQ0FBQyxJQUFLLE9BQUEsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssRUFBWixDQUFZLENBQUM7QUFFckMsSUFBTSxVQUFVLEdBQUcsVUFBQyxDQUFDO0lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUN4QixHQUFHLENBQUE7QUFDWCxDQUFDLENBQUM7QUFDRixJQUFNLFFBQVEsR0FBRyxVQUFDLElBQUksSUFBSyxPQUFBLFVBQUMsU0FBUztJQUNqQyxPQUFBLFNBQVM7U0FDSixHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCLEVBQUUsQ0FBQyxVQUFBLEtBQUs7UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0FBTE4sQ0FLTSxFQU5pQixDQU1qQixDQUFDO0FBUVgsSUFBYSxZQUFZO0lBTXJCO0lBRUEsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFNLEtBQUssR0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMvQyxJQUFNLE1BQU0sR0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUNqRCxJQUFNLE1BQU0sR0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUVqRCxvQ0FBb0M7UUFDcEM7Ozs7Ozs7O2NBUU07UUFFTixvQkFBb0I7UUFDcEI7Ozs7Ozs7Y0FPTTtRQUVOLGlCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNuQyxTQUFTLENBQUMsVUFBQyxJQUFJLEVBQUUsQ0FBQztZQUNmLE9BQUEsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztpQkFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUR4QixDQUN3QixDQUFDO2FBQzVCLFNBQVMsRUFBRSxDQUFDO0lBRXJCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUF6Q3FCO0lBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDOzhCQUFTLGlCQUFVOzRDQUFDO0FBQ2xCO0lBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDOzhCQUFVLGlCQUFVOzZDQUFDO0FBQ3BCO0lBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDOzhCQUFVLGlCQUFVOzZDQUFDO0FBSjlCLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7S0FDcEMsQ0FBQzs7R0FFVyxZQUFZLENBMkN4QjtBQTNDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAncnhqcyc7XG5pbXBvcnQgeyBTY2hlZHVsZXIsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd1aS9sYWJlbCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbnZhciBlYXNlcyA9IHJlcXVpcmUoXCJlYXNlc1wiKTtcbi8vaW1wb3J0ICdkMy1lYXNlJztcbi8vdmFyIGQzRWFzZSA9IHJlcXVpcmUoXCJkMy1lYXNlXCIpO1xuXG5cbmNvbnN0IG1zRWxhcHNlZCA9IChzY2hlZHVsZXIgPSBTY2hlZHVsZXIuYW5pbWF0aW9uRnJhbWUpID0+XG4gICAgT2JzZXJ2YWJsZS5kZWZlcigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gc2NoZWR1bGVyLm5vdygpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5pbnRlcnZhbCgwLCBzY2hlZHVsZXIpXG4gICAgICAgICAgICAubWFwKCgpID0+IHNjaGVkdWxlci5ub3coKSAtIHN0YXJ0KTtcbiAgICB9KTtcblxuY29uc3QgcGl4ZWxzUGVyU2Vjb25kID0gKHYpID0+IChtcykgPT4gdiAqIG1zIC8gMTAwMDtcbmNvbnN0IGR1cmF0aW9uID0gKG1zLCBzY2hlZHVsZXIgPSBTY2hlZHVsZXIuYW5pbWF0aW9uRnJhbWUpID0+XG4gICAgbXNFbGFwc2VkKHNjaGVkdWxlcilcbiAgICAgICAgLm1hcChlbGFwc2VkTXMgPT4gZWxhcHNlZE1zIC8gbXMpXG4gICAgICAgIC50YWtlV2hpbGUodCA9PiB0IDw9IDEpO1xuY29uc3QgZGlzdGFuY2UgPSAoZCkgPT4gKHQpID0+IHQgKiBkO1xuXG5jb25zdCBlbGFzdGljT3V0ID0gKHQpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zaW4oLTEzLjAgKiAodCArIDEuMCkgKlxuICAgICAgICBNYXRoLlBJIC8gMikgKlxuICAgICAgICBNYXRoLnBvdygyLjAsIC0xMC4wICogdCkgK1xuICAgICAgICAxLjBcbn07XG5jb25zdCBtb3ZlRG93biA9ICh2aWV3KSA9PiAoZHVyYXRpb24kKSA9PlxuICAgIGR1cmF0aW9uJFxuICAgICAgICAubWFwKGVhc2VzLmJvdW5jZU91dClcbiAgICAgICAgLm1hcChkaXN0YW5jZSgyMDApKVxuICAgICAgICAuZG8oZnJhbWUgPT4ge1xuICAgICAgICAgICAgdmlldy5zdHlsZS5oZWlnaHQgPSBmcmFtZTtcbiAgICAgICAgfSk7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2xibCcpIGxibFJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdsYmwyJykgbGJsMlJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdsYmwzJykgbGJsM1JlZjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IG15TGJsID0gPExhYmVsPnRoaXMubGJsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG15TGJsMiA9IDxMYWJlbD50aGlzLmxibDJSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgbXlMYmwzID0gPExhYmVsPnRoaXMubGJsM1JlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIC8vVmVsb2NpdHkgYW5pbWF0aW9uIC0gaW5maW5pdGUgdGltZVxuICAgICAgICAvKlxuICAgICAgICBtc0VsYXBzZWQoKVxuICAgICAgICAgICAgLm1hcChwaXhlbHNQZXJTZWNvbmQoNTApKVxuICAgICAgICAgICAgLnN1YnNjcmliZShmcmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgLy9teUxibC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDAsJHtmcmFtZX1weClgO1xuICAgICAgICAgICAgICAgIC8vbXlMYmwuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2ZyYW1lfXB4KWA7XG4gICAgICAgICAgICAgICAgbXlMYmwuc3R5bGUuaGVpZ2h0ID0gZnJhbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgLy9kdXJhdGlvbiBhbmltYXRpb25cbiAgICAgICAgLypcbiAgICAgICAgZHVyYXRpb24oMjAwMClcbiAgICAgICAgICAgIC5tYXAoZWxhc3RpY091dClcbiAgICAgICAgICAgIC5tYXAoZGlzdGFuY2UoMTAwKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnJhbWUgPT4ge1xuICAgICAgICAgICAgICAgIG15TGJsLnN0eWxlLmhlaWdodCA9IGZyYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAqL1xuXG4gICAgICAgIE9ic2VydmFibGUuZnJvbShbbXlMYmwsIG15TGJsMiwgbXlMYmwzXSlcbiAgICAgICAgICAgIC5jb25jYXRNYXAoKHZpZXcsIGkpID0+XG4gICAgICAgICAgICAgICAgZHVyYXRpb24oKGkgKyAxKSAqIDUwMClcbiAgICAgICAgICAgICAgICAgICAgLmxldChtb3ZlRG93bih2aWV3KSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCk7XG5cbiAgICB9XG59XG4iXX0=