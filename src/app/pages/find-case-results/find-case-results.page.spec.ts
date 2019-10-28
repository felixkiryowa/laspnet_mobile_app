import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spies } from '../../helpers/spies';
import { FindCaseResultsPage } from './find-case-results.page';
import { configureTestSuite } from 'ng-bullet';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('FindCaseResultsPage', () => {
  let component: FindCaseResultsPage;
  let fixture: ComponentFixture<FindCaseResultsPage>;

  beforeAll(() => Spies.resetSpies([Spies.routerSpy]));
  afterEach(() => Spies.resetSpies([Spies.routerSpy]));

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports:[
        IonicModule.forRoot(),
      ],
      declarations:[
        FindCaseResultsPage
      ],
      providers:[
        {
          provide: Router,
          useValue: Spies.routerSpy
        },
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
    fixture = TestBed.createComponent(FindCaseResultsPage);
    component = fixture.componentInstance;
    component.filteredData = [

    ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call goToFoundCaseDetailsPage', () => {
    component.goToFoundCaseDetailsPage({name:'franco'});
    spyOn(component, 'goToFoundCaseDetailsPage');
    expect(Spies.routerSpy.navigate).toHaveBeenCalled();
  })
});
