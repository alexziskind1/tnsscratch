"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var my_component_1 = require('./my.component');
var view_shadow_directive_1 = require('./view-shadow/view-shadow.directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                my_component_1.MyComponent,
                view_shadow_directive_1.ViewShadowDirective
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [nativescript_module_1.NativeScriptModule],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCxvQ0FBbUMsMENBQTBDLENBQUMsQ0FBQTtBQUU5RSw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3QyxzQ0FBb0MscUNBQXFDLENBQUMsQ0FBQTtBQVkxRTtJQUFBO0lBQXlCLENBQUM7SUFWMUI7UUFBQyxlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsMkNBQW1CO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM5QixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4vbXkuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdTaGFkb3dEaXJlY3RpdmUgfSBmcm9tICcuL3ZpZXctc2hhZG93L3ZpZXctc2hhZG93LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTXlDb21wb25lbnQsXG4gICAgICAgIFZpZXdTaGFkb3dEaXJlY3RpdmVcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZV0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==