import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, LoadingController } from '@ionic/angular';
import { configureTestSuite } from 'ng-bullet';
import { HomePage } from './home.page';
import { RouterTestingModule } from '@angular/router/testing';
import { Spies } from '../helpers/spies';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeAll(() => Spies.resetSpies([Spies.loadingControllerSpy]));
  afterEach(() => Spies.resetSpies([Spies.loadingControllerSpy]));

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule
      ],
      declarations: [
        HomePage
      ],
      providers: [
        {
          provide:LoadingController,
          useValue: Spies.loadingControllerSpy
        }
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
