import { Component, OnInit } from '@angular/core';
import { TitleComponent } from "../../components/title/title";
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit',
    standalone: true,
    templateUrl: './edit.html',
    styleUrl: './edit.css',
    imports: [TitleComponent, FormsModule, HttpClientModule]
})
export class Edit implements OnInit {
    taskId: number | undefined;
    task: any = {};
    
    constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) {}

    return() {
        this.router.navigate(['dashboard'])
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.taskId = +params['id'];
            this.fetchTask();
        });
    }
    
    fetchTask() {

        const url = `http://localhost:8000/api/tasks/${this.taskId}`
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        this.http.get(url, { headers }).subscribe(
          (data: any) => {
            this.task = data;
          },
          error => {
            console.error('Error fetching task:', error);
          }
        );
      }

    onSubmit(): void {
        const taskData = {
            name: this.task.name,
            description: this.task.description
        };

        const url = `http://localhost:8000/api/tasks/${this.taskId}`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        this.http.put<any>(url,taskData, { headers }).subscribe(
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
