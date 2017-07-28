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
            paral_component_1.ParalComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MscURBQW1EO0FBQ25ELDZDQUEyQztBQUMzQywyQ0FBeUM7QUFDekMsbURBQWlEO0FBQ2pELG1EQUFpRDtBQUNqRCxxREFBbUQ7QUFrQ25ELElBQWEsU0FBUztJQUh0Qjs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBL0JyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCxjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsZ0NBQWM7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1NBQ25CO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWixnQ0FBYztZQUNkLDhCQUFhO1lBQ2IsOEJBQWE7WUFDYixnQ0FBYztZQUNkLHdCQUFVO1lBQ1Ysc0JBQVM7U0FDWjtRQUNELFNBQVMsRUFBRSxFQUVWO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztJQUNGOztNQUVFO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDbG9ja0NvbXBvbmVudCB9IGZyb20gXCIuL2Nsb2NrLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm90YXRlUGlwZSB9IGZyb20gXCIuL3JvdGF0ZS5waXBlXCI7XG5pbXBvcnQgeyBUd2VlblBpcGUgfSBmcm9tIFwiLi90d2Vlbi5waXBlXCI7XG5pbXBvcnQgeyBEcmFnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHJhZy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN0YXJDb21wb25lbnQgfSBmcm9tIFwiLi9zdGFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGFyYWxDb21wb25lbnQgfSBmcm9tIFwiLi9wYXJhbC5jb21wb25lbnRcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICAvL0FwcENvbXBvbmVudFxuICAgICAgICAvL0Nsb2NrQ29tcG9uZW50LFxuICAgICAgICAvL0RyYWdDb21wb25lbnQsXG4gICAgICAgIC8vU3RhckNvbXBvbmVudCxcbiAgICAgICAgUGFyYWxDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBDbG9ja0NvbXBvbmVudCxcbiAgICAgICAgRHJhZ0NvbXBvbmVudCxcbiAgICAgICAgU3RhckNvbXBvbmVudCxcbiAgICAgICAgUGFyYWxDb21wb25lbnQsXG4gICAgICAgIFJvdGF0ZVBpcGUsXG4gICAgICAgIFR3ZWVuUGlwZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG5cbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=