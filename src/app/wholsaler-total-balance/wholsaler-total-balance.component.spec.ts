import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholsalerTotalBalanceComponent } from './wholsaler-total-balance.component';

describe('WholsalerTotalBalanceComponent', () => {
  let component: WholsalerTotalBalanceComponent;
  let fixture: ComponentFixture<WholsalerTotalBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholsalerTotalBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WholsalerTotalBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
