import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pop-up-menu',
  templateUrl: './pop-up-menu.component.html',
  styleUrls: ['./pop-up-menu.component.scss']
})
export class PopUpMenuComponent implements OnInit{
  @Output() changeLangDetection = new EventEmitter<boolean>();
  public lang!: boolean;
  constructor(
    private _translate: TranslateService
  ){}

  ngOnInit(): void {
    this.checkLang()    
  }

  checkLang() {
    this.lang = this._translate.currentLang === 'en';  
  }

  selectLang(value: boolean){
    this._translate.use(value ? 'ua' : 'en');
    this.lang = !value;
    this.checkLang();
    this.changeLangDetection.emit(this.lang);
  }
  
}
