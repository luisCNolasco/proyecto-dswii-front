import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string;
  password: string;
  usuarioObtenido: Usuario;
  constructor(private router: Router, private serviceUsuario: UsuarioService) {}

  ngOnInit(): void {}

  iniciarSesion() {

    this.serviceUsuario
      .iniciarSesion(this.usuario, this.password)
      .subscribe((data) => {
        this.usuarioObtenido = data;
        if (this.usuarioObtenido != null) {
          if (this.usuarioObtenido.tipoUsuario.idTipoUsuario == 1) {
            this.router.navigateByUrl('/administrador');
          }
          if (this.usuarioObtenido.tipoUsuario.idTipoUsuario == 2) {
            this.router.navigateByUrl('/cliente');
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrecto',
          });
          this.usuario = '';
          this.password = '';
        }
      });
  }
}
