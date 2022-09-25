import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooldalRoutingModule } from './fooldal-routing.module';
import { FooldalComponent } from './fooldal.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        FooldalComponent
    ],
    exports: [
        FooldalComponent
    ],
  imports: [
    CommonModule,
    FooldalRoutingModule,
    MatButtonModule
  ]
})
export class FooldalModule {


}
