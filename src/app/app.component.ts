import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { SideComponent } from './side/side.component';
import { EmployeesComponent } from './employees/employees.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule ,RouterOutlet ,HeadComponent ,SideComponent,EmployeesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project';
}
