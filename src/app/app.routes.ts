import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { StudentsComponent } from './students/students.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'employee', component: EmployeesComponent },
  { path: 'student', component: StudentsComponent },


];
