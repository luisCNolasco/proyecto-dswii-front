import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/Producto';
import { Seleccion } from '../../../models/Seleccion';
import { SeleccionService } from '../../../services/seleccion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  producto: Producto;
  cantidad: number = 1;
  precioProducto: number;
  parcialTotal: number;
  idProducto: number;
  nombreProducto: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceProducto: ProductoService,
    private serviceSeleccion: SeleccionService,
    private router: Router
  ) {
    this.verProductoDetalle();
  }
  ngOnInit(): void {}

  verProductoDetalle() {
    this.activatedRoute.params.subscribe((params) => {
      this.idProducto = params['id'];
      this.serviceProducto.getProducto(this.idProducto).subscribe((data) => {
        this.producto = data;
        this.precioProducto = this.producto.precioProducto;
        this.parcialTotal = this.producto.precioProducto;
        this.nombreProducto = this.producto.nombreProducto;
      });
    });
  }
  volver() {
    this.router.navigate(['cliente/productos']);
  }

  multiplicar(cantidad) {
    this.cantidad = cantidad;
    this.parcialTotal = this.precioProducto * cantidad;
  }
  agregar() {
    var obj = new Seleccion();
    obj.codigo = this.idProducto;
    obj.nombre = this.nombreProducto;
    obj.precio = this.precioProducto;
    obj.cantidad = this.cantidad;
    obj.totalParcial = this.parcialTotal;

    this.serviceSeleccion.agregarSeleccion(obj).subscribe(data=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title:'Producto agregado',
        showConfirmButton: false,
        timer: 1000,
      });
    })
    
    this.volver();
  }
}
