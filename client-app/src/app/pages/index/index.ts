import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button';
import { TitleComponent } from '../../components/title/title';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ButtonComponent, TitleComponent],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {

}
