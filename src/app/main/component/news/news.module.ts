import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NewsRoutingModule } from './news-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NewsComponent } from './news.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [NewsComponent],
  imports: [
    NewsRoutingModule,
    TranslateModule.forChild({
      loader:{
        provide: TranslateHttpLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ]
})
export class NewsModule { }
