import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Don't forget this!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'login';
}
