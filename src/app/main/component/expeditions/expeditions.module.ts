import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule } from '@ngx-translate/core';
import { ExpeditionsComponent } from './expeditions.component';
import { ExpeditionsRoutingModule } from './expeditions-routing.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [ExpeditionsComponent],
  imports: [
    ExpeditionsRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateHttpLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ]
})
export class ExpeditionsModule { }
