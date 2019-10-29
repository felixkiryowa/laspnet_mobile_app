import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseListingPage } from './cause-listing.page';

describe('CauseListingPage', () => {
  let component: CauseListingPage;
  let fixture: ComponentFixture<CauseListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
