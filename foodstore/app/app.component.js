"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("nativescript-dom");
require("rxjs/add/observable/fromEvent");
var move_service_1 = require("./move.service");
var page_1 = require("ui/page");
var AppComponent = (function () {
    function AppComponent(page, moveService) {
        this.page = page;
        this.moveService = moveService;
        this.page.actionBarHidden = true;
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
    __metadata("design:paramtypes", [page_1.Page, move_service_1.MoveService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFLbEQsNEJBQTBCO0FBRzFCLHlDQUF1QztBQUN2QywrQ0FBNkM7QUFDN0MsZ0NBQStCO0FBTy9CLElBQWEsWUFBWTtJQUVyQixzQkFBb0IsSUFBVSxFQUFVLFdBQXdCO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQ2hDLFVBQUEsU0FBUztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBUSxTQUFTLGVBQVksQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLCtCQUFRLEdBQWY7SUFFQSxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLElBQWdCO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLDhCQUFPLEdBQWQsVUFBZSxJQUFnQjtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksWUFBWTtJQUx4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtLQUNwQyxDQUFDO3FDQUk0QixXQUFJLEVBQXVCLDBCQUFXO0dBRnZELFlBQVksQ0F1QnhCO0FBdkJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3VpL2xhYmVsJztcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL2dyaWQtbGF5b3V0JztcblxuaW1wb3J0ICduYXRpdmVzY3JpcHQtZG9tJztcbmltcG9ydCB7IEFuaW1hdGlvbiwgQW5pbWF0aW9uRGVmaW5pdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FuaW1hdGlvbi9hbmltYXRpb25cIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcbmltcG9ydCB7IE1vdmVTZXJ2aWNlIH0gZnJvbSBcIi4vbW92ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIG1vdmVTZXJ2aWNlOiBNb3ZlU2VydmljZSkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgbW92ZVNlcnZpY2UubW92ZUNvbmZpcm1lZCQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGlyZWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbW92ZSAke2RpcmVjdGlvbn0gY29uZmlybWVkYCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25MZWZ0KGdyaWQ6IEdyaWRMYXlvdXQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21vdmUgbGVmdCcpO1xuICAgICAgICB0aGlzLm1vdmVTZXJ2aWNlLmFubm91bmNlTW92ZSgnbGVmdCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJpZ2h0KGdyaWQ6IEdyaWRMYXlvdXQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21vdmUgcmlnaHQnKTtcbiAgICAgICAgdGhpcy5tb3ZlU2VydmljZS5hbm5vdW5jZU1vdmUoJ3JpZ2h0Jyk7XG4gICAgfVxufVxuIl19