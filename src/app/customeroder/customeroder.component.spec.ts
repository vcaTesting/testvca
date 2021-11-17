import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeroderComponent } from './customeroder.component';

describe('CustomeroderComponent', () => {
  let component: CustomeroderComponent;
  let fixture: ComponentFixture<CustomeroderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeroderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeroderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
