import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';
import { Spies } from '../../helpers/spies';
import { CivilDetailsPage } from './civil-details.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule, ActivatedRoute, convertToParamMap } from '@angular/router';

describe('CivilDetailsPage', () => {
  let component: CivilDetailsPage;
  let fixture: ComponentFixture<CivilDetailsPage>;

  beforeAll(() => Spies.resetSpies([Spies.activatedRouteSpy]));
  afterEach(() => Spies.resetSpies([Spies.activatedRouteSpy]));


  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports:[
        IonicModule.forRoot(),
        RouterModule.forRoot([])
      ],
      declarations:[
        CivilDetailsPage
      ],
      providers:[
        {
          provide:ActivatedRoute,
          useValue: {snapshot:{paramMap: convertToParamMap( { 'procedureId': '2' })} }
        }
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
