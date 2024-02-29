import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCardComponent {
  @Input() name: string | undefined;
  @Input() content: string | undefined;
  completed = false
  opened = false

  confirmDelete() {
    confirm("Deletar?")
  }
  
  complete() {
    this.completed = !this.completed
  }
  
  open(){
    this.opened = !this.opened
  }
}