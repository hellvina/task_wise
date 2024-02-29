import { Component } from '@angular/core';
import { TaskCardComponent } from '../../components/task-card/task-card';
import { NoTaskComponent } from '../../components/no-task/no-task';
import { HeaderComponent } from "../../components/header/header";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
    imports: [TaskCardComponent, NoTaskComponent, HeaderComponent, NgIf]
})
export class Dashboard {
  hasTasks = true
}
