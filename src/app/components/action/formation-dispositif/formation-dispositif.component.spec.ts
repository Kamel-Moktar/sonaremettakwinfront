import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationDispositifComponent } from './formation-dispositif.component';

describe('FormationDispositifComponent', () => {
  let component: FormationDispositifComponent;
  let fixture: ComponentFixture<FormationDispositifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationDispositifComponent]
    });
    fixture = TestBed.createComponent(FormationDispositifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
