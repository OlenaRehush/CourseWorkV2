import { Component, OnInit } from '@angular/core';
import { Task } from '../../../shared/models';
import { TasksService } from '../../services/tasks.service';
import { AppService } from '../../../shared/services/app.service';
import { UsersService } from '../../../users/services/users.service';
import { MatDialog } from '@angular/material';
import { AssignDialogComponent } from '../../../shared/components/assign-dialog/assign-dialog.component';
import { MatSnackBar } from '@angular/material';

enum TaskState {
  "To do",
  "Im progress",
  "Done"
}

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

  tasks: Array<Task> = [];

  users: any;
  selectedUsers: any;
  state: any;

  constructor(public tasksService: TasksService,
    public usersService: UsersService,
    public appService: AppService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loadTasks();
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers().subscribe(result => {
      this.users = result;
    })
  }

  loadTasks() {
    this.tasksService.getTasks().subscribe(tasks => {
      this.tasks = tasks
      //filter tasks
      // .filter(t=>);
    });
  }

  delete($event) {
    if ($event) {
      this.tasksService.deleteTask($event.id).subscribe(result => {
        this.snackBar.open("Task deleted", "Ok", {
          duration: 2000,
        });
        this.loadTasks();
      });
    }
  }

  assing($event) {
    const dialogRef = this.dialog.open(AssignDialogComponent, {
      width: '500px',
      data: { type: "user" }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


}
