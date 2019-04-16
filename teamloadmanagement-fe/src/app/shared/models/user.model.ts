import { UserRegistration } from './user.registration.interface';
import { Task } from './task.model';

export class User implements UserRegistration {
    id: any;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    description: string;
    skills: any[];
    tasks: Task[];
}