import { Component } from '@angular/core';
import { AddPersonsComponent } from '../addpersons/addpersons.component';
import { AddDishesComponent } from '../adddishes/adddishes.component';
import { SplitterComponent } from '../splitter/splitter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddPersonsComponent, AddDishesComponent, SplitterComponent], // Import all three components here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Component logic
}
