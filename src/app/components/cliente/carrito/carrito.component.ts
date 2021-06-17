import { Component, OnInit } from '@angular/core';
import { SeleccionService } from '../../../services/seleccion.service';
import { Seleccion } from '../../../models/Seleccion';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productosCarrito:Seleccion[]=[]
  constructor( private serviceSeleccion:SeleccionService) { 
  this.listarProductosSeleccionados();
  }

  ngOnInit(): void {
  }

  listarProductosSeleccionados(){
    this.productosCarrito= this.serviceSeleccion.getSelecionados();
  }

  eliminar(indice){
    this.serviceSeleccion.eliminarSeleccion(indice);
    this.listarProductosSeleccionados();
    console.log(indice);
  }

}
