import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleComicPage } from './detalle-comic.page';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { provideRouter } from '@angular/router';

describe('DetalleComicPage', () => {
  let component: DetalleComicPage;
  let fixture: ComponentFixture<DetalleComicPage>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;

  beforeEach(async() => {
    navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateForward']);
    alertControllerSpy = jasmine.createSpyObj('AlertController', ['create']);
    
    await TestBed.configureTestingModule({
          declarations: [DetalleComicPage],
          providers: [
            { provide: NavController, useValue: navCtrlSpy },
            { provide: AlertController, useValue: alertControllerSpy },
            { provide: provideRouter([])}
          ],
        }).compileComponents();

        fixture = TestBed.createComponent(DetalleComicPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
