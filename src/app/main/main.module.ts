import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './component/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './component/home/home-routing.module';

@NgModule({
   declarations: [
      MainComponent,
      AboutComponent
    ],
   imports: [
      SharedModule,
      HomeRoutingModule,
      AppRoutingModule
   ],
   exports: [
      MainComponent
   ]
})

export class MainModule {}