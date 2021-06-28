import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumdatauserComponent } from './sumdatauser.component';

describe('SumdatauserComponent', () => {
  let component: SumdatauserComponent;
  let fixture: ComponentFixture<SumdatauserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumdatauserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumdatauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
