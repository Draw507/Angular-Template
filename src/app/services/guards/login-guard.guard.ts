import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) {}

    canActivate() {
      if (this.usuarioService.estaLogueado()) {
        console.log('PASO EL GUARD');
        return true;
      } else {
        console.log('NO PASO EL GUARD');
        this.router.navigate(['/login']);
        return false;
      }
    }

}
