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
    }
    ClockComponent.prototype.onTap = function (args) {
        var hand = this.clocklblRef.nativeElement;
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
        var hand = this.clocklblRef.nativeElement;
        /*

                */
        this.dist$ = Observable_1.Observable.timer(0, 1000)
            .map(function (t) { return t * 360 / 60; })
            .let(tween(900, elasticOut));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xvY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDhDQUE2QztBQUM3QyxnQkFBYztBQUNkLDZCQUFpQztBQUNqQyxnREFBK0M7QUFFL0MsbUJBQW1CO0FBQ25CLHNEQUFzRDtBQUN0RCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUs5QyxJQUFNLFNBQVMsR0FBRyxVQUFDLFNBQW9DO0lBQXBDLDBCQUFBLEVBQUEsWUFBWSxnQkFBUyxDQUFDLGNBQWM7SUFDbkQsT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQztRQUNiLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQzthQUNuQyxHQUFHLENBQUMsY0FBTSxPQUFBLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUM7QUFKRixDQUlFLENBQUM7QUFFUCxJQUFNLFFBQVEsR0FBRyxVQUFDLEVBQUUsRUFBRSxTQUFvQztJQUFwQywwQkFBQSxFQUFBLFlBQVksZ0JBQVMsQ0FBQyxjQUFjO0lBQ3RELE9BQUEsU0FBUyxDQUFDLFNBQVMsQ0FBQztTQUNmLEdBQUcsQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsR0FBRyxFQUFFLEVBQWQsQ0FBYyxDQUFDO1NBQ2hDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEVBQU4sQ0FBTSxDQUFDO0FBRjNCLENBRTJCLENBQUM7QUFDaEMsSUFBTSxRQUFRLEdBQUcsVUFBQyxDQUFDLElBQUssT0FBQSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVB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QyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztLQUNyQyxDQUFDOztHQUVXLGNBQWMsQ0E4QzFCO0FBOUNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCAncnhqcyc7XG5pbXBvcnQgeyBTY2hlZHVsZXIgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xuXG4vL2ltcG9ydCAnZDMtZWFzZSc7XG4vL2ltcG9ydCB7IGVhc2VDdWJpYywgZWFzZUVsYXN0aWNPdXQgfSBmcm9tIFwiZDMtZWFzZVwiO1xudmFyIGVsYXN0aWNPdXQgPSByZXF1aXJlKCdlYXNlcy9lbGFzdGljLW91dCcpO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkO1xuZGVjbGFyZSB2YXIgQ0dTaXplTWFrZTtcblxuY29uc3QgbXNFbGFwc2VkID0gKHNjaGVkdWxlciA9IFNjaGVkdWxlci5hbmltYXRpb25GcmFtZSkgPT5cbiAgICBPYnNlcnZhYmxlLmRlZmVyKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBzY2hlZHVsZXIubm93KCk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmludGVydmFsKDAsIHNjaGVkdWxlcilcbiAgICAgICAgICAgIC5tYXAoKCkgPT4gc2NoZWR1bGVyLm5vdygpIC0gc3RhcnQpO1xuICAgIH0pO1xuXG5jb25zdCBkdXJhdGlvbiA9IChtcywgc2NoZWR1bGVyID0gU2NoZWR1bGVyLmFuaW1hdGlvbkZyYW1lKSA9PlxuICAgIG1zRWxhcHNlZChzY2hlZHVsZXIpXG4gICAgICAgIC5tYXAoZWxhcHNlZE1zID0+IGVsYXBzZWRNcyAvIG1zKVxuICAgICAgICAudGFrZVdoaWxlKHQgPT4gdCA8PSAxKTtcbmNvbnN0IGRpc3RhbmNlID0gKGQpID0+ICh0KSA9PiB0ICogZDtcblxuY29uc3QgcHJldkFuZEN1cnJlbnQgPSAoaW5pdGlhbFZhbHVlKSA9PiAoc291cmNlJCkgPT5cbiAgICBzb3VyY2UkLnN0YXJ0V2l0aChpbml0aWFsVmFsdWUpXG4gICAgICAgIC5idWZmZXJDb3VudCgyLCAxKTtcblxuY29uc3QgdHdlZW4gPSAobXMsIGVhc2luZykgPT4gKHNvdXJjZSQpID0+XG4gICAgc291cmNlJFxuICAgICAgICAubGV0KHByZXZBbmRDdXJyZW50KDApKVxuICAgICAgICAuc3dpdGNoTWFwKChbcCwgbl0pID0+XG4gICAgICAgICAgICBkdXJhdGlvbihtcylcbiAgICAgICAgICAgICAgICAubWFwKGVhc2luZylcbiAgICAgICAgICAgICAgICAubWFwKGRpc3RhbmNlKG4gLSBwKSlcbiAgICAgICAgICAgICAgICAubWFwKHYgPT4gbiArIHYpXG4gICAgICAgICk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2xvY2stY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Nsb2NrLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnY2xvY2suY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQ2xvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwdWJsaWMgZGlzdCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICAgIEBWaWV3Q2hpbGQoJ2Nsb2NrbGJsJykgY2xvY2tsYmxSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgb25UYXAoYXJncykge1xuICAgICAgICBjb25zdCBoYW5kID0gdGhpcy5jbG9ja2xibFJlZi5uYXRpdmVFbGVtZW50O1xuXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25TdGFja0xvYWRlZChhcmdzKSB7XG4gICAgICAgIGxldCB0bnNWaWV3ID0gPGFueT5hcmdzLm9iamVjdDtcbiAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICBpZiAodG5zVmlldy5hbmRyb2lkKSB7XG4gICAgICAgICAgICBsZXQgbmF0aXZlQW5WaWV3ID0gdG5zVmlldy5hbmRyb2lkO1xuICAgICAgICAgICAgLy92YXIgc2hhcGUgPSBuZXcgYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlKCk7XG4gICAgICAgICAgICAvL3NoYXBlLnNldFNoYXBlKGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS5PVkFMKTtcbiAgICAgICAgICAgIC8vc2hhcGUuc2V0Q29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5wYXJzZUNvbG9yKCcjMzBiY2ZmJykpO1xuICAgICAgICAgICAgLy9uYXRpdmVBblZpZXcuc2V0QmFja2dyb3VuZERyYXdhYmxlKHNoYXBlKTtcbiAgICAgICAgICAgIC8vbmF0aXZlQW5WaWV3LnNldEVsZXZhdGlvbigyMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodG5zVmlldy5pb3MpIHtcbiAgICAgICAgICAgIGxldCBuYXRpdmVWaWV3ID0gdG5zVmlldy5pb3M7XG4gICAgICAgICAgICBuYXRpdmVWaWV3LmxheWVyLnNoYWRvd0NvbG9yID0gbmV3IENvbG9yKCcjODg4ODg4JykuaW9zLkNHQ29sb3I7XG4gICAgICAgICAgICBuYXRpdmVWaWV3LmxheWVyLnNoYWRvd09mZnNldCA9IENHU2l6ZU1ha2UoMCwgMi4wKTtcbiAgICAgICAgICAgIG5hdGl2ZVZpZXcubGF5ZXIuc2hhZG93T3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgIG5hdGl2ZVZpZXcubGF5ZXIuc2hhZG93UmFkaXVzID0gNS4wO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc3QgaGFuZCA9IHRoaXMuY2xvY2tsYmxSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgLypcblxuICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5kaXN0JCA9IE9ic2VydmFibGUudGltZXIoMCwgMTAwMClcbiAgICAgICAgICAgIC5tYXAodCA9PiB0ICogMzYwIC8gNjApXG4gICAgICAgICAgICAubGV0KHR3ZWVuKDkwMCwgZWxhc3RpY091dCkpO1xuICAgICAgICAvLy5zdWJzY3JpYmUoZGlzdCA9PlxuICAgICAgICAvLyAgICBoYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtkaXN0fSlgXG4gICAgICAgIC8vKTtcbiAgICB9XG59Il19