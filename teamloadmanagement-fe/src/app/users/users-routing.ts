import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { UsersPageComponent, UserPageComponent } from './pages';

const appRoutes: Routes = [
    { path: 'users', component: UsersPageComponent },
    { path: 'users/:id', component: UserPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule {
}