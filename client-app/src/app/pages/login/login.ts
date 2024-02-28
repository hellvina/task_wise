import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title";
import { InputComponent } from "../../components/input/input";
import { ButtonComponent } from "../../components/button/button";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.html',
    styleUrl: './login.css',
    imports: [TitleComponent, InputComponent, ButtonComponent]
})
export class Login {

}
