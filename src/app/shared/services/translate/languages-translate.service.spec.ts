import { TestBed } from '@angular/core/testing';

import { LanguagesTranslateService } from './languages-translate.service';

describe('LanguagesTranslateService', () => {
  let service: LanguagesTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagesTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
