import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProformaComponent } from './update-proforma.component';

describe('UpdateProformaComponent', () => {
  let component: UpdateProformaComponent;
  let fixture: ComponentFixture<UpdateProformaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProformaComponent]
    });
    fixture = TestBed.createComponent(UpdateProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
