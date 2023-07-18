import { NgModule } from '@angular/core';
import { ScienceComponent } from './science.component';
import { ScienceRoutingModule } from './science-routing.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [ScienceComponent],
  imports: [
    ScienceRoutingModule,
    TranslateModule.forChild({
      loader:{
        provide: TranslateHttpLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })

  ]
})
export class ScienceModule { }
