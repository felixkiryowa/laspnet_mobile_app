import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalPage } from './criminal.page';

describe('CriminalPage', () => {
  let component: CriminalPage;
  let fixture: ComponentFixture<CriminalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
