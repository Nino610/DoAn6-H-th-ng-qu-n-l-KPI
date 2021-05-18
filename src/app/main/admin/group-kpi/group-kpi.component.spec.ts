import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupKPIComponent } from './group-kpi.component';

describe('GroupKPIComponent', () => {
  let component: GroupKPIComponent;
  let fixture: ComponentFixture<GroupKPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupKPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupKPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
