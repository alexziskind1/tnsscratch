"use strict";
var core_1 = require('@angular/core');
var view_shadow_base_directive_1 = require('./view-shadow-base.directive');
var ViewShadowDirective = (function (_super) {
    __extends(ViewShadowDirective, _super);
    function ViewShadowDirective(el) {
        _super.call(this, el);
        this.el = el;
    }
    ViewShadowDirective.prototype.displayShadowOn = function (view) {
        var nativeView = view.android;
        nativeView.setShadowLayer(10.0, this.shadowOffset, this.shadowOffset, this.shadowColor.android);
    };
    ViewShadowDirective = __decorate([
        core_1.Directive({
            selector: '[shadow]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ViewShadowDirective);
    return ViewShadowDirective;
}(view_shadow_base_directive_1.ViewShadowBaseDirective));
exports.ViewShadowDirective = ViewShadowDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1zaGFkb3cuZGlyZWN0aXZlLmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LXNoYWRvdy5kaXJlY3RpdmUuYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBRXRELDJDQUF3Qyw4QkFBOEIsQ0FBQyxDQUFBO0FBTXZFO0lBQXlDLHVDQUF1QjtJQUM1RCw2QkFBc0IsRUFBYztRQUNoQyxrQkFBTSxFQUFFLENBQUMsQ0FBQztRQURRLE9BQUUsR0FBRixFQUFFLENBQVk7SUFFcEMsQ0FBQztJQUVTLDZDQUFlLEdBQXpCLFVBQTBCLElBQVU7UUFDaEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNoQyxVQUFVLENBQUMsY0FBYyxDQUNyQixJQUFJLEVBQ0osSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQzNCLENBQUM7SUFDTixDQUFDO0lBaEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1NBQ3ZCLENBQUM7OzJCQUFBO0lBZUYsMEJBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBeUMsb0RBQXVCLEdBYy9EO0FBZFksMkJBQW1CLHNCQWMvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCB7IFZpZXdTaGFkb3dCYXNlRGlyZWN0aXZlIH0gZnJvbSAnLi92aWV3LXNoYWRvdy1iYXNlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbc2hhZG93XSdcbn0pXG5leHBvcnQgY2xhc3MgVmlld1NoYWRvd0RpcmVjdGl2ZSBleHRlbmRzIFZpZXdTaGFkb3dCYXNlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoZWwpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkaXNwbGF5U2hhZG93T24odmlldzogVmlldykge1xuICAgICAgICBjb25zdCBuYXRpdmVWaWV3ID0gdmlldy5hbmRyb2lkO1xuICAgICAgICBuYXRpdmVWaWV3LnNldFNoYWRvd0xheWVyKFxuICAgICAgICAgICAgMTAuMCxcbiAgICAgICAgICAgIHRoaXMuc2hhZG93T2Zmc2V0LFxuICAgICAgICAgICAgdGhpcy5zaGFkb3dPZmZzZXQsXG4gICAgICAgICAgICB0aGlzLnNoYWRvd0NvbG9yLmFuZHJvaWRcbiAgICAgICAgKTtcbiAgICB9XG59Il19