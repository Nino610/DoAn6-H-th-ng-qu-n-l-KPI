import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BieudosongComponent } from './bieudosong.component';

describe('BieudosongComponent', () => {
  let component: BieudosongComponent;
  let fixture: ComponentFixture<BieudosongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BieudosongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BieudosongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
