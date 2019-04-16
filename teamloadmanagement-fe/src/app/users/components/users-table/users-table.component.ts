import { Component, OnInit } from '@angular/core';
import { User, Task } from '../../../shared/models';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.users.forEach(element => {
      element.tasks.forEach(task=>{
        task.prog = (task.estimate-task.remaining)*100/task.estimate;
      })
    });
  }

  users = [
    {
      name: "Aweqwe2", surname: "wfhh3heu23h",
      skills: [".net", "angular"],
      tasks: [
        { id: "rhfuehfu", title: "1defjejf", estimate: 13, progress: "in progress", remaining: 8, description: "hjjoijfjrejkfrenkcknfjenjenrf", prog:0 },
        { id: "rsdfsf", title: "gdrg", estimate: 30, progress: "in progress", remaining: 6, description: "fgdfdgfg", prog:0 }
      ]
    },
    {
      name: "Aweqwe2", surname: "wfhh3heu23h",
      skills: [".net", "angular"],
      tasks: [
        { id: "rhfuehfu", title: "1defjejf", estimate: 13, progress: "in progress", remaining: 8, description: "hjjoijfjrejkfrenkcknfjenjenrf", prog:"" }
      ]
    },
    {
      name: "Aweqwe2", surname: "wfhh3heu23h",
      skills: [".net", "angular"],
      tasks: [
        { id: "rhfuehfu", title: "1defjejf", estimate: 13, progress: "in progress", remaining: 8, description: "hjjoijfjrejkfrenkcknfjenjenrf", prog:"" }
      ]
    },
    {
      name: "Aweqwe2", surname: "wfhh3heu23h",
      skills: [".net", "angular"],
      tasks: [
        { id: "rhfuehfu", title: "1defjejf", estimate: 13, progress: "in progress", remaining: 8, description: "hjjoijfjrejkfrenkcknfjenjenrf", prog:"" }
      ]
    },
    {
      name: "Aweqwe2", surname: "wfhh3heu23h",
      skills: [".net", "angular"],
      tasks: [
        { id: "rhfuehfu", title: "1defjejf", estimate: 13, progress: "in progress", remaining: 8, description: "hjjoijfjrejkfrenkcknfjenjenrf", prog:"" }
      ]
    },
    {
      name: "Aweqwe2", surname: "wfhh3heu23h",
      skills: [".net", "angular"],
      tasks: [
        { id: "rhfuehfu", title: "1defjejf", estimate: 13, progress: "in progress", remaining: 8, description: "hjjoijfjrejkfrenkcknfjenjenrf", prog:"" }
      ]
    }
  ]

  displayedColumns: string[] = ['name', 'surname', 'skills', 'tasks'];
  dataSource = new MatTableDataSource(this.users);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
