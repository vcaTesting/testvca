import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholsalerorderComponent } from './wholsalerorder.component';

describe('WholsalerorderComponent', () => {
  let component: WholsalerorderComponent;
  let fixture: ComponentFixture<WholsalerorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholsalerorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WholsalerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
