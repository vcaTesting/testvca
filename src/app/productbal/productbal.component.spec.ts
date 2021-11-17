import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbalComponent } from './productbal.component';

describe('ProductbalComponent', () => {
  let component: ProductbalComponent;
  let fixture: ComponentFixture<ProductbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductbalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
