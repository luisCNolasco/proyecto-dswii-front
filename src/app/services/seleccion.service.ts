import { Injectable } from '@angular/core';
import { Seleccion } from '../models/Seleccion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeleccionService {

  URL:string='http://localhost:8095/boleta/';
  
  productosSeleccionados:Seleccion[]=[];

  constructor(private http:HttpClient) { }

  getSelecionados(){
    return this.productosSeleccionados;
  }

  agregarSeleccion(obj:Seleccion){
    this.productosSeleccionados.push(obj);
  }

  eliminarSeleccion(indice:number){
    this.productosSeleccionados.splice(indice,1);
  }

   enviarProductos(seleccion:Seleccion){
       return this.http.post(this.URL+"enviarProducto",seleccion);
   
  }
}
