import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from '../head/head.component';
import { SideComponent } from '../side/side.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,HeadComponent,SideComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
