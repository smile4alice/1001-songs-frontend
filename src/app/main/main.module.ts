import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared-components/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './component/about/about.component';

@NgModule({
   declarations: [
      MainComponent,
      AboutComponent
    ],
   imports: [
      SharedModule,
      AppRoutingModule
   ],
   exports: [
      MainComponent
   ]
})

export class MainModule {}