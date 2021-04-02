import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumDataComponent } from './sum-data.component';

describe('SumDataComponent', () => {
  let component: SumDataComponent;
  let fixture: ComponentFixture<SumDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
