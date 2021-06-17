import { Component, OnInit } from '@angular/core';
import { SeleccionService } from '../../services/seleccion.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  nombreCliente:string = "Luis Carranza";

  constructor() {

   }

  ngOnInit(): void {
  }

}
