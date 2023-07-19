import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [TranslateModule.forRoot()]
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

  it('should toggle menuSwitcherOff variable on each click', () => {
    expect(component.menuSwitcherOff).toEqual(true);

    component.switchMenu();
    fixture.detectChanges();
    expect(component.menuSwitcherOff).toEqual(false);
 
    component.switchMenu();
    fixture.detectChanges();
    expect(component.menuSwitcherOff).toEqual(true);
  });

  it('should toggle menuSwitcherOff variable on each click', () => {
    expect(component.menuSwitcherOff).toEqual(true);

    component.overlayOf();
    fixture.detectChanges();
    expect(component.menuSwitcherOff).toEqual(true);
 
    component.overlayOf();
    fixture.detectChanges();
    expect(component.menuSwitcherOff).toEqual(true);
  });
});
