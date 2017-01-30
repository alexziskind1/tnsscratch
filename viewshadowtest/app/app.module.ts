import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { MyComponent } from './my.component';
import { ViewShadowDirective } from './view-shadow/view-shadow.directive';

@NgModule({
    declarations: [
        AppComponent,
        MyComponent,
        ViewShadowDirective
    ],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
