import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseListingResultsPage } from './cause-listing-results.page';

describe('CauseListingResultsPage', () => {
  let component: CauseListingResultsPage;
  let fixture: ComponentFixture<CauseListingResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseListingResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseListingResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
