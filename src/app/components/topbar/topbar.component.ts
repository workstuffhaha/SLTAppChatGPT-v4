import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  constructor(public router: Router) {}

  isRegionalGoal(): boolean {
    return this.router.url.includes('regional-goal');
  }

  get heading(): string {
    if (this.isRegionalGoal()) return 'Create new Goal';
    const path = this.router.url.split('/')[1];
    return path=='dashboard' ? 'Goals Dashboard' : 'Create New Goal';
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
} 
