import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/models';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(public usersService: UsersService,
    private route: ActivatedRoute) { }

  user: User;

  ngOnInit() {
    this.route.params.subscribe(params => {
      let userId = params['id'];

      this.usersService.getUser(userId).subscribe(result=>{
        this.user = result;
      })
    });
  }

}
