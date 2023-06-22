import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './main/component/about/about.component';
import { AdminComponent } from './shared-components/admin/admin.component';
import { UserComponent } from './shared-components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
