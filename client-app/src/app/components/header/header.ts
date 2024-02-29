import { Component } from '@angular/core';
import { TitleComponent } from "../title/title";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.html',
    styleUrl: './header.css',
    imports: [TitleComponent]
})
export class HeaderComponent {
  name: string = "username"
}
