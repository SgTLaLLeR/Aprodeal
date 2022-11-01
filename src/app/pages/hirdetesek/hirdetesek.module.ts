import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HirdetesekRoutingModule } from './hirdetesek-routing.module';
import { HirdetesekComponent } from './hirdetesek.component';


@NgModule({
  declarations: [
    HirdetesekComponent
  ],
  imports: [
    CommonModule,
    HirdetesekRoutingModule
  ]
})
export class HirdetesekModule { }
