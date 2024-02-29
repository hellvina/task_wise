import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title";
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
    selector: 'app-create',
    standalone: true,
    templateUrl: './create.html',
    styleUrl: './create.css',
    imports: [TitleComponent, FormsModule, HttpClientModule]
})
export class Create {
    name: string = "";
    description: string = "";
    user_id: string = "";

    constructor(private http: HttpClient, private router: Router) {}

    token = localStorage.getItem('token');

    helper = new JwtHelperService().decodeToken(this.token as string);

    onSubmit(): void {
        this.user_id = this.helper.sub

        const tokenData = {
            name: this.name,
            description: this.description,
            user_id: this.user_id,
            status: 'pending'
        }
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
        const url = 'http://localhost:8000/api/tasks';

        this.http.post<any>(url, tokenData, { headers }).subscribe(
            response => {
                console.log('Response:', response);
                this.router.navigate(['dashboard'])
            },
            error => {
                console.error('Error:', error)
            }
        )
    }   

}
