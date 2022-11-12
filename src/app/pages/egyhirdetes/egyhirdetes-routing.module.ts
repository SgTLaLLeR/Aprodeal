import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgyhirdetesComponent } from './egyhirdetes.component';

const routes: Routes = [{ path: '', component: EgyhirdetesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EgyhirdetesRoutingModule { }
