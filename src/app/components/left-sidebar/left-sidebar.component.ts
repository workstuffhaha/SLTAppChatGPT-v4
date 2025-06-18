import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
  imports: [CommonModule]
})
export class LeftSidebarComponent {
  constructor(public router: Router) {}

  menuItems = [
    { label: 'Dashboard', route: '/dashboard' },
    {  label: 'My Tasks', route: '/tasks' },
    { label: 'My Team', route: '/team' },
    { label: 'Settings', route: '/settings' }
  ];
}
