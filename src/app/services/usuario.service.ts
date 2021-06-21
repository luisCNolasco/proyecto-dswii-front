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


getUsuarios(){
  return this.http.get<Usuario[]>(this.URL+"/listar");
}

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
  usuarioSesion() {
    return this.http.get<Usuario>(this.URL+"/usuarioSesion");
  }

}
