import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goals-table',
  templateUrl: './goals-table.component.html',
  styleUrls: ['./goals-table.component.scss'],
  imports:[NgClass, CommonModule, FormsModule]
})
export class GoalsTableComponent {
  masterSelected: boolean = false;

  goals = [
    {
      title: 'Market Expansion Strategy',
      priority: 'Market Leadership',
      region: 'Great Britain',
      flag: 'https://cdn.britannica.com/25/4825-050-977D8C5E/Flag-United-Kingdom.jpg',
      department: 'Digital Technology',
      category: 'Market Expansion',
      impact: '$ 50M CAD',
      status: 'Medium',
      progress: 70,
      selected: false,
      showMenu: false
    },
    {
      title: 'Market Expansion Strategy',
      priority: 'Market Leadership',
      region: 'India',
      flag: 'https://media.magflags.net/media/catalog/product/cache/bbfe81b5dc693f3f88259968def067fa/I/N/IN-1x1.5_7.png',
      department: 'Digital Technology',
      category: 'Market Expansion',
      impact: '$ 50M CAD',
      status: 'High',
      progress: 70,
      selected: false,
      showMenu: false
    },
    {
      title: 'Market Expansion Strategy',
      priority: 'Market Leadership',
      region: 'ANZ',
      flag: 'https://cdn.britannica.com/78/6078-050-18D5DEFE/Flag-Australia.jpg',
      department: 'Digital Technology',
      category: 'Market Expansion',
      impact: '$ 50M CAD',
      status: 'Low',
      progress: 70,
      selected: false,
      showMenu: false
    }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'High': return 'status-high';
      case 'Medium': return 'status-medium';
      case 'Low': return 'status-low';
      default: return '';
    }
  }

  toggleSelectAll() {
    this.goals.forEach(goal => goal.selected = this.masterSelected);
  }

  checkMasterSelected() {
    this.masterSelected = this.goals.every(goal => goal.selected);
  }

  toggleMenu(goal: any) {
  goal.showMenu = !goal.showMenu;
}

editGoal(goal: any) {
  console.log('Editing goal:', goal);
  // Add actual logic here
}

deleteGoal(goal: any) {
  console.log('Deleting goal:', goal);
  // Add actual logic here
}



}
