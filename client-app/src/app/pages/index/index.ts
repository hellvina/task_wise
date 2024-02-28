import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {

}
