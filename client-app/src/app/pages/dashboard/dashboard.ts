import { Component } from '@angular/core';
import { TaskCardComponent } from '../../components/task-card/task-card';
import { NoTaskComponent } from '../../components/no-task/no-task';
import { HeaderComponent } from "../../components/header/header";
import { NgFor, NgIf } from '@angular/common';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
    imports: [TaskCardComponent, NoTaskComponent, HeaderComponent, NgIf, HttpClientModule, NgFor]
})
export class Dashboard {
  hasTasks = false

  tasks: any = []

  ngOnInit(): void {
    this.fetchTasks();
  }

  constructor(private http: HttpClient, private router: Router) {}

  fetchTasks(): void {
    const token = localStorage.getItem('token');
    
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    const url = 'http://localhost:8000/api/tasks'

    this.http.get<any>(url, { headers }).subscribe(
        response => {
            console.log('Response:', response);
            this.tasks = response;

            if (this.tasks.length > 0) {
              this.hasTasks = true
            }
        },
        error => {
          console.error('Error fetching tasks:', error);
        }
    )
  }

}
