import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button";
import { TitleComponent } from "../../components/title/title";
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.html',
    styleUrl: './register.css',
    imports: [ButtonComponent, TitleComponent, FormsModule, HttpClientModule]
})
export class Register {
    name: string = "";
    email: string = "";
    password: string = "";

    constructor(private http: HttpClient, private router: Router) {}

    onSubmit(): void {
        const formData = {
            name: this.name,
            email: this.email,
            password: this.password
        };

        this.http.post<any>('http://localhost:8000/api/user/signup', formData).subscribe(
            response => {
                localStorage.setItem('token', response.token)
                console.log('Response:', response);
                this.router.navigate([''])
            },
            error => {
                console.error('Error:', error)
            }
        )
    }
}
