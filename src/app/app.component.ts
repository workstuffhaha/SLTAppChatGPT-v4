import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LeftSidebarComponent, RouterOutlet, TopbarComponent, CommonModule]
})
export class AppComponent {
  showLayout: boolean = true;

  constructor(private router: Router) {
    // Watch for route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Hide layout on /login route
        this.showLayout = !['/login'].includes(event.urlAfterRedirects);
      });
  }
}
