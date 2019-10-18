import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';
import { CriminalDetailsPage } from './criminal-details.page';
import { 
  Spies
} from '../../helpers/spies';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterModule, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
describe('CriminalDetailsPage', () => {
  let component: CriminalDetailsPage;
  let fixture: ComponentFixture<CriminalDetailsPage>;

  beforeAll(() => Spies.resetSpies([Spies.activatedRouteSpy]));
  afterEach(()=>Spies.resetSpies([Spies.activatedRouteSpy]));


  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports:[
        IonicModule.forRoot(),
        RouterModule.forRoot([])
      ],
      declarations:[
        CriminalDetailsPage
      ],
      providers:[
        {
          provide:ActivatedRoute,
          useValue: {snapshot:{paramMap: convertToParamMap( { 'sectionId': '2' })} }
        }
      ]
    })
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
