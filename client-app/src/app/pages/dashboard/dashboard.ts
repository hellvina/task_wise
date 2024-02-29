import { Component } from '@angular/core';
import { TaskCardComponent } from '../../components/task-card/task-card';
import { NoTaskComponent } from '../../components/no-task/no-task';
import { HeaderComponent } from "../../components/header/header";
import { NgFor, NgIf } from '@angular/common';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingComponent } from "../../components/loading/loading";
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
    imports: [TaskCardComponent, NoTaskComponent, HeaderComponent, NgIf, HttpClientModule, NgFor, LoadingComponent]
})
export class Dashboard {
  hasTasks = false
  isLoading = true

  tasks: any = []

  ngOnInit(): void {
    this.fetchTasks();
  }

  addTaskRoute(): void {
    this.router.navigate(['create'])
  }

  constructor(private http: HttpClient, private router: Router) {}

  confirmDelete(id: number, index: number) {
    if(confirm('Deletar essa tarefa?') === true){
      this.tasks.splice(index, 1)

      const token = localStorage.getItem('token');
      
      const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
      });
      const url = `http://localhost:8000/api/tasks/${id}`

      this.http.delete<any>(url, { headers }).subscribe(
          response => {
              console.log('Response:', response);

              if (this.tasks.length > 0) {
                this.hasTasks = true
              }
          },
          error => {
            console.error('Error deleting task:', error);
          }
      )
    }
  }

  edit(index: number) {
    this.router.navigate(['/edit', index])
  }

  fetchTasks(): void {
    const token = localStorage.getItem('token');
    const helper = new JwtHelperService().decodeToken(token as string);
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });

    const url = `http://localhost:8000/api/tasks?user_id=${helper.sub}`

    this.http.get<any>(url, { headers }).subscribe(
        response => {
            console.log('Response:', response);
            this.tasks = response;

            if (this.tasks.length > 0) {
              this.hasTasks = true
            }
          this.isLoading = false
        },
        error => {
          if (error.status === 401) {
            this.router.navigate(['login'])
          }
          console.error('Error fetching tasks:', error);
        }
    )
  }

  updateStatus(id: number, index: number): void {
      const token = localStorage.getItem('token');
      
      const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
      });
      const url = `http://localhost:8000/api/tasks/${id}`
      
      let data = {}

      if (this.tasks[index].status === 'pending') {
        data = { 'status': 'done' }
        this.tasks[index].status = 'done'
      } else {
        data = { 'status': 'pending' }
        this.tasks[index].status = 'pending'
      } 

      this.http.put<any>(url, data, { headers }).subscribe(
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
