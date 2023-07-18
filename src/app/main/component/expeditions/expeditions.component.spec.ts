import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionsComponent } from './expeditions.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ExpeditionsComponent', () => {
  let component: ExpeditionsComponent;
  let fixture: ComponentFixture<ExpeditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpeditionsComponent],
      imports: [TranslateModule.forRoot()]
    });
    fixture = TestBed.createComponent(ExpeditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
