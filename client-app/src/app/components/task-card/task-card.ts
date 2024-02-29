import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() taskId: number | undefined;
  @Input() status: string | undefined


  completed = false
  opened = false
  index!: number
  
  @Output() deleteTaskClicked: EventEmitter<number> = new EventEmitter()
  @Output() editClicked: EventEmitter<number> = new EventEmitter()
  @Output() statusClicked: EventEmitter<number> = new EventEmitter()

  ngOnInit(): void {
    if (this.status === 'done') {
      this.completed = true
    }

    if (this.status === 'pending') {
      this.completed = false
    }
  }

  edit() {
    this.editClicked.emit(this.taskId)
  }

  confirmDelete() {
      this.deleteTaskClicked.emit(this.taskId)
  }

  complete(){
    this.completed = !this.completed
    this.statusClicked.emit(this.taskId)
  }
  
  open(){
    this.opened = !this.opened
  }
}