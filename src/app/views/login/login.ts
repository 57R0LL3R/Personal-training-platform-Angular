import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login-service';
import { Profile } from '../../models/profile';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm!: FormGroup;
  account!:User;
  constructor(private fb: FormBuilder,private Ls:LoginService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      const login_values = this.loginForm.value;
      this.account.Email=login_values.email
      this.account.PasswordHash=login_values.password
      console.log(this.Ls.login(this.account))
      return;
    }

    const { email, password } = this.loginForm.value;

    // Aquí deberías llamar a un servicio que haga el POST al backend
    console.log('Login data:', { email, password });

    // Ejemplo con fetch (o puedes usar HttpClient si tienes un AuthService):
    /*
    this.authService.login(email, password).subscribe({
      next: (res) => console.log('Login success:', res),
      error: (err) => console.error('Login error:', err)
    });
    */
  }
}
