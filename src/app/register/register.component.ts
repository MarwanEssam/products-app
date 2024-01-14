import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { matchpassword } from '../../validators/confirmPassword';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup(
      {
        fullName: new FormControl('', Validators.required),
        userEmail: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        ]),
        userName: new FormControl('', [
          Validators.required,
          Validators.pattern('^\\S+$'),
        ]),
        userPassword: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validators: matchpassword,
      }
    );
  }

  loginSubmit() {
    console.log(this.registerForm);
  }
}
