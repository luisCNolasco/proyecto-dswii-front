import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private serviceUsuario:UsuarioService,
    private router:Router){

}
  canActivate():boolean{
    if(this.serviceUsuario.estaAutenticado()){
      return true;
    }else{
      this.router.navigateByUrl('/home');
      return false;
    }
  }
  
}
