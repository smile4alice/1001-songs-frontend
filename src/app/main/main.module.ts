import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './component/home/home-routing.module';

@NgModule({
   declarations: [
      MainComponent
    ],
   imports: [
      SharedModule,
      HomeRoutingModule
   ],
   exports: [
      MainComponent
   ]
})

export class MainModule {}