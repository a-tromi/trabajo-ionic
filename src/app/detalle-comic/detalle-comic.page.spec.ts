import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleComicPage } from './detalle-comic.page';

describe('DetalleComicPage', () => {
  let component: DetalleComicPage;
  let fixture: ComponentFixture<DetalleComicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleComicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
