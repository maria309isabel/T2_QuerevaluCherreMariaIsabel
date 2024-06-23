import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/login/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService
  ){

  }

  salir(): void{
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }


  irHome():void{
    this.router.navigate(["home"], {relativeTo: this.route})
  }
  irCurso():void{
    this.router.navigate(["Pregunta2"], {relativeTo: this.route})
  }
  irPost():void{
    this.router.navigate(["Pregunta3"], {relativeTo: this.route})
  }
  irEstado():void{
    this.router.navigate(["Pregunta4"], {relativeTo: this.route})
  }

}
