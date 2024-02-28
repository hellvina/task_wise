import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponent {
  @Input() label: string | undefined
  @Input() action: string | undefined
  @Input() page: string | undefined
  
  router: Router = new Router

  @HostListener('click') onClick() {
    if (this.action == 'link') {
      this.router.navigate([this.page])
    }
  } 
}
