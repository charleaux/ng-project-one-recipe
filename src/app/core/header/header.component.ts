import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private dataStorageService: DataStorageService,
    public authService: AuthService
  ) {}

  ngOnInit() {}

  onSaveData() {
    this.dataStorageService
      .storeRecipes()
      .subscribe(
        (response: Response) => console.log(response),
        error => console.log(error)
      );
  }

  onFetchData() {
    this.dataStorageService
      .getRecipes()
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}