import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';
import { 
  Spies
} from '../../helpers/spies';
import { FindCasePage } from './find-case.page';
import { IonicModule, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


describe('FindCasePage', () => {
  let component: FindCasePage;
  let fixture: ComponentFixture<FindCasePage>;
  let formBuilder: FormBuilder = new FormBuilder();

  beforeAll(() => Spies.resetSpies([
    Spies.loadingControllerSpy,
    Spies.alertControllerSpy,
    Spies.routerSpy
  ]));
  afterEach(() => Spies.resetSpies([
    Spies.loadingControllerSpy,
    Spies.alertControllerSpy,
    Spies.routerSpy
  ]));

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports:[
        IonicModule.forRoot(),
        ReactiveFormsModule,
        FormsModule
      ],
      declarations:[
        FindCasePage
      ],
      providers:[
        {
          provide: LoadingController,
          useValue:Spies.loadingControllerSpy
        },
        {
          provide: FormBuilder,
          useValue: formBuilder
        },
        {
          provide: AlertController,
          useValue: Spies.alertControllerSpy
        },
        {
          provide: Router,
          useValue: Spies.routerSpy
        }
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in ion-title tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#page-header').textContent).toContain('Case-Tracking');
  });

  it('should call the onSubmit method', () => {
    spyOn(component, 'findCase');
    const el = fixture.nativeElement.querySelector('#submitForm');
    el.dispatchEvent(new Event('click'));
    fixture.whenStable().then(() => {
      expect(component.findCase).toHaveBeenCalledTimes(1);
    });
  });

  it('should get submitted form value', () => {
    component.findCaseForm.patchValue({
      caseTypeId: 2,
      courtLevelId:1,
      officerNameId: 4,
      searchTerm:'Part A'
    });

    expect(component.findCaseForm.controls.caseTypeId.value).toBe(2);
  });

  it('should test  getCourt method with a value of 1 ', () => {
    const event = {
        detail: {
          value: 1
        }
      }
    
    // Calling get court method and passing event data
    component.getCourt(event);
    expect(component.disableOfficerNameField).toBeTruthy();
  });

  it('should test  getCourt method with a value of 2', () => {
    const event = {
        detail: {
          value: 2
        }
      }
    
    // Calling get court method and passing event data
    component.getCourt(event);
    expect(component.disableOfficerNameField).toBeTruthy();
  });

  it('should test  getCourt method with a value of 3', () => {
    const event = {
        detail: {
          value: 3
        }
      }
    
    // Calling get court method and passing event data
    component.getCourt(event);
    expect(component.disableOfficerNameField).toBeFalsy();
  });

  it('should test findCase method', () => {
    component.cases = [
      {
        id: 1,
        title: 'Part A vs Part B',
        plaint:'Part A',
        caseId: 'UUFG456Y',
        respondent:'Part B',
        caseTypeId: 1,
        status: 'Mention',
        courtLevelId: 1,
      },
      {
        id: 2,
        title: 'Part K vs Part X',
        plaint:'Part K',
        caseId: 'UUFG456Y',
        respondent:'Part X',
        caseTypeId: 2,
        officerNameId: 4,
        status: 'Mention',
        courtLevelId: 3,
      },
      {
        id: 3,
        title: 'Part C vs Part D',
        plaint:'Part C',
        caseId: 'UUFG45678',
        respondent:'Part D',
        caseTypeId: 19,
        status: 'Mention',
        courtLevelId: 20,
      
      },
    ]
    component.findCaseForm.patchValue({
      caseTypeId: 1,
      courtLevelId:1,
      officerNameId: 4,
      searchTerm:'Part A'
    });
    component.findCase();
    spyOn(component, 'goToFindCaseResults');
    expect(component.results[0].title).toBe('Part A vs Part B');
  });

  it('should test findCase method with no results', () => {
    component.cases = [
    ]
    component.findCaseForm.patchValue({
      caseTypeId: 1,
      courtLevelId:1,
      officerNameId: 4,
      searchTerm:'Part A'
    });
    component.findCase();
    spyOn(component, 'goToFindCaseResults');
    expect(component.results.length).toBe(0);
  });

});
