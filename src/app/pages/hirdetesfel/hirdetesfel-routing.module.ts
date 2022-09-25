import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HirdetesfelComponent } from './hirdetesfel.component';

const routes: Routes = [{ path: '', component: HirdetesfelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HirdetesfelRoutingModule { }
