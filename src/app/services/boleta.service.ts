import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeleccionService } from './seleccion.service';
import { Boleta } from '../models/Boleta';

@Injectable({
  providedIn: 'root',
})
export class BoletaService {
  URL: string = 'http://localhost:8095/boleta/';

  constructor(
    private http: HttpClient,
    private serviceSeleccion: SeleccionService
  ) {}

  registrarBoleta() {
    return this.http.get<any>(this.URL + 'registrar');
  }

  listarBoletasXUsuario(idUsuario){
    return this.http.get<Boleta[]>(this.URL+"cargarXIdUsuario/"+idUsuario)
  }
  listarBoletas(){
    return this.http.get<Boleta[]>(this.URL+"listar")
  }
}
