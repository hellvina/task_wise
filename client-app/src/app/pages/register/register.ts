import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button";
import { InputComponent } from "../../components/input/input";
import { TitleComponent } from "../../components/title/title";

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.html',
    styleUrl: './register.css',
    imports: [ButtonComponent, InputComponent, TitleComponent]
})
export class Register {

}
