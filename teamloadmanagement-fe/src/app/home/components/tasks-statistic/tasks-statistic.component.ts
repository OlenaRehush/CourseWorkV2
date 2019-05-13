import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from '../../../canvasjs.min';
import { Task, User } from '../../../shared/models';


@Component({
  selector: 'app-tasks-statistic',
  templateUrl: './tasks-statistic.component.html',
  styleUrls: ['./tasks-statistic.component.scss']
})
export class TasksStatisticComponent implements OnInit {

  constructor() { }

  @Input() tasks: Task[];
  @Input() users: User[];

  unassignedTasksLength: number;
  newTasks: number;
  completeTasks: number;

  ngOnInit() {
    this.unassignedTasksLength = this.tasks.filter(x => x.user == null).length;
    this.buildUnassignTasksChart();

    this.newTasks = this.tasks.filter(x => x.progress == "to do").length;
    this.buildNewTasksChart();

    this.completeTasks = this.tasks.filter(x => x.progress == "done").length;
    this.buildCompleteTasksChart();

    this.buildTechnologyChart();
  }

  buildUnassignTasksChart() {
    let unassignPercentage = (100 * this.unassignedTasksLength) / this.tasks.length;
    let assignPercentage = 100 - unassignPercentage;
    let chart = new CanvasJS.Chart("unassignChartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Unassigned tasks"
      },
      data: [{
        type: "doughnut",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>:{y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: unassignPercentage, name: "Unassigned tasks" },
          { y: assignPercentage, name: "Assigned Tasks" },
        ]
      }]
    });

    chart.render();
  }

  buildNewTasksChart() {
    let newPercentage = (100 * this.newTasks) / this.tasks.length;
    let otherPercentage = 100 - newPercentage;
    let chart = new CanvasJS.Chart("newTaskschartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "New tasks"
      },
      data: [{
        type: "doughnut",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>:{y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: newPercentage, name: "New tasks" },
          { y: otherPercentage, name: "Other Tasks" },
        ]
      }]
    });

    chart.render();
  }

  buildCompleteTasksChart() {
    let completePercentage = (100 * this.completeTasks) / this.tasks.length;
    let otherPercentage = 100 - completePercentage;
    let chart = new CanvasJS.Chart("completeTaskschartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Completed tasks"
      },
      data: [{
        type: "doughnut",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>:{y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: completePercentage, name: "Completed tasks" },
          { y: otherPercentage, name: "Other Tasks" },
        ]
      }]
    });

    chart.render();
  }

  buildTechnologyChart() {
    let technologyDictionary = [];

    this.users.forEach(u => u.skills.forEach(s => {
      if (technologyDictionary.find(x => x.name == s)) {
        technologyDictionary.find(x => x.name == s).count++;
      } else {
        technologyDictionary.push({ name: s, count: 1 });
      }
    }));

    let dataPoints = [];
    technologyDictionary.forEach(t => {
      dataPoints.push({ y: (100 * t.count) / technologyDictionary.length, name: t.name });
    });

    let chart = new CanvasJS.Chart("techChartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Technologies"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>:{y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: dataPoints
      }]
    });

    chart.render();
  }

}
