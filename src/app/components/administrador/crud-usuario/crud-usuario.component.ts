import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/Usuario';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crud-usuario',
  templateUrl: './crud-usuario.component.html',
  styleUrls: ['./crud-usuario.component.css'],
})
export class CrudUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuario: Usuario;

  p = 1;

  constructor(private serviceUsuario: UsuarioService) {
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.serviceUsuario.getUsuarios().subscribe((data) => {
      this.usuarios = data;

    });
  }

  verModal(){
    alert("Registrar usuario")
  }

  ngOnInit(): void {}
}
