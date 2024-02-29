import { Component } from '@angular/core';
import { TitleComponent } from "../title/title";
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.html',
    styleUrl: './header.css',
    imports: [TitleComponent]
})
export class HeaderComponent {
  name: string = "username"

  token = localStorage.getItem('token')
  helper = new JwtHelperService().decodeToken(this.token as string);

  ngOnInit(): void {
      this.name = this.helper.name
  }
}
