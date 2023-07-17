import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpeditionsComponent } from './expeditions.component';

const routes : Routes = [{path: '', component: ExpeditionsComponent}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ExpeditionsRoutingModule { }
