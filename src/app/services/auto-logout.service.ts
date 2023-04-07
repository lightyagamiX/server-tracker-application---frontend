import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService {
  public timer: any;

  constructor(private router: Router, private ts: TokenStorageService) {}

  startTimer(duration: number) {
    this.timer = setTimeout(() => {
      this.ts.signOut();
    }, duration);
  }

  resetTimer() {
    clearTimeout(this.timer);
    this.startTimer(30 * 60 * 1000); // 30 minutes
  }

  showLogoutConfirmation() {
    // Show logout confirmation modal
  }

  logout() {
    this.router.navigate(['/login']);
  }
}

