import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { User, Task } from '../../../shared/models';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UsersTableComponent implements OnInit {

  @Input() users;
  expandedElement: User | null;
  columnsToDisplay: string[] = ['name', 'skills', 'tasks','actions'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Output() public assignTaskEvent = new EventEmitter();


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

  getTasksLength(tasks: Task[], taskProgress: string) {
    if (tasks.length) {
      let filteredTasks = tasks.filter(x => x.progress == taskProgress);
      if (filteredTasks.length) {
        return filteredTasks.length;
      } else return 0;
    } else return 0;
  }

  assign(element){
    this.assignTaskEvent.emit(element);
  }

}
