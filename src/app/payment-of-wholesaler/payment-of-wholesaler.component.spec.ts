import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOfWholesalerComponent } from './payment-of-wholesaler.component';

describe('PaymentOfWholesalerComponent', () => {
  let component: PaymentOfWholesalerComponent;
  let fixture: ComponentFixture<PaymentOfWholesalerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentOfWholesalerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOfWholesalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
