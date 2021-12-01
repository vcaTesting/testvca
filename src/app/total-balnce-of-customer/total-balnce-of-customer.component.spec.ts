import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBalnceOfCustomerComponent } from './total-balnce-of-customer.component';

describe('TotalBalnceOfCustomerComponent', () => {
  let component: TotalBalnceOfCustomerComponent;
  let fixture: ComponentFixture<TotalBalnceOfCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalBalnceOfCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalBalnceOfCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
