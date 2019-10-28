import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';
import { Spies } from '../../helpers/spies';
import { FindCaseDetailsPage } from './find-case-details.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('FindCaseDetailsPage', () => {
  let component: FindCaseDetailsPage;
  let fixture: ComponentFixture<FindCaseDetailsPage>;


  beforeAll(() => Spies.resetSpies([Spies.activatedRouteSpy]));
  afterEach(() => Spies.resetSpies([Spies.activatedRouteSpy]));


  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports:[
        IonicModule.forRoot(),
        RouterModule.forRoot([])
      ],
      declarations:[
        FindCaseDetailsPage
      ],
      providers:[

        {
          provide: ActivatedRoute,
          useValue: {
            queryParams:of(
              {
                id: 1,
                title: 'Part A vs Part B',
                plaint:'Part A',
                caseId: 'UUFG456Y',
                respondent:'Part B',
                caseTypeId: 1,
                status: 'Mention',
                courtLevelId: 1,
              }
            )
          }
        }
      ]
    })
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCaseDetailsPage);
    component = fixture.componentInstance;
    component.caseDetail = {
      id: 1,
      title: 'Part A vs Part B',
      plaint:'Part A',
      caseId: 'UUFG456Y',
      respondent:'Part B',
      caseTypeId: 1,
      status: 'Mention',
      courtLevelId: 1,
  };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
