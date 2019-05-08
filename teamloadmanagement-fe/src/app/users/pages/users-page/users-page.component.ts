import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    this.usersService.getUsers().subscribe(result=>{
      this.users = result;
    })
  }

}
