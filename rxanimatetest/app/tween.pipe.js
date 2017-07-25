"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var Observable_1 = require("rxjs/Observable");
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
var TweenPipe = (function () {
    function TweenPipe() {
    }
    TweenPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //console.log('tween pipe');
        return value.let(tween(900, elasticOut));
    };
    return TweenPipe;
}());
TweenPipe = __decorate([
    core_1.Pipe({
        name: 'tweenPipe'
    })
], TweenPipe);
exports.TweenPipe = TweenPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdlZW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR3ZWVuLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFDcEQsNkJBQWlDO0FBQ2pDLDhDQUE2QztBQUM3QyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUc5QyxJQUFNLFNBQVMsR0FBRyxVQUFDLFNBQW9DO0lBQXBDLDBCQUFBLEVBQUEsWUFBWSxnQkFBUyxDQUFDLGNBQWM7SUFDbkQsT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQztRQUNiLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQzthQUNuQyxHQUFHLENBQUMsY0FBTSxPQUFBLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUM7QUFKRixDQUlFLENBQUM7QUFFUCxJQUFNLFFBQVEsR0FBRyxVQUFDLEVBQUUsRUFBRSxTQUFvQztJQUFwQywwQkFBQSxFQUFBLFlBQVksZ0JBQVMsQ0FBQyxjQUFjO0lBQ3RELE9BQUEsU0FBUyxDQUFDLFNBQVMsQ0FBQztTQUNmLEdBQUcsQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsR0FBRyxFQUFFLEVBQWQsQ0FBYyxDQUFDO1NBQ2hDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEVBQU4sQ0FBTSxDQUFDO0FBRjNCLENBRTJCLENBQUM7QUFDaEMsSUFBTSxRQUFRLEdBQUcsVUFBQyxDQUFDLElBQUssT0FBQSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxFQUFaLENBQVksQ0FBQztBQUVyQyxJQUFNLGNBQWMsR0FBRyxVQUFDLFlBQVksSUFBSyxPQUFBLFVBQUMsT0FBTztJQUM3QyxPQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1NBQzFCLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRHRCLENBQ3NCLEVBRmUsQ0FFZixDQUFDO0FBRTNCLElBQU0sS0FBSyxHQUFHLFVBQUMsRUFBRSxFQUFFLE1BQU0sSUFBSyxPQUFBLFVBQUMsT0FBTztJQUNsQyxPQUFBLE9BQU87U0FDRixHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCLFNBQVMsQ0FBQyxVQUFDLEVBQU07WUFBTCxTQUFDLEVBQUUsU0FBQztRQUNiLE9BQUEsUUFBUSxDQUFDLEVBQUUsQ0FBQzthQUNQLEdBQUcsQ0FBQyxNQUFNLENBQUM7YUFDWCxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNwQixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssQ0FBQztJQUhwQixDQUdvQixDQUN2QjtBQVBMLENBT0ssRUFScUIsQ0FRckIsQ0FBQztBQU9WLElBQWEsU0FBUztJQUF0QjtJQUtBLENBQUM7SUFKRyw2QkFBUyxHQUFULFVBQVUsS0FBVTtRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ2hDLDRCQUE0QjtRQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSxTQUFTO0lBSnJCLFdBQUksQ0FBQztRQUNGLElBQUksRUFBRSxXQUFXO0tBQ3BCLENBQUM7R0FFVyxTQUFTLENBS3JCO0FBTFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2hlZHVsZXIgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbnZhciBlbGFzdGljT3V0ID0gcmVxdWlyZSgnZWFzZXMvZWxhc3RpYy1vdXQnKTtcblxuXG5jb25zdCBtc0VsYXBzZWQgPSAoc2NoZWR1bGVyID0gU2NoZWR1bGVyLmFuaW1hdGlvbkZyYW1lKSA9PlxuICAgIE9ic2VydmFibGUuZGVmZXIoKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFydCA9IHNjaGVkdWxlci5ub3coKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuaW50ZXJ2YWwoMCwgc2NoZWR1bGVyKVxuICAgICAgICAgICAgLm1hcCgoKSA9PiBzY2hlZHVsZXIubm93KCkgLSBzdGFydCk7XG4gICAgfSk7XG5cbmNvbnN0IGR1cmF0aW9uID0gKG1zLCBzY2hlZHVsZXIgPSBTY2hlZHVsZXIuYW5pbWF0aW9uRnJhbWUpID0+XG4gICAgbXNFbGFwc2VkKHNjaGVkdWxlcilcbiAgICAgICAgLm1hcChlbGFwc2VkTXMgPT4gZWxhcHNlZE1zIC8gbXMpXG4gICAgICAgIC50YWtlV2hpbGUodCA9PiB0IDw9IDEpO1xuY29uc3QgZGlzdGFuY2UgPSAoZCkgPT4gKHQpID0+IHQgKiBkO1xuXG5jb25zdCBwcmV2QW5kQ3VycmVudCA9IChpbml0aWFsVmFsdWUpID0+IChzb3VyY2UkKSA9PlxuICAgIHNvdXJjZSQuc3RhcnRXaXRoKGluaXRpYWxWYWx1ZSlcbiAgICAgICAgLmJ1ZmZlckNvdW50KDIsIDEpO1xuXG5jb25zdCB0d2VlbiA9IChtcywgZWFzaW5nKSA9PiAoc291cmNlJCkgPT5cbiAgICBzb3VyY2UkXG4gICAgICAgIC5sZXQocHJldkFuZEN1cnJlbnQoMCkpXG4gICAgICAgIC5zd2l0Y2hNYXAoKFtwLCBuXSkgPT5cbiAgICAgICAgICAgIGR1cmF0aW9uKG1zKVxuICAgICAgICAgICAgICAgIC5tYXAoZWFzaW5nKVxuICAgICAgICAgICAgICAgIC5tYXAoZGlzdGFuY2UobiAtIHApKVxuICAgICAgICAgICAgICAgIC5tYXAodiA9PiBuICsgdilcbiAgICAgICAgKTtcblxuXG5AUGlwZSh7XG4gICAgbmFtZTogJ3R3ZWVuUGlwZSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUd2VlblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0d2VlbiBwaXBlJyk7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZXQodHdlZW4oOTAwLCBlbGFzdGljT3V0KSk7XG4gICAgfVxufSJdfQ==