import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProformaComponent } from './add-proforma.component';

describe('AddProformaComponent', () => {
  let component: AddProformaComponent;
  let fixture: ComponentFixture<AddProformaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProformaComponent]
    });
    fixture = TestBed.createComponent(AddProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
