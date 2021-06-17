import { Injectable } from '@angular/core';
import { Seleccion } from '../models/Seleccion';

@Injectable({
  providedIn: 'root'
})
export class SeleccionService {

  productosSeleccionados:Seleccion[]=[];
  constructor() { }

  getSelecionados(){
    return this.productosSeleccionados;
  }

  agregarSeleccion(obj:Seleccion){
    this.productosSeleccionados.push(obj);
  }

  eliminarSeleccion(indice:number){
    this.productosSeleccionados.splice(indice,1);
  }

}
