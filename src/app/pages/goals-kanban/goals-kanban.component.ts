import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goals-kanban',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goals-kanban.component.html',
  styleUrls: ['./goals-kanban.component.scss']
})
export class GoalsKanbanComponent {
  goals = [
    {
      title: 'Market Expansion Strategy',
      priority: 'Market Leadership',
      region: 'Great Britain',
      flag: 'assets/images/flag-uk.png',
      department: 'Digital Technology',
      category: 'Market Expansion',
      impact: '$ 50M CAD',
      status: 'Medium',
      progress: 70
    },
    {
      title: 'Market Expansion Strategy',
      priority: 'Market Leadership',
      region: 'India',
      flag: 'assets/images/flag-india.png',
      department: 'Digital Technology',
      category: 'Market Expansion',
      impact: '$ 50M CAD',
      status: 'High',
      progress: 70
    },
    {
      title: 'Market Expansion Strategy',
      priority: 'Market Leadership',
      region: 'ANZ',
      flag: 'assets/images/flag-anz.png',
      department: 'Digital Technology',
      category: 'Market Expansion',
      impact: '$ 50M CAD',
      status: 'Low',
      progress: 70
    }
  ];

  getUniqueRegions(): string[] {
    return [...new Set(this.goals.map(goal => goal.region))];
  }

  getGoalsByRegion(region: string) {
    return this.goals.filter(goal => goal.region === region);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'High': return 'high';
      case 'Medium': return 'medium';
      case 'Low': return 'low';
      default: return '';
    }
  }
}
