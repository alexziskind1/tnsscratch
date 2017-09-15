import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { BunsComponent } from "./buns/buns.component";
import { ModalBoxComponent } from "./modal-box/modal-box.component";
import { LetterWaveComponent } from "./letter-wave/letter-wave.component";
import { PulsingComponent } from "./pulsing/pulsing.component";
import { SequenceComponent } from "./sequence/sequence.component";
import { BounceClockComponent } from "./bounce-clock/bounce-clock.component";
import { LoadingComponent } from "./loading/loading.component";
import { JsAniComponent } from "./jsani/jsani.component";


@NgModule({
    declarations: [
        AppComponent,
        AddItemComponent,
        BunsComponent,
        ModalBoxComponent,
        LetterWaveComponent,
        PulsingComponent,
        SequenceComponent,
        BounceClockComponent,
        LoadingComponent,
        JsAniComponent
    ],
    bootstrap: [
        //AppComponent,
        //AddItemComponent,
        //BunsComponent,
        //ModalBoxComponent,
        //LetterWaveComponent,
        //PulsingComponent,
        //SequenceComponent,
        //BounceClockComponent,
        //LoadingComponent,
        JsAniComponent
    ],
    imports: [
        NativeScriptModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
