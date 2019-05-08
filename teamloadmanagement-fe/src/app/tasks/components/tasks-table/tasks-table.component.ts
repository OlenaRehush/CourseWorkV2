import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Task } from '../../../shared/models';
import {animate, state, style, transition, trigger} from '@angular/animations';




@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TasksTableComponent implements OnInit {

  columnsToDisplay: string[] = ['title', 'estimate', 'progress', 'user', 'actions'];
  dataSource: MatTableDataSource<Task>;
  expandedElement: Task | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() public tasks;

  @Output() public deleteTaskEvent = new EventEmitter();
  @Output() public assignTaskEvent = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tasks);

     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(element){
    this.deleteTaskEvent.emit(element);
  }

  assign(element){
    this.assignTaskEvent.emit(element);
  }

  edit(element){

  }
}
