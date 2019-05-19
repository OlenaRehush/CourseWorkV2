import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssignDialogComponent } from '../../../shared/components/assign-dialog/assign-dialog.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users;

  constructor(public usersService: UsersService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers().subscribe(result => {
      this.users = result;
    })
  }

  assignTask($event) {
    const dialogRef = this.dialog.open(AssignDialogComponent, {
      width: '500px',
      data: { type: "task" }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
