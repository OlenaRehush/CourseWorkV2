import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User, Task } from '../../../shared/models';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UsersTableComponent implements OnInit {

  @Input() users;
  expandedElement: User | null;
  columnsToDisplay: string[] = ['name', 'skills', 'tasks'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource(this.users);

     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
    // this.users.forEach(element => {
    //   element.tasks.forEach(task=>{
    //     task.prog = (task.estimate-task.remaining)*100/task.estimate;
    //   })
    // });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
