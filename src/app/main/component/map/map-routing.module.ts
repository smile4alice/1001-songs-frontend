import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [{path: '', component: MapComponent}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MapRoutingModule { }
