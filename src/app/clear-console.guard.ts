import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClearConsoleGuard implements CanActivate, CanLoad {
  canActivate() {
    return this.clearConsole();
  }

  canLoad() {
    return this.clearConsole();
  }

  private clearConsole(): true {
    timer().subscribe(() => console.clear());
    return true;
  }
}
