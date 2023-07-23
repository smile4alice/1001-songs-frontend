import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { PopUpMenuComponent } from './pop-up-menu/pop-up-menu.component';
import { ActivatedRoute } from '@angular/router';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TranslateModule.forRoot(), HeaderComponent, PopUpMenuComponent],
    providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            data: {
            }
          }
        }
      }
    ]
});
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle changeLang variable on each click', () => {
    expect(component.changeLang).toEqual(true);

    component.selectLang();
    fixture.detectChanges();
    expect(component.changeLang).toEqual(false);
 
    component.selectLang();
    fixture.detectChanges();
    expect(component.changeLang).toEqual(true); 
  });

  it('should switch language between "Укр" and "Eng" on each click', () => {
    expect(component.lang).toEqual('Укр');

    component.selectLang();
    fixture.detectChanges();
    expect(component.lang).toEqual('Eng');
 
    component.selectLang();
    fixture.detectChanges();
    expect(component.lang).toEqual('Укр'); 
  });

  it('should isPopupOpen = true', () => {
    expect(component.isPopupOpen ).toEqual(false);
    component.togglePopUp();
    expect(component.isPopupOpen ).toEqual(true);
  });
});
