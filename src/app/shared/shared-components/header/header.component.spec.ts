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

  it('should toggle openSwitcher value when selecting a language', () => {
    expect(component.openSwitcher).toBeFalse();

    component.selectLang('Укр');
    expect(component.openSwitcher).toBeTrue();

    component.selectLang('Eng');
    expect(component.openSwitcher).toBeFalse();
  });

  it('should filter langslist based on active language when openSwitcher is true', () => {
    component.openSwitcher = true;
    component.langslist = [
      { id: 1, lang: 'Укр', active: true },
      { id: 2, lang: 'Eng', active: false }
    ];

    component.selectLang('Eng');
    expect(component.langslist).toEqual([{ id: 2, lang: 'Eng', active: true }]);
  });
});
