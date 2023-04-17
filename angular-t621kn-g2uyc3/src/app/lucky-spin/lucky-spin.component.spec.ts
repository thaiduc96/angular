import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckySpinComponent } from './lucky-spin.component';

describe('LuckySpinComponent', () => {
  let component: LuckySpinComponent;
  let fixture: ComponentFixture<LuckySpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckySpinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuckySpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
