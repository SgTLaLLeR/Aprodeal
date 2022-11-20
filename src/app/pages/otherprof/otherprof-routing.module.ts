import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherprofComponent } from './otherprof.component';

const routes: Routes = [{ path: '', component: OtherprofComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherprofRoutingModule { }
