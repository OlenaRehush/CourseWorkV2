import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  task;
  progressValue;

  constructor(private route: ActivatedRoute,
    public tasksService: TasksService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let taskId = params['id'];

      this.tasksService.getTask(taskId).subscribe(result => {
        this.task = result;
        this.progressValue = Math.round((this.task.estimate - this.task.remaining) * 100 / this.task.estimate);
      })
    });
  }

}
