import { Component, OnInit } from '@angular/core';
import { Task } from '../../../shared/models';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

  tasks: Array<Task> = [];

  constructor(public tasksService: TasksService) {
  }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    })
  }

}
