import { Component } from '@angular/core';

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

  selectLang(lang:string){
    this.openSwitcher = !this.openSwitcher;
    if(lang === 'Укр'){
      this._ukrLang.active = true;
      this._engLang.active = false;
    } else{
      this._ukrLang.active = false;
      this._engLang.active = true;
    }
    const list = [this._ukrLang, this._engLang];
    
    this.openSwitcher ? this.langslist = list : this.langslist = list.filter(item => item.active === true); 
  }
}
