import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { BoletaService } from '../../../services/boleta.service';
import { Usuario } from '../../../models/Usuario';
import { Boleta } from '../../../models/Boleta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  usuario:Usuario;
  boletas:Boleta[]=[];
  constructor(private serviceUsuario:UsuarioService,
    private serviceBoleta:BoletaService,
    private router:Router) { 
     
      this.usuarioSesion();
    }

  ngOnInit(): void {
  }

  usuarioSesion(){
    this.serviceUsuario.usuarioSesion().subscribe(data=>{
      this.usuario=data;
      this.listarBoletasUsuario(this.usuario.idUsuario);
    });
  }

  listarBoletasUsuario(idUsuario){
    this.serviceBoleta.listarBoletasXUsuario(idUsuario).subscribe(data=>{
      this.boletas=data;
    });
  }

  detallePedido(numeroBoleta:number){
    this.router.navigate(['cliente/detalleBoleta',numeroBoleta]);
  }

}
