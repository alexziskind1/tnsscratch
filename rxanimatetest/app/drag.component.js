"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs");
var page_1 = require("ui/page");
var fpsMeter = require("tns-core-modules/fps-meter");
var nativescript_performance_monitor_1 = require("nativescript-performance-monitor");
var color_1 = require("tns-core-modules/color");
var Point = (function () {
    function Point(x) {
        this.x = x;
    }
    return Point;
}());
var performanceMonitor = new nativescript_performance_monitor_1.PerformanceMonitor();
performanceMonitor.start({
    textColor: new color_1.Color("white"),
    backgroundColor: new color_1.Color("black"),
    borderColor: new color_1.Color("black"),
    hide: false,
    onSample: function (sample) {
        console.log("FPS: " + sample.fps);
        if (sample.cpu) {
            console.log("CPU %: " + sample.cpu);
        }
    }
});
var DragComponent = (function () {
    function DragComponent(page, ngZone) {
        /*const source = Observable.timer(0, 5000);
        const example = source.switchMap(() => Observable.interval(500));
        example.subscribe(n => console.log(n));
        */
        this.page = page;
        this.ngZone = ngZone;
        this.status = 'hello status';
        this.position = 'hello position';
        var callbackId = fpsMeter.addCallback(function (fps, minFps) {
            console.info("fps=" + fps + " minFps=" + minFps);
        });
        fpsMeter.start();
    }
    DragComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        var theLabel = this.labelRef.nativeElement;
        var stack1 = this.stack1Ref.nativeElement;
        this.touch$ = Observable_1.Observable.fromEvent(stack1, 'touch')
            .catch(function (e) {
            _this.handleError(e);
            return Observable_1.Observable.empty();
        });
        /*
    this.touch$.subscribe(
        n => {
            this.onStatusUpdate(n.action);
        },
        err => {
            console.dir(err);
        },
        () => {
            console.log('dopne');
        });
        */
        this.touchDown$ = this.touch$.filter(function (d) { return d.action === 'down'; });
        this.touchMove$ = this.touch$.filter(function (d) { return d.action === 'move'; });
        this.touchUp$ = this.touch$.filter(function (d) { return d.action === 'up'; });
        /*
                this.touchDown$.subscribe(
                    n => {
                        this.onStatusUpdate('touch down');
                        this.onEventUpdate(n);
                    },
                    err => {
                        console.error(err)
                    },
                    () => {
                        console.log('done')
                    });
                this.touchMove$.subscribe(
                    n => {
                        this.onStatusUpdate('touch move');
                        this.onEventUpdate(n);
                    },
                    err => {
                        console.error(err)
                    },
                    () => {
                        console.log('done')
                    });
                this.touchUp$.subscribe(
                    n => {
                        this.onStatusUpdate('touch up');
                        this.onEventUpdate(n);
                    },
                    err => {
                        console.error(err)
                    },
                    () => {
                        console.log('done')
                    });
                    */
        /*
                this.drag$ = self.touchDown$
                    .switchMap((args) => {
                        return self.touchMove$.takeUntil(self.touchUp$);
                    }).catch((e) => {
                        console.log(e);
                        return Observable.empty<TouchGestureEventData>();
                    });
        */
        /*
                this.drag$ = this.touchDown$
                    .flatMap((d) =>
                        this.touchMove$
                            .takeUntil(this.touchUp$)
                            .repeat()
                    )
                    .catch((e) => {
                        console.log(e);
                        return Observable.empty<TouchGestureEventData>();
                    });
                    */
        this.marLeft$ = this.touchMove$.map(function (e) { return e.getY() / 100; });
        //this.drag$.subscribe(e => this.onPositionUpdate(n));
        /*
                this.drag$.subscribe(
                    val => {
                        return this.onEventUpdate(val);
                    },
                    err => {
                        console.error(err)
                    },
                    () => {
                        console.log('drag done')
                    }
                );
                */
        /*
        //this.position$ =
        drag$.startWith(0)
            .subscribe(s => {
                console.log(s);
                this.position = s + '';
            });
            */
    };
    DragComponent.prototype.ngAfterViewInit = function () {
        /*
        this.pan$.subscribe(o => {
            var a = 0;
        });
        */
    };
    DragComponent.prototype.onTap = function (args) {
        this.position = 'tapped';
    };
    DragComponent.prototype.onPan = function (args) {
        console.log(args.state);
    };
    DragComponent.prototype.onTouch = function (args) {
        console.log(args.action);
    };
    DragComponent.prototype.onPositionUpdate = function (n) {
        var _this = this;
        this.ngZone.run(function () {
            _this.position = 'new pos: ' + n;
        });
    };
    DragComponent.prototype.onStatusUpdate = function (s) {
        var _this = this;
        this.ngZone.run(function () {
            console.log('status ' + s);
            _this.status = s;
        });
    };
    DragComponent.prototype.onEventUpdate = function (e) {
        var _this = this;
        this.ngZone.run(function () {
            _this.position = 'new pos: ' + e.getX();
        });
    };
    DragComponent.prototype.handleError = function (e) {
        console.dir(e);
    };
    return DragComponent;
}());
__decorate([
    core_1.ViewChild('lbl'),
    __metadata("design:type", core_1.ElementRef)
], DragComponent.prototype, "labelRef", void 0);
__decorate([
    core_1.ViewChild('stack1'),
    __metadata("design:type", core_1.ElementRef)
], DragComponent.prototype, "stack1Ref", void 0);
DragComponent = __decorate([
    core_1.Component({
        selector: "drag",
        templateUrl: "drag.component.html",
        styleUrls: ['drag.component.css']
        //changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [page_1.Page, core_1.NgZone])
], DragComponent);
exports.DragComponent = DragComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkcmFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRztBQUVsRyw4Q0FBNkM7QUFHN0MsZ0JBQWM7QUFDZCxnQ0FBK0I7QUFDL0IscURBQXVEO0FBQ3ZELHFGQUFnRztBQUNoRyxnREFBK0M7QUFFL0M7SUFDSSxlQUFtQixDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtJQUFJLENBQUM7SUFDckMsWUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRUQsSUFBTSxrQkFBa0IsR0FBdUIsSUFBSSxxREFBa0IsRUFBRSxDQUFDO0FBQ3hFLGtCQUFrQixDQUFDLEtBQUssQ0FBQztJQUNyQixTQUFTLEVBQUUsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDO0lBQzdCLGVBQWUsRUFBRSxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUM7SUFDbkMsV0FBVyxFQUFFLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQztJQUMvQixJQUFJLEVBQUUsS0FBSztJQUNYLFFBQVEsRUFBRSxVQUFDLE1BQWdDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztDQUNKLENBQUMsQ0FBQztBQVdILElBQWEsYUFBYTtJQTBCdEIsdUJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQ2xEOzs7VUFHRTtRQUpjLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVC9DLFdBQU0sR0FBVyxjQUFjLENBQUM7UUFDaEMsYUFBUSxHQUFXLGdCQUFnQixDQUFD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R0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scUNBQWEsR0FBcEIsVUFBcUIsQ0FBd0I7UUFBN0MsaUJBSUM7UUFIRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNaLEtBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxtQ0FBVyxHQUFsQixVQUFtQixDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkIsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQWpORCxJQWlOQztBQTNMcUI7SUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7OEJBQVcsaUJBQVU7K0NBQUM7QUFDbEI7SUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7OEJBQVksaUJBQVU7Z0RBQUM7QUF2QmxDLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDakMsaURBQWlEO0tBQ3BELENBQUM7cUNBNEI0QixXQUFJLEVBQWtCLGFBQU07R0ExQjdDLGFBQWEsQ0FpTnpCO0FBak5ZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFuR2VzdHVyZUV2ZW50RGF0YSwgR2VzdHVyZVR5cGVzLCBHZXN0dXJlU3RhdGVUeXBlcywgR2VzdHVyZXNPYnNlcnZlciwgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcblxuaW1wb3J0ICdyeGpzJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0ICogYXMgZnBzTWV0ZXIgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZnBzLW1ldGVyXCI7XG5pbXBvcnQgeyBQZXJmb3JtYW5jZU1vbml0b3IsIFBlcmZvcm1hbmNlTW9uaXRvclNhbXBsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wZXJmb3JtYW5jZS1tb25pdG9yJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcblxuY2xhc3MgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIpIHsgfVxufVxuXG5jb25zdCBwZXJmb3JtYW5jZU1vbml0b3I6IFBlcmZvcm1hbmNlTW9uaXRvciA9IG5ldyBQZXJmb3JtYW5jZU1vbml0b3IoKTtcbnBlcmZvcm1hbmNlTW9uaXRvci5zdGFydCh7XG4gICAgdGV4dENvbG9yOiBuZXcgQ29sb3IoXCJ3aGl0ZVwiKSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcImJsYWNrXCIpLFxuICAgIGJvcmRlckNvbG9yOiBuZXcgQ29sb3IoXCJibGFja1wiKSxcbiAgICBoaWRlOiBmYWxzZSxcbiAgICBvblNhbXBsZTogKHNhbXBsZTogUGVyZm9ybWFuY2VNb25pdG9yU2FtcGxlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRlBTOiBcIiArIHNhbXBsZS5mcHMpO1xuICAgICAgICBpZiAoc2FtcGxlLmNwdSkgeyAvLyBpT1Mgb25seSBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1BVICU6IFwiICsgc2FtcGxlLmNwdSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImRyYWdcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJkcmFnLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJ2RyYWcuY29tcG9uZW50LmNzcyddXG4gICAgLy9jaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIERyYWdDb21wb25lbnQge1xuXG4gICAgcHVibGljIHRvdWNoJDogT2JzZXJ2YWJsZTxUb3VjaEdlc3R1cmVFdmVudERhdGE+O1xuXG5cblxuICAgIHB1YmxpYyB0b3VjaERvd24kOiBPYnNlcnZhYmxlPFRvdWNoR2VzdHVyZUV2ZW50RGF0YT47XG4gICAgcHVibGljIHRvdWNoTW92ZSQ6IE9ic2VydmFibGU8VG91Y2hHZXN0dXJlRXZlbnREYXRhPjtcbiAgICBwdWJsaWMgdG91Y2hVcCQ6IE9ic2VydmFibGU8VG91Y2hHZXN0dXJlRXZlbnREYXRhPjtcblxuXG5cbiAgICBwdWJsaWMgZHJhZyQ6IE9ic2VydmFibGU8VG91Y2hHZXN0dXJlRXZlbnREYXRhPjtcblxuXG4gICAgcHVibGljIHBvc2l0aW9uJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gICAgcHVibGljIHN0YXR1czogc3RyaW5nID0gJ2hlbGxvIHN0YXR1cyc7XG4gICAgcHVibGljIHBvc2l0aW9uOiBzdHJpbmcgPSAnaGVsbG8gcG9zaXRpb24nO1xuXG4gICAgcHVibGljIG1hckxlZnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgICBAVmlld0NoaWxkKCdsYmwnKSBsYWJlbFJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdzdGFjazEnKSBzdGFjazFSZWY6IEVsZW1lbnRSZWY7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgICAgICAvKmNvbnN0IHNvdXJjZSA9IE9ic2VydmFibGUudGltZXIoMCwgNTAwMCk7XG4gICAgICAgIGNvbnN0IGV4YW1wbGUgPSBzb3VyY2Uuc3dpdGNoTWFwKCgpID0+IE9ic2VydmFibGUuaW50ZXJ2YWwoNTAwKSk7XG4gICAgICAgIGV4YW1wbGUuc3Vic2NyaWJlKG4gPT4gY29uc29sZS5sb2cobikpO1xuICAgICAgICAqL1xuXG4gICAgICAgIHZhciBjYWxsYmFja0lkID0gZnBzTWV0ZXIuYWRkQ2FsbGJhY2soZnVuY3Rpb24gKGZwczogbnVtYmVyLCBtaW5GcHM6IG51bWJlcikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiZnBzPVwiICsgZnBzICsgXCIgbWluRnBzPVwiICsgbWluRnBzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZwc01ldGVyLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGxldCB0aGVMYWJlbCA9IHRoaXMubGFiZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IHN0YWNrMSA9IHRoaXMuc3RhY2sxUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy50b3VjaCQgPSBPYnNlcnZhYmxlLmZyb21FdmVudDxUb3VjaEdlc3R1cmVFdmVudERhdGE+KHN0YWNrMSwgJ3RvdWNoJylcbiAgICAgICAgICAgIC8vICAgLmZpbHRlcih2YWwgPT4gdmFsLmFjdGlvbiAhPT0gJ2NhbmNlbCcpO1xuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuZW1wdHk8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLypcbiAgICB0aGlzLnRvdWNoJC5zdWJzY3JpYmUoXG4gICAgICAgIG4gPT4ge1xuICAgICAgICAgICAgdGhpcy5vblN0YXR1c1VwZGF0ZShuLmFjdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihlcnIpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9wbmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgICovXG5cblxuXG4gICAgICAgIHRoaXMudG91Y2hEb3duJCA9IHRoaXMudG91Y2gkLmZpbHRlcihkID0+IGQuYWN0aW9uID09PSAnZG93bicpXG4gICAgICAgIHRoaXMudG91Y2hNb3ZlJCA9IHRoaXMudG91Y2gkLmZpbHRlcihkID0+IGQuYWN0aW9uID09PSAnbW92ZScpO1xuICAgICAgICB0aGlzLnRvdWNoVXAkID0gdGhpcy50b3VjaCQuZmlsdGVyKGQgPT4gZC5hY3Rpb24gPT09ICd1cCcpO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaERvd24kLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3RhdHVzVXBkYXRlKCd0b3VjaCBkb3duJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRXZlbnRVcGRhdGUobik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvbmUnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoTW92ZSQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TdGF0dXNVcGRhdGUoJ3RvdWNoIG1vdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25FdmVudFVwZGF0ZShuKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG9uZScpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2hVcCQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TdGF0dXNVcGRhdGUoJ3RvdWNoIHVwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRXZlbnRVcGRhdGUobik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvbmUnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgKi9cblxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnJCA9IHNlbGYudG91Y2hEb3duJFxuICAgICAgICAgICAgICAgICAgICAuc3dpdGNoTWFwKChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50b3VjaE1vdmUkLnRha2VVbnRpbChzZWxmLnRvdWNoVXAkKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuZW1wdHk8VG91Y2hHZXN0dXJlRXZlbnREYXRhPigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgKi9cblxuXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWckID0gdGhpcy50b3VjaERvd24kXG4gICAgICAgICAgICAgICAgICAgIC5mbGF0TWFwKChkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaE1vdmUkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLnRvdWNoVXAkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBlYXQoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eTxUb3VjaEdlc3R1cmVFdmVudERhdGE+KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubWFyTGVmdCQgPSB0aGlzLnRvdWNoTW92ZSQubWFwKGUgPT4gZS5nZXRZKCkgLyAxMDApO1xuXG5cbiAgICAgICAgLy90aGlzLmRyYWckLnN1YnNjcmliZShlID0+IHRoaXMub25Qb3NpdGlvblVwZGF0ZShuKSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWckLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgdmFsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRXZlbnRVcGRhdGUodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJhZyBkb25lJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgKi9cblxuXG5cblxuICAgICAgICAvKlxuICAgICAgICAvL3RoaXMucG9zaXRpb24kID1cbiAgICAgICAgZHJhZyQuc3RhcnRXaXRoKDApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHMpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBzICsgJyc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICovXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAvKlxuICAgICAgICB0aGlzLnBhbiQuc3Vic2NyaWJlKG8gPT4ge1xuICAgICAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgKi9cbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXAoYXJncykge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ3RhcHBlZCc7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUGFuKGFyZ3M6IFBhbkdlc3R1cmVFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYXJncy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVG91Y2goYXJnczogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3MuYWN0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Qb3NpdGlvblVwZGF0ZShuOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAnbmV3IHBvczogJyArIG47XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblN0YXR1c1VwZGF0ZShzOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXMgJyArIHMpO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25FdmVudFVwZGF0ZShlOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpIHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAnbmV3IHBvczogJyArIGUuZ2V0WCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlRXJyb3IoZSkge1xuICAgICAgICBjb25zb2xlLmRpcihlKTtcblxuICAgIH1cblxufVxuIl19