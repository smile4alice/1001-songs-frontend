import { NgModule } from '@angular/core';
import { ScienceComponent } from './science.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [{path: '', component: ScienceComponent}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ScienceRoutingModule { }
