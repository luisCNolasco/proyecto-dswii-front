import { Injectable } from '@angular/core';
import { Seleccion } from '../models/Seleccion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeleccionService {

  URL:string='http://localhost:8095/seleccion/';
  
  productosSeleccionados:Seleccion[]=[];

  constructor(private http:HttpClient) { }

  getSelecionados(){
    return this.http.get<Seleccion[]>(this.URL+"listarSeleccionados");
  }

  agregarSeleccion(obj:Seleccion){
    return this.http.post<Seleccion>(this.URL+"/agregarSeleccion",obj)

  }

  eliminarSeleccion(idProducto:number){
    return this.http.delete<Seleccion>(this.URL+"/eliminarSeleccion/"+idProducto);
  }

}
