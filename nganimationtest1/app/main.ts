// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { BunsComponent } from './buns.component';
import { ModalBoxComponent } from './modal-box.component';
import { LetterWaveComponent } from './letter-wave.component';
import { PulsingComponent } from './pulsing.component';
import { SequenceComponent } from './sequence.component';
import { BounceClockComponent } from './bounce-clock.component';
import { LoadingComponent } from './loading.component';
import { AddItemComponent } from './add-item.component';
//import { Gsap1Component } from './gsap1.component';
import { JsAniComponent } from './jsani.component';


@NgModule({
    declarations: [JsAniComponent],
    bootstrap: [JsAniComponent],
    imports: [NativeScriptModule]
})
class AppComponentModule { }

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);

