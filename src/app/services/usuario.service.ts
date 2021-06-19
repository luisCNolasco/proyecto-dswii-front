import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  autenticado: boolean;
  usuario: Usuario;

  constructor(private http: HttpClient) {
    this.estaAutenticado();
  }

  URL: string = 'http://localhost:8095/usuario';

  iniciarSesion(gmail: string, password) {
    return this.http
      .get<Usuario>(this.URL + '/iniciarSesion/' + gmail + '/' + password)
      .pipe(
        map((resp) => {
          this.autenticado = true;
          return resp;
        })
      );
  }

  estaAutenticado(): boolean {
    if (this.autenticado) {
      return true;
    }
  }
  obtenerUsuario() {
    return this.usuario;
  }
  guardarUsuario(obj: Usuario) {
    this.usuario = obj;
  }
  borrarUsuario(){
    this.usuario=null;
  }
}
