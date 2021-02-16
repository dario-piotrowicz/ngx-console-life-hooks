import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Observable, of } from 'rxjs';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public currentlyInHome: Observable<boolean[]> = of([true]);

  constructor(router: Router) {
    this.currentlyInHome = router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      map((endEvent: NavigationEnd) => [
        endEvent.url === '/' || endEvent.url === '',
      ])
    );
  }
}
