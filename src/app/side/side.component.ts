import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side',

  standalone:true,
  imports: [RouterModule ,RouterOutlet ],

  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']

})
export class SideComponent {


}
