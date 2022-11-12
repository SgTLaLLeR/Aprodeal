import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EgyhirdetesRoutingModule } from './egyhirdetes-routing.module';
import { EgyhirdetesComponent } from './egyhirdetes.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    EgyhirdetesComponent
  ],
    imports: [
        CommonModule,
        EgyhirdetesRoutingModule,
        MatButtonModule
    ]
})
export class EgyhirdetesModule { }
