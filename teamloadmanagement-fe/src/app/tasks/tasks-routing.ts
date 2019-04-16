import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { TasksPageComponent, CreateTaskPageComponent } from './pages';

const appRoutes: Routes = [
    { path: 'tasks', component: TasksPageComponent },
    { path: 'create-task', component: CreateTaskPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TasksRoutingModule {
}