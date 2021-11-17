import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerOrderDetailComponent } from './wholesaler-order-detail.component';

describe('WholesalerOrderDetailComponent', () => {
  let component: WholesalerOrderDetailComponent;
  let fixture: ComponentFixture<WholesalerOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholesalerOrderDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
