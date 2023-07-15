import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

@NgModule({
   declarations: [
      HeaderComponent,
      FooterComponent,
      AdminComponent,
      UserComponent
   ],
   imports:[
      CommonModule
   ],
   exports: [
      HeaderComponent,
      FooterComponent,
      AdminComponent,
      UserComponent
   ]
})
export class SharedModule { }