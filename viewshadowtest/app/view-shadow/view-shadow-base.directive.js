"use strict";
var core_1 = require('@angular/core');
var observable_1 = require('data/observable');
var color_1 = require('color');
var ViewShadowBaseDirective = (function () {
    function ViewShadowBaseDirective(el) {
        var _this = this;
        this.el = el;
        console.log('ViewShadowBaseDirective constr');
        this.view.on(observable_1.Observable.propertyChangeEvent, function () {
            console.log('propertyChangeEvent');
            console.log('view measured height after change: ' + _this.view.getMeasuredHeight());
            /*
        if (this.label.text !== undefined) {
            this.displayShadowOn(this.label);
        }
        */
        });
        console.log('view measured height: ' + this.view.getMeasuredHeight());
        /*
        this.view.on('loaded', () => {
            console.log('loaded in constr');
        });
        this.view.onLoaded = () => {
            console.log('onLoaded in constr');
        };
        */
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
            return new color_1.Color('#FF00FF');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1zaGFkb3ctYmFzZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LXNoYWRvdy1iYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBRTlELDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHNCQUFzQixPQUFPLENBQUMsQ0FBQTtBQU05QjtJQWNJLGlDQUFzQixFQUFjO1FBZHhDLGlCQXlDQztRQTNCeUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsdUJBQVUsQ0FBQyxtQkFBbUIsRUFBRTtZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztZQUNuRjs7OztVQUlGO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFOzs7Ozs7O1VBT0U7SUFDTixDQUFDO0lBaENELHNCQUFZLHlDQUFJO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsc0JBQWMsZ0RBQVc7YUFBekI7WUFDSSxNQUFNLENBQUMsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYyxpREFBWTthQUExQjtZQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQXdCTSwwQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQTFDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtTQUN2QixDQUFDOzsrQkFBQTtJQTJDRiw4QkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF6Q3FCLCtCQUF1QiwwQkF5QzVDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tzaGFkb3ddJ1xufSlcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZpZXdTaGFkb3dCYXNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgZ2V0IHZpZXcoKTogVmlldyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBzaGFkb3dDb2xvcigpOiBDb2xvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoJyNGRjAwRkYnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNoYWRvd09mZnNldCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gNS4wO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbDogRWxlbWVudFJlZikge1xuICAgICAgICBjb25zb2xlLmxvZygnVmlld1NoYWRvd0Jhc2VEaXJlY3RpdmUgY29uc3RyJyk7XG4gICAgICAgIHRoaXMudmlldy5vbihPYnNlcnZhYmxlLnByb3BlcnR5Q2hhbmdlRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9wZXJ0eUNoYW5nZUV2ZW50Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmlldyBtZWFzdXJlZCBoZWlnaHQgYWZ0ZXIgY2hhbmdlOiAnICsgdGhpcy52aWV3LmdldE1lYXN1cmVkSGVpZ2h0KCkpO1xuICAgICAgICAgICAgLypcbiAgICAgICAgaWYgKHRoaXMubGFiZWwudGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTaGFkb3dPbih0aGlzLmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZpZXcgbWVhc3VyZWQgaGVpZ2h0OiAnICsgdGhpcy52aWV3LmdldE1lYXN1cmVkSGVpZ2h0KCkpO1xuICAgICAgICAvKlxuICAgICAgICB0aGlzLnZpZXcub24oJ2xvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkZWQgaW4gY29uc3RyJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpZXcub25Mb2FkZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb25Mb2FkZWQgaW4gY29uc3RyJyk7XG4gICAgICAgIH07XG4gICAgICAgICovXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlTaGFkb3dPbih0aGlzLnZpZXcpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkaXNwbGF5U2hhZG93T24odmlldzogVmlldyk7XG59Il19