import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/Usuario';
import { BoletaService } from '../../services/boleta.service';
import { Boleta } from '../../models/Boleta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent{

  usuario:Usuario;

  constructor(private serviceUsuario:UsuarioService,
    private router:Router
            ) {
    this.usuarioSesion();
   }

   usuarioSesion(){
    this.serviceUsuario.usuarioSesion().subscribe(data=>{
      this.usuario = data;
    })
   }

   cerrarSesion(){
    this.serviceUsuario.cerrarSesion().subscribe(data=>{
      this.router.navigate(['home'])
    })
  }

}
