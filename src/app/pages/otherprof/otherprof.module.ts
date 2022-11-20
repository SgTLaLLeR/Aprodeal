import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherprofRoutingModule } from './otherprof-routing.module';
import { OtherprofComponent } from './otherprof.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    OtherprofComponent
  ],
    imports: [
        CommonModule,
        OtherprofRoutingModule,
        MatButtonModule
    ]
})
export class OtherprofModule { }
