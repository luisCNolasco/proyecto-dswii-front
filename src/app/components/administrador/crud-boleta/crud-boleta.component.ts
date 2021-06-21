import { Component, OnInit } from '@angular/core';
import { Boleta } from '../../../models/Boleta';
import { BoletaService } from '../../../services/boleta.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-boleta',
  templateUrl: './crud-boleta.component.html',
  styleUrls: ['./crud-boleta.component.css'],
})
export class CrudBoletaComponent implements OnInit {
  boletas: Boleta[] = [];
  boletaEdit: Boleta = new Boleta;
  p = 1;
  constructor(private serviceBoleta: BoletaService, private modal: NgbModal) {
    this.listarBoletas();
  }

  ngOnInit(): void {}

  detallePedido(modalEstado, obj: Boleta) {
    this.modal.open(modalEstado);
    this.boletaEdit = obj;
    console.log(this.boletaEdit);
  }

  listarBoletas() {
    this.serviceBoleta.listarBoletas().subscribe((data) => {
      this.boletas = data;
    });
  }

  actualizarEstado(estado,numeroBoleta){
    this.serviceBoleta.actualizarEstadoBoleta(estado,numeroBoleta).subscribe(data=>{
      if(data==1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Estado de Pedido actualizado',
          showConfirmButton: false,
          timer: 1500,
        });
        this.listarBoletas();
        this.cerrar();
      }
    })
  }

  cerrar() {
    this.modal.dismissAll();
    this.boletaEdit = new Boleta();
  }
}
