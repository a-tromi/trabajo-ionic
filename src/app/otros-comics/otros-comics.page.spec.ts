import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtrosComicsPage } from './otros-comics.page';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { provideRouter } from '@angular/router';

describe('OtrosComicsPage', () => {
  let component: OtrosComicsPage;
  let fixture: ComponentFixture<OtrosComicsPage>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;

  beforeEach(async() => {
    navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateForward']);
    alertControllerSpy = jasmine.createSpyObj('AlertController', ['create']);

    await TestBed.configureTestingModule({
      declarations: [OtrosComicsPage],
      providers: [
        { provide: NavController, useValue: navCtrlSpy },
        { provide: AlertController, useValue: alertControllerSpy },
        { provide: provideRouter([])}
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OtrosComicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
