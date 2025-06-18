import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goals-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goals-timeline.component.html',
  styleUrls: ['./goals-timeline.component.scss']
})
export class GoalsTimelineComponent {

  months = [
  { name: 'JAN', dates: [2, 9, 16, 23] },
  { name: 'FEB', dates: [1, 8, 15, 22] },
  { name: 'MAR', dates: [1, 8, 15, 22] },
  { name: 'APR', dates: [5, 12, 19, 26] },
  { name: 'MAY', dates: [3, 10, 17, 24] },
  { name: 'JUN', dates: [7, 14, 21, 28] }
];

  goals = [
    {
      title: 'Market Expansion Strategy',
      priority: 'Market Leadership',
      region: 'Great Britain',
      department: 'Digital Technology',
      category: 'Market Expansion',
      impact: '$ 50M CAD',
      status: 'In Progress',
      owner: 'Sarah Johnson',
      labelColor: '#3B82EC', // Blue
      start: '2025-01-15',
      end: '2025-02-28'
    },
    {
      title: 'Market Expansion Strategy',
      priority: 'Market Leadership',
      region: 'India',
      department: 'Digital Technology',
      category: 'Market Expansion',
      impact: '$ 50M CAD',
      status: 'Completed',
      owner: 'Sarah Johnson',
      labelColor: '#78C552', // Green
      start: '2025-02-01',
      end: '2025-03-15'
    },
    {
      title: 'Market Expansion Strategy',
      priority: 'Market Leadership',
      region: 'ANZ',
      department: 'Digital Technology',
      category: 'Market Expansion',
      impact: '$ 50M CAD',
      status: 'To Do',
      owner: 'Sarah Johnson',
      labelColor: '#E53033', // Red
      start: '2025-04-01',
      end: '2025-05-15'
    }
  ];

  getStartOffset(dateStr: string): number {
  const startDate = new Date('2025-01-01');
  const date = new Date(dateStr);
  const diff = (date.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  return (diff / 210) * 100; // assuming timeline spans ~7 months (Jan–Jul)
}

getDurationWidth(startStr: string, endStr: string): number {
  const start = new Date(startStr);
  const end = new Date(endStr);
  const days = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
  return (days / 210) * 100;
}

}
