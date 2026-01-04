import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public showTitle: string = '';
  public animateIn: boolean = false;
  public animateOut: boolean = false;
 public currentPageName: string= '';

  public pages = [
    { title: 'Home', url: '/home' },
    { title: 'Projects', url: '/projects' },
    // { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ];
  public isMenuOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.updateCurrentPageName();
      // close mobile menu whenever route changes
      this.isMenuOpen = false;
    });
    this.updateCurrentPageName(); // Initial update
    this.updateShowTitle();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigate(url: string) {
    this.isMenuOpen = false;
    // use router navigate to ensure router events fire
    this.router.navigateByUrl(url);
  }

  updateShowTitle() {
    const titles = ['Angular Enthusiast', 'Frontend Developer'];
    // initialize title
    this.showTitle = titles[0];
    let idx = 0;

    const outDuration = 220; // ms - fade out duration
    const inDuration = 420; // ms - fade in duration
    const period = 1700; // total interval

    setInterval(() => {
      // start fade out
      this.animateOut = true;

      setTimeout(() => {
        // finished fade out, swap text
        this.animateOut = false;
        idx = (idx + 1) % titles.length;
        this.showTitle = titles[idx];

        // start fade in
        this.animateIn = true;
        setTimeout(() => this.animateIn = false, inDuration);
      }, outDuration);
    }, period);
  }

  updateCurrentPageName() {
    const currentRoute = this.router.url;
    const currentPage = this.pages.find(page => page.url === currentRoute);
    this.currentPageName = currentPage ? currentPage.title : 'My Portfolio';
  }
}
