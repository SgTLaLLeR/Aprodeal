import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HirdetesekRoutingModule } from './hirdetesek-routing.module';
import { HirdetesekComponent } from './hirdetesek.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HirdetesekComponent
  ],
    imports: [
        CommonModule,
        HirdetesekRoutingModule,
        MatButtonModule
    ]
})
export class HirdetesekModule { }
