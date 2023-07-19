import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public changeLang: boolean = true;
  public menuSwitcherOff: boolean = true;

  public lang = 'Укр';

  constructor(
    private _translate: TranslateService
  ){}

  selectLang(){
    this.changeLang = !this.changeLang;
    this.lang = this.changeLang ? 'Укр' : 'Eng';
    this._translate.use(this.changeLang ? 'ua' : 'en');
  }

  switchMenu():void {
    this.menuSwitcherOff = !this.menuSwitcherOff;
  }

  overlayOf():void {
    this.menuSwitcherOff = true;
  }
}
