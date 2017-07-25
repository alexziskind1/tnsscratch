import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { ClockComponent } from "./clock.component";
import { RotatePipe } from "./rotate.pipe";
import { TweenPipe } from "./tween.pipe";


@NgModule({
    bootstrap: [
        //AppComponent
        ClockComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ClockComponent,
        RotatePipe,
        TweenPipe
    ],
    providers: [

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
