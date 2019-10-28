import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { configureTestSuite } from 'ng-bullet';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { 
  Spies
} from '../../helpers/spies';
import { CaseFilingPage } from './case-filing.page';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
describe('CaseFilingPage', () => {
  let component: CaseFilingPage;
  let fixture: ComponentFixture<CaseFilingPage>;

  beforeAll(() => Spies.resetSpies([]));
  afterEach(() => Spies.resetSpies([]));

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports:[
        IonicModule.forRoot(),
        RouterTestingModule,
      ],
      declarations:[
        CaseFilingPage
      ],
      providers:[
       
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFilingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call criminalCases method', () => {
    component.criminalCases();
    expect(component.civil).toBeFalsy();
    expect(component.criminal).toBeTruthy();
  })

  it('should call civilCases method', () =>{
    component.civilCases();
    expect(component.civil).toBeTruthy();
    expect(component.criminal).toBeFalsy();
  });
});
