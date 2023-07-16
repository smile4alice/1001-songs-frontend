import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: '', loadChildren: () => import('./main/component/home/home.module').then(m => m.HomeModule)}
  ]
},

// 404
{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
