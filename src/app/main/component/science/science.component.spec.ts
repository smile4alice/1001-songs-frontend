import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceComponent } from './science.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ScienceComponent', () => {
  let component: ScienceComponent;
  let fixture: ComponentFixture<ScienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScienceComponent],
      imports: [TranslateModule.forRoot()]
    });
    fixture = TestBed.createComponent(ScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
