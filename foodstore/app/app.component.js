"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("nativescript-dom");
require("rxjs/add/observable/fromEvent");
var move_service_1 = require("./move.service");
var page_1 = require("ui/page");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var AppComponent = (function () {
    function AppComponent(page, fonticon, moveService) {
        this.page = page;
        this.fonticon = fonticon;
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
    __metadata("design:paramtypes", [page_1.Page, nativescript_ng2_fonticon_1.TNSFontIconService, move_service_1.MoveService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFLekUsNEJBQTBCO0FBRzFCLHlDQUF1QztBQUN2QywrQ0FBNkM7QUFDN0MsZ0NBQStCO0FBQy9CLHVFQUErRDtBQU8vRCxJQUFhLFlBQVk7SUFJckIsc0JBQW9CLElBQVUsRUFBVSxRQUE0QixFQUFVLFdBQXdCO1FBQWxGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxXQUFXLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FDaEMsVUFBQSxTQUFTO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLFNBQVMsZUFBWSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sK0JBQVEsR0FBZjtJQUVBLENBQUM7SUFFTSw2QkFBTSxHQUFiLFVBQWMsSUFBZ0I7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sOEJBQU8sR0FBZCxVQUFlLElBQWdCO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO0tBQ3BDLENBQUM7cUNBTTRCLFdBQUksRUFBb0IsOENBQWtCLEVBQXVCLDBCQUFXO0dBSjdGLFlBQVksQ0F5QnhCO0FBekJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndWkvbGFiZWwnO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gJ3VpL2xheW91dHMvZ3JpZC1sYXlvdXQnO1xuXG5pbXBvcnQgJ25hdGl2ZXNjcmlwdC1kb20nO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uL2FuaW1hdGlvblwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xuaW1wb3J0IHsgTW92ZVNlcnZpY2UgfSBmcm9tIFwiLi9tb3ZlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZzItZm9udGljb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLCBwcml2YXRlIG1vdmVTZXJ2aWNlOiBNb3ZlU2VydmljZSkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgbW92ZVNlcnZpY2UubW92ZUNvbmZpcm1lZCQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGlyZWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbW92ZSAke2RpcmVjdGlvbn0gY29uZmlybWVkYCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25MZWZ0KGdyaWQ6IEdyaWRMYXlvdXQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21vdmUgbGVmdCcpO1xuICAgICAgICB0aGlzLm1vdmVTZXJ2aWNlLmFubm91bmNlTW92ZSgnbGVmdCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJpZ2h0KGdyaWQ6IEdyaWRMYXlvdXQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21vdmUgcmlnaHQnKTtcbiAgICAgICAgdGhpcy5tb3ZlU2VydmljZS5hbm5vdW5jZU1vdmUoJ3JpZ2h0Jyk7XG4gICAgfVxufVxuIl19