import { Injectable } from '@angular/core';
import { Router, PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadStrategy implements PreloadingStrategy {
  constructor(private router: Router) {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const preloadFrom = route?.data?.preloadFrom;
    const currentUrl = this.router.url;
    if (preloadFrom && (preloadFrom === '*' || preloadFrom === currentUrl)) {
      return load();
    } else {
      return EMPTY;
    }
  }
}
