import { Component, OnInit } from '@angular/core';
import { SeleccionService } from '../../../services/seleccion.service';
import { Seleccion } from '../../../models/Seleccion';
import { BoletaService } from '../../../services/boleta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  productosCarrito: Seleccion[] = [];
  constructor(private serviceSeleccion: SeleccionService,
              private serviceBoleta:BoletaService) {
    this.listarProductosSeleccionados();
  }

  ngOnInit(): void {}

  listarProductosSeleccionados() {
    this.serviceSeleccion.getSelecionados().subscribe((data) => {
      this.productosCarrito = data;
    });
  }

  eliminarSeleccion(idProducto) {
    this.serviceSeleccion.eliminarSeleccion(idProducto).subscribe((data) => {
      this.listarProductosSeleccionados();
    });
  }

  confirmarPedido() {
    console.log("generando boleta")
   
    Swal.fire({
      title: '¿Confirmar compra?',
      showCancelButton: true,
      confirmButtonText: `Aceptar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceBoleta.registrarBoleta().subscribe((data)=>{
          if (data==1) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Pedido Generado',
              showConfirmButton: false,
              timer: 1500
            })
          }
          this.listarProductosSeleccionados();
        });
      }
    });

    
  }
}
