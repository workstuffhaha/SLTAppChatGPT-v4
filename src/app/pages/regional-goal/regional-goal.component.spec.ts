import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalGoalComponent } from './regional-goal.component';

describe('RegionalGoalComponent', () => {
  let component: RegionalGoalComponent;
  let fixture: ComponentFixture<RegionalGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionalGoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionalGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
