import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HirdeteseimComponent } from './hirdeteseim.component';

const routes: Routes = [{ path: '', component: HirdeteseimComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HirdeteseimRoutingModule { }
