import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';
// import { provideRouter } from '@angular/router';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async() => {
    navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateForward']);
    alertControllerSpy = jasmine.createSpyObj('AlertController', ['create']);
    dataServiceSpy = jasmine.createSpyObj('DataService', ['createTables']);

    await TestBed.configureTestingModule({
      declarations: [RegistroPage],
      providers: [
        { provide: NavController, useValue: navCtrlSpy },
        { provide: AlertController, useValue: alertControllerSpy },
        { provide: DataService, useValue: dataServiceSpy}
        // { provide: provideRouter([])}
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia mostrar alerta si el nombre y apellido están vacíos', async () => {
    component.nombre = '';
    component.apellido = '';

    alertControllerSpy.create.and.returnValue(Promise.resolve({
      present: jasmine.createSpy('present'),
    } as any));

    await component.guardar();
    expect(alertControllerSpy.create).toHaveBeenCalledWith({
      header: 'Mensaje',
      message: 'Error: nombre y apellido vacios',
      buttons: ['OK'],
    });

  });

   
});

