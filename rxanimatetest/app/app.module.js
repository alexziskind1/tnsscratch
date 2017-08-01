"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var clock_component_1 = require("./clock.component");
var rotate_pipe_1 = require("./rotate.pipe");
var tween_pipe_1 = require("./tween.pipe");
var drag_component_1 = require("./drag.component");
var star_component_1 = require("./star.component");
var paral_component_1 = require("./paral.component");
var list_items_component_1 = require("./list-items.component");
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            //AppComponent
            //ClockComponent,
            //DragComponent,
            //StarComponent,
            //ParalComponent,
            list_items_component_1.ListItemsComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            clock_component_1.ClockComponent,
            drag_component_1.DragComponent,
            star_component_1.StarComponent,
            paral_component_1.ParalComponent,
            list_items_component_1.ListItemsComponent,
            rotate_pipe_1.RotatePipe,
            tween_pipe_1.TweenPipe
        ],
        providers: [],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MscURBQW1EO0FBQ25ELDZDQUEyQztBQUMzQywyQ0FBeUM7QUFDekMsbURBQWlEO0FBQ2pELG1EQUFpRDtBQUNqRCxxREFBbUQ7QUFDbkQsK0RBQTREO0FBb0M1RCxJQUFhLFNBQVM7SUFIdEI7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQWpDckIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQix5Q0FBa0I7U0FDckI7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1NBQ25CO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWixnQ0FBYztZQUNkLDhCQUFhO1lBQ2IsOEJBQWE7WUFDYixnQ0FBYztZQUNkLHlDQUFrQjtZQUNsQix3QkFBVTtZQUNWLHNCQUFTO1NBQ1o7UUFDRCxTQUFTLEVBQUUsRUFFVjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7SUFDRjs7TUFFRTtHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2xvY2tDb21wb25lbnQgfSBmcm9tIFwiLi9jbG9jay5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdGF0ZVBpcGUgfSBmcm9tIFwiLi9yb3RhdGUucGlwZVwiO1xuaW1wb3J0IHsgVHdlZW5QaXBlIH0gZnJvbSBcIi4vdHdlZW4ucGlwZVwiO1xuaW1wb3J0IHsgRHJhZ0NvbXBvbmVudCB9IGZyb20gXCIuL2RyYWcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdGFyQ29tcG9uZW50IH0gZnJvbSBcIi4vc3Rhci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBhcmFsQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFyYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaXN0SXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0LWl0ZW1zLmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIC8vQXBwQ29tcG9uZW50XG4gICAgICAgIC8vQ2xvY2tDb21wb25lbnQsXG4gICAgICAgIC8vRHJhZ0NvbXBvbmVudCxcbiAgICAgICAgLy9TdGFyQ29tcG9uZW50LFxuICAgICAgICAvL1BhcmFsQ29tcG9uZW50LFxuICAgICAgICBMaXN0SXRlbXNDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBDbG9ja0NvbXBvbmVudCxcbiAgICAgICAgRHJhZ0NvbXBvbmVudCxcbiAgICAgICAgU3RhckNvbXBvbmVudCxcbiAgICAgICAgUGFyYWxDb21wb25lbnQsXG4gICAgICAgIExpc3RJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgUm90YXRlUGlwZSxcbiAgICAgICAgVHdlZW5QaXBlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcblxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==