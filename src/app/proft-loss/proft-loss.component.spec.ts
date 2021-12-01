import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProftLossComponent } from './proft-loss.component';

describe('ProftLossComponent', () => {
  let component: ProftLossComponent;
  let fixture: ComponentFixture<ProftLossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProftLossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProftLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
