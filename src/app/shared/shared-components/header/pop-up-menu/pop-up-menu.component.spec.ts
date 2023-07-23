import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { PopUpMenuComponent } from './pop-up-menu.component';
import { ActivatedRoute } from '@angular/router';

describe('PopUpMenuComponent', () => {
  let component: PopUpMenuComponent;
  let fixture: ComponentFixture<PopUpMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TranslateModule.forChild(), PopUpMenuComponent],
    providers: [TranslateService, TranslateStore,{
      provide: ActivatedRoute,
      useValue: {
        snapshot: {
          data: {}
        }
      }
    }]
});
    fixture = TestBed.createComponent(PopUpMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
