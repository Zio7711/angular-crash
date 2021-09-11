import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.sass'],
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;
  @Output() onDeleteTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  z;

  onDelete(task) {
    this.onDeleteTask.emit(task);
  }
}
