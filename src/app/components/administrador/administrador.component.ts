import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { BoletaService } from '../../services/boleta.service';
import { Boleta } from '../../models/Boleta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
})
export class AdministradorComponent implements OnInit {
  administrador: Usuario;
  nombre=''
  boletas: Boleta[] = [];

  constructor(
    private serviceUsuario: UsuarioService,
    private serviceBoleta: BoletaService,
    private router:Router
  ) {
    this.usuarioSesion();
    this.listarBoletasUsuario();
  }

  ngOnInit(): void {

  }
  usuarioSesion(){
    this.serviceUsuario.usuarioSesion().subscribe(data=>{
      this.administrador = data;
    })
  }
  
  listarBoletasUsuario() {
    this.serviceBoleta.listarBoletas().subscribe((data) => {
      this.boletas = data;
    });
  }

  cerrarSesion(){
    this.serviceUsuario.cerrarSesion().subscribe(data=>{
      this.router.navigate(['home'])
    })
  }
}
