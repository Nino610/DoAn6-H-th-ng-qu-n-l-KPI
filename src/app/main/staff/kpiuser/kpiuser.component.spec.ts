import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiuserComponent } from './kpiuser.component';

describe('KpiuserComponent', () => {
  let component: KpiuserComponent;
  let fixture: ComponentFixture<KpiuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
