import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title";
import { InputComponent } from "../../components/input/input";
import { ButtonComponent } from "../../components/button/button";
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.html',
    styleUrl: './login.css',
    imports: [TitleComponent, InputComponent, ButtonComponent, FormsModule, HttpClientModule]
})
export class Login {
    email: string = "";
    password: string = "";

    constructor(private http: HttpClient, private router: Router) {}

    onSubmit() {
        const formData = {
            email: this.email,
            password: this.password
        };
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        const url = 'http://localhost:8000/api/user/signin'

        this.http.post<any>(url, formData, { headers }).subscribe(
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
