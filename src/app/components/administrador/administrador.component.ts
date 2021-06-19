import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { BoletaService } from '../../services/boleta.service';
import { Boleta } from '../../models/Boleta';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
})
export class AdministradorComponent implements OnInit {
  administrador: Usuario;
  boletas: Boleta[] = [];

  constructor(
    private serviceUsuario: UsuarioService,
    private serviceBoleta: BoletaService
  ) {
    this.administrador = this.serviceUsuario.obtenerUsuario();
  }
  ngOnInit(): void {

  }

  listarBoletasUsuario() {
    this.serviceBoleta.listarBoletas().subscribe((data) => {
      this.boletas = data;
    });
  }
}
