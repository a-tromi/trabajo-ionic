import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesPage } from './clientes.page';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { provideRouter } from '@angular/router';

describe('ClientesPage', () => {
  let component: ClientesPage;
  let fixture: ComponentFixture<ClientesPage>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;

  beforeEach(async() => {
      navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateForward']);
      alertControllerSpy = jasmine.createSpyObj('AlertController', ['create']);
      
      await TestBed.configureTestingModule({
            declarations: [ClientesPage],
            providers: [
              { provide: NavController, useValue: navCtrlSpy },
              { provide: AlertController, useValue: alertControllerSpy },
              { provide: provideRouter([])}
            ],
          }).compileComponents();
  
          fixture = TestBed.createComponent(ClientesPage);
          component = fixture.componentInstance;
          fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
