import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoalsTableComponent } from '../goals-table/goals-table.component';
import { GoalsKanbanComponent } from '../goals-kanban/goals-kanban.component';
import { GoalsTimelineComponent } from '../goals-timeline/goals-timeline.component';
interface Goal {
  priority: 'Low' | 'Medium' | 'High';
  owner: string;
  title: string;
  impact: string;
  region: string;
  showMenu?: boolean; // <-- Add this
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, GoalsTableComponent, GoalsKanbanComponent, GoalsTimelineComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  currentView: 'kanban' | 'table' | 'timeline' = 'kanban'; // default view

  metrics = [
    { title: 'Goals Completed', value: 24, change: '+5%' },
    { title: 'Goals In Progress', value: 12, change: '+10%' },
    { title: 'New Goals', value: 8, change: '-12%' },
    { title: 'Archived Goals', value: 5, change: '+12%' }
  ];

  goals: Goal[] = [
    { priority: 'Low', owner: 'Sarah Johnson', title: 'ANZ Market Expansion Strategy - Drive operations', impact: '50M CAD', region: 'ANZ' },
    { priority: 'Medium', owner: 'Sarah Johnson', title: 'Digital Platform Modernization', impact: '50M CAD', region: 'APAC' },
    { priority: 'High', owner: 'Sarah Johnson', title: 'Supply Chain Optimization Initiative', impact: '50M CAD', region: 'EUROPE' },
    { priority: 'Low', owner: 'Sarah Johnson', title: 'ANZ Market Expansion Strategy - Drive operations', impact: '50M CAD', region: 'INDIA' },
    { priority: 'Medium', owner: 'Sarah Johnson', title: 'ANZ Market Expansion Strategy - Drive operations', impact: '50M CAD', region: 'NORTH AMERICA' }
  ];

  setView(view: 'kanban' | 'table' | 'timeline') {
    this.currentView = view;
  }

  getRegions(): string[] {
    return [...new Set(this.goals.map(goal => goal.region))];
  }

  goalsByRegion(region: string): Goal[] {
    return this.goals.filter(goal => goal.region === region);
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'High': return '#ef4444';
      case 'Medium': return '#fbbf24';
      default: return '#60a5fa';
    }
  }
}

