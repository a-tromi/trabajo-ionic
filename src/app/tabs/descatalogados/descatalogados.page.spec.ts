import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescatalogadosPage } from './descatalogados.page';

describe('DescatalogadosPage', () => {
  let component: DescatalogadosPage;
  let fixture: ComponentFixture<DescatalogadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DescatalogadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
