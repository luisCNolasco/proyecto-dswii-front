import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/Usuario';
import { BoletaService } from '../../services/boleta.service';
import { Boleta } from '../../models/Boleta';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent{

  usuario:Usuario;

  constructor(private serviceUsuario:UsuarioService,
            ) {
    this.usuarioSesion();
   }

   usuarioSesion(){
    this.serviceUsuario.usuarioSesion().subscribe(data=>{
      this.usuario = data;
    })
   }

}
