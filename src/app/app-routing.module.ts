import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: '', loadChildren: () => import('./main/component/home/home.module').then(m => m.HomeModule)},
    {path: 'about', loadChildren: () => import('./main/component/about/about.module').then(m => m.AboutModule)},
    {path: 'map', loadChildren: () => import('./main/component/map/map.module').then(m => m.MapModule)},
    {path: 'news', loadChildren: () => import('./main/component/news/news.module').then(m => m.NewsModule)},
    {path: 'expeditions', loadChildren: () => import('./main/component/expeditions/expeditions.module').then(m => m.ExpeditionsModule)},
    {path: 'science', loadChildren: () => import('./main/component/science/science.module').then(m => m.ScienceModule)}
  ]
},

// 404
// {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
