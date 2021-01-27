import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginForm: FormGroup;
}

// Codigo de informacion
// https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial
