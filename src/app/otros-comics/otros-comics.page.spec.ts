import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtrosComicsPage } from './otros-comics.page';

describe('OtrosComicsPage', () => {
  let component: OtrosComicsPage;
  let fixture: ComponentFixture<OtrosComicsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosComicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
