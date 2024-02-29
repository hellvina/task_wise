import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCardComponent {
  completed = false

  complete() {
    this.completed = !this.completed
  }
  opened = false
  open(){
    this.opened = !this.opened
  }
}