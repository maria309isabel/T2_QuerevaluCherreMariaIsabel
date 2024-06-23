import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  

  txtusuario: string = '';
  txtpassword: string = '';

  constructor(private router: Router, 
    private authService: AuthService) {}

  submit(usuario: HTMLInputElement,
    password: HTMLInputElement) {
    if (this.txtusuario === 'Querevalu' && this.txtpassword === '12345') {
      sessionStorage.setItem('user', this.txtusuario);
      this.router.navigate(['menu']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}