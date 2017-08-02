import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { TileComponent } from './tile.component';
import { MoveService } from "./move.service";
import { DetailComponent } from "./detail.component";
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        TNSFontIconModule.forRoot({
            'fa': 'font-awesome.css'
        })
    ],
    declarations: [
        AppComponent,
        TileComponent,
        DetailComponent
    ],
    providers: [
        MoveService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
