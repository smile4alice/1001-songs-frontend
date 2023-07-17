import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { AdminComponent } from './shared-components/admin/admin.component';
import { UserComponent } from './shared-components/user/user.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
   declarations: [
      HeaderComponent,
      FooterComponent,
      AdminComponent,
      UserComponent
   ],
   imports:[
      CommonModule,
      TranslateModule,
      RouterLink,
      RouterLinkActive
   ],
   exports: [
      HeaderComponent,
      FooterComponent,
      AdminComponent,
      UserComponent
   ]
})
export class SharedModule { }