import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  URL:string = 'http://localhost:8095/categoria/';
  
  constructor(private http:HttpClient) { }
  
  getCategorias(){
    return this.http.get<Categoria[]>(this.URL+"listar");
  }
}
