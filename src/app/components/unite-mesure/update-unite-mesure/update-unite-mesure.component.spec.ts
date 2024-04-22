import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUniteMesureComponent } from './update-unite-mesure.component';

describe('UpdateUniteMesureComponent', () => {
  let component: UpdateUniteMesureComponent;
  let fixture: ComponentFixture<UpdateUniteMesureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUniteMesureComponent]
    });
    fixture = TestBed.createComponent(UpdateUniteMesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
