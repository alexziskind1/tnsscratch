"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RotatePipe = (function () {
    function RotatePipe() {
    }
    RotatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return "rotate(" + value + ")";
    };
    return RotatePipe;
}());
RotatePipe = __decorate([
    core_1.Pipe({
        name: 'rotatePipe'
    })
], RotatePipe);
exports.RotatePipe = RotatePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3RhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRDtBQU1wRCxJQUFhLFVBQVU7SUFBdkI7SUFJQSxDQUFDO0lBSEcsOEJBQVMsR0FBVCxVQUFVLEtBQVU7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUNoQyxNQUFNLENBQUMsWUFBVSxLQUFLLE1BQUcsQ0FBQztJQUM5QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLFVBQVU7SUFKdEIsV0FBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLFlBQVk7S0FDckIsQ0FBQztHQUVXLFVBQVUsQ0FJdEI7QUFKWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdyb3RhdGVQaXBlJ1xufSlcblxuZXhwb3J0IGNsYXNzIFJvdGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xuICAgICAgICByZXR1cm4gYHJvdGF0ZSgke3ZhbHVlfSlgO1xuICAgIH1cbn0iXX0=