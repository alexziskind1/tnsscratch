import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TweenPipe } from "~/tween.pipe";
import { ProgressOrigComponent } from "~/progress1-orig/progress-orig.component";
import { ProgressSimplerComponent } from "~/progress2-simpler/progress-simpler.component";
import { ProgressJsAnimatedComponent } from "~/progress3-js-animated/progress-js-animated.component";
import { ProgressRxAnimatedComponent } from "~/progress4-rx-animated/progress-rx-animated.component";


@NgModule({
    bootstrap: [
        ProgressOrigComponent,
        //ProgressSimplerComponent,
        //ProgressJsAnimatedComponent,
        //ProgressRxAnimatedComponent
    ],
    imports: [
        NativeScriptModule
    ],
    declarations: [
        ProgressOrigComponent,
        ProgressSimplerComponent,
        ProgressJsAnimatedComponent,
        ProgressRxAnimatedComponent,
        TweenPipe
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
