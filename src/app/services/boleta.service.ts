import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeleccionService } from './seleccion.service';

@Injectable({
  providedIn: 'root'
})
export class BoletaService {

  URL:string='http://localhost:8095/boleta/';

  constructor(private http:HttpClient,
              private serviceSeleccion:SeleccionService) { }

 
}
