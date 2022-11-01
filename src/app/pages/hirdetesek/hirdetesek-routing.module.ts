import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HirdetesekComponent } from './hirdetesek.component';

const routes: Routes = [{ path: '', component: HirdetesekComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HirdetesekRoutingModule { }
