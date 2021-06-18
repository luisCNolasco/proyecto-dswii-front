import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Producto } from '../models/Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL:string = 'http://localhost:8095/producto/';

  constructor(private http:HttpClient
              ) { }

  getProductos(){
    return this.http.get<Producto[]>(this.URL+"listar");
  }

  getProductosPoCategoria(id:number){
    return this.http.get<Producto[]>(this.URL+"obtenerProducto/categoria/"+id);
  }

  getProducto(id:number){
    return this.http.get<Producto>(this.URL+"obtenerProducto/"+id);
  }

  saveProducto(producto:Producto){
    return this.http.post<Producto>(this.URL+"registrar",producto);
  }

  deleteProducto(id:number){
    return this.http.delete<Producto>(this.URL+"eliminar/"+id);
  }

  

 
}
