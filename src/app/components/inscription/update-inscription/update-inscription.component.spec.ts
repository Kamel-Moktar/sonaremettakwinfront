import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInscriptionComponent } from './update-inscription.component';

describe('UpdateInscriptionComponent', () => {
  let component: UpdateInscriptionComponent;
  let fixture: ComponentFixture<UpdateInscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInscriptionComponent]
    });
    fixture = TestBed.createComponent(UpdateInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
