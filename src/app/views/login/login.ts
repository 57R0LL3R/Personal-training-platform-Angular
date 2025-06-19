import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
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
