import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClearConsoleGuard implements CanActivate {
  canActivate() {
    return this.clearConsole();
  }

  private clearConsole(): true {
    timer().subscribe(() => console.clear());
    return true;
  }
}
