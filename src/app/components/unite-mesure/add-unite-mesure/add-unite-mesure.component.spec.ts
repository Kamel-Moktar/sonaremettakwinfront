import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniteMesureComponent } from './add-unite-mesure.component';

describe('AddUniteMesureComponent', () => {
  let component: AddUniteMesureComponent;
  let fixture: ComponentFixture<AddUniteMesureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUniteMesureComponent]
    });
    fixture = TestBed.createComponent(AddUniteMesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
