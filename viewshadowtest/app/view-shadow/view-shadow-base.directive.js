"use strict";
var core_1 = require('@angular/core');
var color_1 = require('color');
var ViewShadowBaseDirective = (function () {
    function ViewShadowBaseDirective(el) {
        this.el = el;
    }
    Object.defineProperty(ViewShadowBaseDirective.prototype, "view", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewShadowBaseDirective.prototype, "shadowColor", {
        get: function () {
            return new color_1.Color('#888888');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewShadowBaseDirective.prototype, "shadowOffset", {
        get: function () {
            return 5.0;
        },
        enumerable: true,
        configurable: true
    });
    ViewShadowBaseDirective.prototype.ngOnInit = function () {
        this.displayShadowOn(this.view);
    };
    ViewShadowBaseDirective = __decorate([
        core_1.Directive({
            selector: '[shadow]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ViewShadowBaseDirective);
    return ViewShadowBaseDirective;
}());
exports.ViewShadowBaseDirective = ViewShadowBaseDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1zaGFkb3ctYmFzZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LXNoYWRvdy1iYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBRzlELHNCQUFzQixPQUFPLENBQUMsQ0FBQTtBQU05QjtJQWNJLGlDQUFzQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUNwQyxDQUFDO0lBYkQsc0JBQVkseUNBQUk7YUFBaEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYyxnREFBVzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFjLGlEQUFZO2FBQTFCO1lBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBS00sMENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUF2Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7U0FDdkIsQ0FBQzs7K0JBQUE7SUF3QkYsOEJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJxQiwrQkFBdUIsMEJBc0I1QyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbc2hhZG93XSdcbn0pXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWaWV3U2hhZG93QmFzZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIGdldCB2aWV3KCk6IFZpZXcge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgc2hhZG93Q29sb3IoKTogQ29sb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yKCcjODg4ODg4Jyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBzaGFkb3dPZmZzZXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDUuMDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVNoYWRvd09uKHRoaXMudmlldyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGRpc3BsYXlTaGFkb3dPbih2aWV3OiBWaWV3KTtcbn0iXX0=