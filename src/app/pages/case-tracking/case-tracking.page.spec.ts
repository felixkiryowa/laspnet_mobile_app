import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTrackingPage } from './case-tracking.page';

describe('CaseTrackingPage', () => {
  let component: CaseTrackingPage;
  let fixture: ComponentFixture<CaseTrackingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseTrackingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
