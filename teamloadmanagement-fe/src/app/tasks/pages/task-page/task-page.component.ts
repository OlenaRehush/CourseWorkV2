import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { AssignDialogComponent } from '../../../shared/components/assign-dialog/assign-dialog.component';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  task;
  progressValue;

  constructor(private route: ActivatedRoute,
    public tasksService: TasksService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let taskId = params['id'];

      this.tasksService.getTask(taskId).subscribe(result => {
        this.task = result;
        document.getElementById('taskTitle').innerText = this.task.title;
        this.progressValue = Math.round((this.task.estimate - this.task.remaining) * 100 / this.task.estimate);
      })
    });
  }

  update(){
    this.tasksService.updateTask(this.task).subscribe(result=>{
      this.snackBar.open("Task updated", "Ok", {
        duration: 2000,
      });
    })
  }

  assign() {
    const dialogRef = this.dialog.open(AssignDialogComponent, {
      width: '500px',
      data: { type: "user" }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
