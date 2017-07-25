"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs");
var rxjs_1 = require("rxjs");
var color_1 = require("tns-core-modules/color");
//import 'd3-ease';
//import { easeCubic, easeElasticOut } from "d3-ease";
var elasticOut = require('eases/elastic-out');
var msElapsed = function (scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.Scheduler.animationFrame; }
    return Observable_1.Observable.defer(function () {
        var start = scheduler.now();
        return Observable_1.Observable.interval(0, scheduler)
            .map(function () { return scheduler.now() - start; });
    });
};
var duration = function (ms, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.Scheduler.animationFrame; }
    return msElapsed(scheduler)
        .map(function (elapsedMs) { return elapsedMs / ms; })
        .takeWhile(function (t) { return t <= 1; });
};
var distance = function (d) { return function (t) { return t * d; }; };
var prevAndCurrent = function (initialValue) { return function (source$) {
    return source$.startWith(initialValue)
        .bufferCount(2, 1);
}; };
var tween = function (ms, easing) { return function (source$) {
    return source$
        .let(prevAndCurrent(0))
        .switchMap(function (_a) {
        var p = _a[0], n = _a[1];
        return duration(ms)
            .map(easing)
            .map(distance(n - p))
            .map(function (v) { return n + v; });
    });
}; };
var ClockComponent = (function () {
    function ClockComponent() {
        this.counter = 100;
    }
    ClockComponent.prototype.onTap = function (args) {
        var hand = this.clocklblRef.nativeElement;
        this.fromTopObserver.next(this.counter);
        this.counter = this.counter === 700 ? 100 : this.counter + 100;
    };
    ClockComponent.prototype.onStackLoaded = function (args) {
        var tnsView = args.object;
        var a = 0;
        if (tnsView.android) {
            var nativeAnView = tnsView.android;
            //var shape = new android.graphics.drawable.GradientDrawable();
            //shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
            //shape.setColor(android.graphics.Color.parseColor('#30bcff'));
            //nativeAnView.setBackgroundDrawable(shape);
            //nativeAnView.setElevation(20);
        }
        else if (tnsView.ios) {
            var nativeView = tnsView.ios;
            nativeView.layer.shadowColor = new color_1.Color('#888888').ios.CGColor;
            nativeView.layer.shadowOffset = CGSizeMake(0, 2.0);
            nativeView.layer.shadowOpacity = 0.5;
            nativeView.layer.shadowRadius = 5.0;
        }
    };
    ClockComponent.prototype.ngOnInit = function () {
        var _this = this;
        var hand = this.clocklblRef.nativeElement;
        this.dist$ = Observable_1.Observable.interval(1000)
            .map(function (t) { return t * 360 / 60; });
        //.let(tween(900, elasticOut));
        this.rotateTransform$ = this.dist$
            .let(tween(900, elasticOut))
            .map(function (d) { return "rotate(" + d + ")"; });
        this.fromTop$ = Observable_1.Observable.create(function (observer) {
            _this.fromTopObserver = observer;
            observer.next(_this.counter);
        }, function (error) { return console.error(error); }, function () { console.log('done'); }).let(tween(900, elasticOut));
        //.subscribe(dist =>
        //    hand.style.transform = `rotate(${dist})`
        //);
    };
    return ClockComponent;
}());
__decorate([
    core_1.ViewChild('clocklbl'),
    __metadata("design:type", core_1.ElementRef)
], ClockComponent.prototype, "clocklblRef", void 0);
ClockComponent = __decorate([
    core_1.Component({
        selector: 'clock-component',
        templateUrl: 'clock.component.html',
        styleUrls: ['clock.component.css']
    }),
    __metadata("design:paramtypes", [])
], ClockComponent);
exports.ClockComponent = ClockComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xvY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDhDQUE2QztBQUM3QyxnQkFBYztBQUNkLDZCQUFvRDtBQUNwRCxnREFBK0M7QUFHL0MsbUJBQW1CO0FBQ25CLHNEQUFzRDtBQUN0RCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUs5QyxJQUFNLFNBQVMsR0FBRyxVQUFDLFNBQW9DO0lBQXBDLDBCQUFBLEVBQUEsWUFBWSxnQkFBUyxDQUFDLGNBQWM7SUFDbkQsT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQztRQUNiLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQzthQUNuQyxHQUFHLENBQUMsY0FBTSxPQUFBLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUM7QUFKRixDQUlFLENBQUM7QUFFUCxJQUFNLFFBQVEsR0FBRyxVQUFDLEVBQUUsRUFBRSxTQUFvQztJQUFwQywwQkFBQSxFQUFBLFlBQVksZ0JBQVMsQ0FBQyxjQUFjO0lBQ3RELE9BQUEsU0FBUyxDQUFDLFNBQVMsQ0FBQztTQUNmLEdBQUcsQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsR0FBRyxFQUFFLEVBQWQsQ0FBYyxDQUFDO1NBQ2hDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEVBQU4sQ0FBTSxDQUFDO0FBRjNCLENBRTJCLENBQUM7QUFDaEMsSUFBTSxRQUFRLEdBQUcsVUFBQyxDQUFDLElBQUssT0FBQSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxFQUFaLENBQVksQ0FBQztBQUVyQyxJQUFNLGNBQWMsR0FBRyxVQUFDLFlBQVksSUFBSyxPQUFBLFVBQUMsT0FBTztJQUM3QyxPQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1NBQzFCLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRHRCLENBQ3NCLEVBRmUsQ0FFZixDQUFDO0FBRTNCLElBQU0sS0FBSyxHQUFHLFVBQUMsRUFBRSxFQUFFLE1BQU0sSUFBSyxPQUFBLFVBQUMsT0FBTztJQUNsQyxPQUFBLE9BQU87U0FDRixHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCLFNBQVMsQ0FBQyxVQUFDLEVBQU07WUFBTCxTQUFDLEVBQUUsU0FBQztRQUNiLE9BQUEsUUFBUSxDQUFDLEVBQUUsQ0FBQzthQUNQLEdBQUcsQ0FBQyxNQUFNLENBQUM7YUFDWCxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNwQixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssQ0FBQztJQUhwQixDQUdvQixDQUN2QjtBQVBMLENBT0ssRUFScUIsQ0FRckIsQ0FBQztBQVFWLElBQWEsY0FBYztJQUN2QjtRQVVRLFlBQU8sR0FBRyxHQUFHLENBQUM7SUFWTixDQUFDO0lBWVYsOEJBQUssR0FBWixVQUFhLElBQUk7UUFDYixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUU1QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDbkUsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXFCLElBQUk7UUFDckIsSUFBSSxPQUFPLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ25DLCtEQUErRDtZQUMvRCxrRUFBa0U7WUFDbEUsK0RBQStEO1lBQy9ELDRDQUE0QztZQUM1QyxnQ0FBZ0M7UUFDcEMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzdCLFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDaEUsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRCxVQUFVLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7WUFDckMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3hDLENBQUM7SUFFTCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQXdCQztRQXZCRyxJQUFNLElBQUksR0FBVSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUVuRCxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzthQUNqQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBWixDQUFZLENBQUMsQ0FBQztRQUM1QiwrQkFBK0I7UUFFL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLO2FBQzdCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQzNCLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFlBQVUsQ0FBQyxNQUFHLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFHOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBVSxDQUFDLE1BQU0sQ0FDN0IsVUFBQSxRQUFRO1lBQ0osS0FBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7WUFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsRUFDN0IsY0FBUSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUNoQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFOUIsb0JBQW9CO1FBQ3BCLDhDQUE4QztRQUM5QyxJQUFJO0lBQ1IsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWxFRCxJQWtFQztBQXpEMEI7SUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQWMsaUJBQVU7bURBQUM7QUFUdEMsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ3JDLENBQUM7O0dBRVcsY0FBYyxDQWtFMUI7QUFsRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0ICdyeGpzJztcbmltcG9ydCB7IFNjaGVkdWxlciwgU3ViamVjdCwgT2JzZXJ2ZXIgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbC9sYWJlbFwiO1xuXG4vL2ltcG9ydCAnZDMtZWFzZSc7XG4vL2ltcG9ydCB7IGVhc2VDdWJpYywgZWFzZUVsYXN0aWNPdXQgfSBmcm9tIFwiZDMtZWFzZVwiO1xudmFyIGVsYXN0aWNPdXQgPSByZXF1aXJlKCdlYXNlcy9lbGFzdGljLW91dCcpO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkO1xuZGVjbGFyZSB2YXIgQ0dTaXplTWFrZTtcblxuY29uc3QgbXNFbGFwc2VkID0gKHNjaGVkdWxlciA9IFNjaGVkdWxlci5hbmltYXRpb25GcmFtZSkgPT5cbiAgICBPYnNlcnZhYmxlLmRlZmVyKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBzY2hlZHVsZXIubm93KCk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmludGVydmFsKDAsIHNjaGVkdWxlcilcbiAgICAgICAgICAgIC5tYXAoKCkgPT4gc2NoZWR1bGVyLm5vdygpIC0gc3RhcnQpO1xuICAgIH0pO1xuXG5jb25zdCBkdXJhdGlvbiA9IChtcywgc2NoZWR1bGVyID0gU2NoZWR1bGVyLmFuaW1hdGlvbkZyYW1lKSA9PlxuICAgIG1zRWxhcHNlZChzY2hlZHVsZXIpXG4gICAgICAgIC5tYXAoZWxhcHNlZE1zID0+IGVsYXBzZWRNcyAvIG1zKVxuICAgICAgICAudGFrZVdoaWxlKHQgPT4gdCA8PSAxKTtcbmNvbnN0IGRpc3RhbmNlID0gKGQpID0+ICh0KSA9PiB0ICogZDtcblxuY29uc3QgcHJldkFuZEN1cnJlbnQgPSAoaW5pdGlhbFZhbHVlKSA9PiAoc291cmNlJCkgPT5cbiAgICBzb3VyY2UkLnN0YXJ0V2l0aChpbml0aWFsVmFsdWUpXG4gICAgICAgIC5idWZmZXJDb3VudCgyLCAxKTtcblxuY29uc3QgdHdlZW4gPSAobXMsIGVhc2luZykgPT4gKHNvdXJjZSQpID0+XG4gICAgc291cmNlJFxuICAgICAgICAubGV0KHByZXZBbmRDdXJyZW50KDApKVxuICAgICAgICAuc3dpdGNoTWFwKChbcCwgbl0pID0+XG4gICAgICAgICAgICBkdXJhdGlvbihtcylcbiAgICAgICAgICAgICAgICAubWFwKGVhc2luZylcbiAgICAgICAgICAgICAgICAubWFwKGRpc3RhbmNlKG4gLSBwKSlcbiAgICAgICAgICAgICAgICAubWFwKHYgPT4gbiArIHYpXG4gICAgICAgICk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2xvY2stY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Nsb2NrLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnY2xvY2suY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQ2xvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwdWJsaWMgZGlzdCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICAgIHB1YmxpYyByb3RhdGVUcmFuc2Zvcm0kOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgcHVibGljIGZyb21Ub3AkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgcHJpdmF0ZSBmcm9tVG9wT2JzZXJ2ZXI6IE9ic2VydmVyPG51bWJlcj47XG5cbiAgICBAVmlld0NoaWxkKCdjbG9ja2xibCcpIGNsb2NrbGJsUmVmOiBFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBjb3VudGVyID0gMTAwO1xuXG4gICAgcHVibGljIG9uVGFwKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgaGFuZCA9IHRoaXMuY2xvY2tsYmxSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLmZyb21Ub3BPYnNlcnZlci5uZXh0KHRoaXMuY291bnRlcik7XG5cbiAgICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5jb3VudGVyID09PSA3MDAgPyAxMDAgOiB0aGlzLmNvdW50ZXIgKyAxMDA7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3RhY2tMb2FkZWQoYXJncykge1xuICAgICAgICBsZXQgdG5zVmlldyA9IDxhbnk+YXJncy5vYmplY3Q7XG4gICAgICAgIHZhciBhID0gMDtcbiAgICAgICAgaWYgKHRuc1ZpZXcuYW5kcm9pZCkge1xuICAgICAgICAgICAgbGV0IG5hdGl2ZUFuVmlldyA9IHRuc1ZpZXcuYW5kcm9pZDtcbiAgICAgICAgICAgIC8vdmFyIHNoYXBlID0gbmV3IGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZSgpO1xuICAgICAgICAgICAgLy9zaGFwZS5zZXRTaGFwZShhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUuT1ZBTCk7XG4gICAgICAgICAgICAvL3NoYXBlLnNldENvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IucGFyc2VDb2xvcignIzMwYmNmZicpKTtcbiAgICAgICAgICAgIC8vbmF0aXZlQW5WaWV3LnNldEJhY2tncm91bmREcmF3YWJsZShzaGFwZSk7XG4gICAgICAgICAgICAvL25hdGl2ZUFuVmlldy5zZXRFbGV2YXRpb24oMjApO1xuICAgICAgICB9IGVsc2UgaWYgKHRuc1ZpZXcuaW9zKSB7XG4gICAgICAgICAgICBsZXQgbmF0aXZlVmlldyA9IHRuc1ZpZXcuaW9zO1xuICAgICAgICAgICAgbmF0aXZlVmlldy5sYXllci5zaGFkb3dDb2xvciA9IG5ldyBDb2xvcignIzg4ODg4OCcpLmlvcy5DR0NvbG9yO1xuICAgICAgICAgICAgbmF0aXZlVmlldy5sYXllci5zaGFkb3dPZmZzZXQgPSBDR1NpemVNYWtlKDAsIDIuMCk7XG4gICAgICAgICAgICBuYXRpdmVWaWV3LmxheWVyLnNoYWRvd09wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICBuYXRpdmVWaWV3LmxheWVyLnNoYWRvd1JhZGl1cyA9IDUuMDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IGhhbmQgPSA8TGFiZWw+dGhpcy5jbG9ja2xibFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIHRoaXMuZGlzdCQgPSBPYnNlcnZhYmxlLmludGVydmFsKDEwMDApXG4gICAgICAgICAgICAubWFwKHQgPT4gdCAqIDM2MCAvIDYwKTtcbiAgICAgICAgLy8ubGV0KHR3ZWVuKDkwMCwgZWxhc3RpY091dCkpO1xuXG4gICAgICAgIHRoaXMucm90YXRlVHJhbnNmb3JtJCA9IHRoaXMuZGlzdCRcbiAgICAgICAgICAgIC5sZXQodHdlZW4oOTAwLCBlbGFzdGljT3V0KSlcbiAgICAgICAgICAgIC5tYXAoZCA9PiBgcm90YXRlKCR7ZH0pYCk7XG5cblxuICAgICAgICB0aGlzLmZyb21Ub3AkID0gT2JzZXJ2YWJsZS5jcmVhdGUoXG4gICAgICAgICAgICBvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcm9tVG9wT2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMuY291bnRlcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICAgICAoKSA9PiB7IGNvbnNvbGUubG9nKCdkb25lJykgfVxuICAgICAgICApLmxldCh0d2Vlbig5MDAsIGVsYXN0aWNPdXQpKTtcblxuICAgICAgICAvLy5zdWJzY3JpYmUoZGlzdCA9PlxuICAgICAgICAvLyAgICBoYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtkaXN0fSlgXG4gICAgICAgIC8vKTtcbiAgICB9XG59Il19