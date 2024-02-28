import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button';
import { TitleComponent } from '../../components/title/title';
import { SloganComponent } from '../../components/slogan/slogan';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ButtonComponent, TitleComponent, SloganComponent],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {

}
