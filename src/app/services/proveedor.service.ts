import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  URL:string = 'http://localhost:8095/proveedor/';
  
  constructor(private http:HttpClient) { }
  
  getCategorias(){
    return this.http.get<Proveedor[]>(this.URL+"listar");
  }
}
