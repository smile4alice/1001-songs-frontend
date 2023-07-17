import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public openSwitcher: boolean = false;

  private _ukrLang = {id:1, lang:'Укр', active:true};
  private _engLang = {id:2, lang:'Eng', active:false};
  public langslist = [this._ukrLang];

  constructor(
    private _translate: TranslateService
  ){}

  selectLang(lang:string){
    this.openSwitcher = !this.openSwitcher;
    if(lang === 'Укр'){
      this._ukrLang.active = true;
      this._engLang.active = false;
      this._translate.use('ua');
    } else if(lang === 'Eng'){
      this._ukrLang.active = false;
      this._engLang.active = true;
      this._translate.use('en');
    }
    const list = [this._ukrLang, this._engLang];
    
    this.openSwitcher ? this.langslist = list : this.langslist = list.filter(item => item.active === true); 
  }
}
