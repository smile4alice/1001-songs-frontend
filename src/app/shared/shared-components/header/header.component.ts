import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  public isPopupOpen = true;
  public changeLang: boolean = true;
  public menuSwitcherOff: boolean = true;

  public lang = 'Укр';

  constructor(
    private _translate: TranslateService
  ){
    this.checkLang()
  }

  ngOnInit(): void {
    this.checkLang()
  }

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
  togglePopUp() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  checkLang(){
    this.changeLang = this._translate.currentLang === 'en' ? false : true;
  }

  receivedData(value:boolean){
    this.changeLang = value ? false : true;
    this.lang = this.changeLang ? 'Укр' : 'Eng';
    this._translate.use(this.changeLang ? 'ua' : 'en');
  }

}
