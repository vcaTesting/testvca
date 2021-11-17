import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdbaldetailComponent } from './prodbaldetail.component';

describe('ProdbaldetailComponent', () => {
  let component: ProdbaldetailComponent;
  let fixture: ComponentFixture<ProdbaldetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdbaldetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdbaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
