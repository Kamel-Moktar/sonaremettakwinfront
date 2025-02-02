import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPriceComponent } from './add-price.component';

describe('AddPriceComponent', () => {
  let component: AddPriceComponent;
  let fixture: ComponentFixture<AddPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPriceComponent]
    });
    fixture = TestBed.createComponent(AddPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
