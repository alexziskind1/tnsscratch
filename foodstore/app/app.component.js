"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("nativescript-dom");
require("rxjs/add/observable/fromEvent");
var move_service_1 = require("./move.service");
var AppComponent = (function () {
    function AppComponent(moveService) {
        this.moveService = moveService;
        moveService.moveConfirmed$.subscribe(function (direction) {
            console.log("move " + direction + " confirmed");
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onLeft = function (grid) {
        console.log('move left');
        this.moveService.announceMove('left');
    };
    AppComponent.prototype.onRight = function (grid) {
        console.log('move right');
        this.moveService.announceMove('right');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html"
    }),
    __metadata("design:paramtypes", [move_service_1.MoveService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFLbEQsNEJBQTBCO0FBRzFCLHlDQUF1QztBQUN2QywrQ0FBNkM7QUFPN0MsSUFBYSxZQUFZO0lBRXJCLHNCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QyxXQUFXLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FDaEMsVUFBQSxTQUFTO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLFNBQVMsZUFBWSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sK0JBQVEsR0FBZjtJQUVBLENBQUM7SUFFTSw2QkFBTSxHQUFiLFVBQWMsSUFBZ0I7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sOEJBQU8sR0FBZCxVQUFlLElBQWdCO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO0tBQ3BDLENBQUM7cUNBSW1DLDBCQUFXO0dBRm5DLFlBQVksQ0FzQnhCO0FBdEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3VpL2xhYmVsJztcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL2dyaWQtbGF5b3V0JztcblxuaW1wb3J0ICduYXRpdmVzY3JpcHQtZG9tJztcbmltcG9ydCB7IEFuaW1hdGlvbiwgQW5pbWF0aW9uRGVmaW5pdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FuaW1hdGlvbi9hbmltYXRpb25cIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcbmltcG9ydCB7IE1vdmVTZXJ2aWNlIH0gZnJvbSBcIi4vbW92ZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW92ZVNlcnZpY2U6IE1vdmVTZXJ2aWNlKSB7XG4gICAgICAgIG1vdmVTZXJ2aWNlLm1vdmVDb25maXJtZWQkLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG1vdmUgJHtkaXJlY3Rpb259IGNvbmZpcm1lZGApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIG9uTGVmdChncmlkOiBHcmlkTGF5b3V0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtb3ZlIGxlZnQnKTtcbiAgICAgICAgdGhpcy5tb3ZlU2VydmljZS5hbm5vdW5jZU1vdmUoJ2xlZnQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SaWdodChncmlkOiBHcmlkTGF5b3V0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtb3ZlIHJpZ2h0Jyk7XG4gICAgICAgIHRoaXMubW92ZVNlcnZpY2UuYW5ub3VuY2VNb3ZlKCdyaWdodCcpO1xuICAgIH1cbn1cbiJdfQ==