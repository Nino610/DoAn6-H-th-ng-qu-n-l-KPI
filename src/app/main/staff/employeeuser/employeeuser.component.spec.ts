import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeuserComponent } from './employeeuser.component';

describe('EmployeeuserComponent', () => {
  let component: EmployeeuserComponent;
  let fixture: ComponentFixture<EmployeeuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
