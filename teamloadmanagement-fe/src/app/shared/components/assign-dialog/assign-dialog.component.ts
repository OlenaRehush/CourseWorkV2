import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User, Task } from '../../models';
import { UsersService } from '../../../users/services/users.service';
import { TasksService } from '../../../tasks/services/tasks.service';

@Component({
  selector: 'app-assign-dialog',
  templateUrl: './assign-dialog.component.html',
  styleUrls: ['./assign-dialog.component.scss']
})
export class AssignDialogComponent implements OnInit {

  type: string;
  users: User[];
  tasks: Task[];
  selectedValue: any;
  selectedOptions: any[] = [];

  constructor(public dialogRef: MatDialogRef<AssignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public usersService: UsersService,
    public tasksService: TasksService) { 
      this.type = this.data.type;
    }

  ngOnInit() {
    if(this.type=="user"){
      this.usersService.getUsers().subscribe(result=>{
        this.users = result;
      })
    }else{
      this.tasksService.getTasks().subscribe(result=>{
        this.tasks = result;
      })
    }
  }

  select(value){
    this.selectedValue = value.id;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
