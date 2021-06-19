import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { BoletaService } from '../../../services/boleta.service';
import { Usuario } from '../../../models/Usuario';
import { Boleta } from '../../../models/Boleta';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  usuario:Usuario;
  boletas:Boleta[]=[];
  constructor(private serviceUsuario:UsuarioService,
    private serviceBoleta:BoletaService) { 
      this.usuario=this.serviceUsuario.obtenerUsuario();
      this.listarBoletasUsuario();
    }

  ngOnInit(): void {
  }

  listarBoletasUsuario(){
    this.serviceBoleta.listarBoletasXUsuario(this.usuario.idUsuario).subscribe(data=>{
      this.boletas=data;
      console.log(data)
    });
  }

}
