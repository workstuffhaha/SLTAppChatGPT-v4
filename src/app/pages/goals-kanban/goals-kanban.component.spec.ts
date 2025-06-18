import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsKanbanComponent } from './goals-kanban.component';

describe('GoalsKanbanComponent', () => {
  let component: GoalsKanbanComponent;
  let fixture: ComponentFixture<GoalsKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsKanbanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
