import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}
