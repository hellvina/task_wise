import { Component } from '@angular/core';
import { TitleComponent } from "../title/title";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.html',
    styleUrl: './header.css',
    imports: [TitleComponent, NgIf]
})
export class HeaderComponent {
  name: string = "username"

  router = new Router
  settingOpened: boolean = false;

  token = localStorage.getItem('token')
  helper = new JwtHelperService().decodeToken(this.token as string);

  ngOnInit(): void {
      this.name = this.helper.name
  }

  logout() {
    this.router.navigate([''])
  }

  close(){
    this.settingOpened = false
  }
  settings() {
    this.settingOpened = true
  }
}
