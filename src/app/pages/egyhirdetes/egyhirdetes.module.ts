import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EgyhirdetesRoutingModule } from './egyhirdetes-routing.module';
import { EgyhirdetesComponent } from './egyhirdetes.component';
import {MatButtonModule} from "@angular/material/button";
import {CdkTableModule} from "@angular/cdk/table";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    EgyhirdetesComponent
  ],
    imports: [
        CommonModule,
        EgyhirdetesRoutingModule,
        MatButtonModule,
        CdkTableModule,
        MatIconModule
    ]
})
export class EgyhirdetesModule { }
