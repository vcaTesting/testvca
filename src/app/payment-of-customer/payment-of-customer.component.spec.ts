import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOfCustomerComponent } from './payment-of-customer.component';

describe('PaymentOfCustomerComponent', () => {
  let component: PaymentOfCustomerComponent;
  let fixture: ComponentFixture<PaymentOfCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentOfCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOfCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
