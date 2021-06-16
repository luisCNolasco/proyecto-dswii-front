import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  producto: Producto;
  cantidad:number=1;
  precioProducto:number;
  mostrarPrecio:number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceProducto: ProductoService,
    private router: Router
  ) {
    this.verProductoDetalle();
  }
  ngOnInit(): void {}
  verProductoDetalle() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      console.log(id);
      this.serviceProducto.getProducto(id).subscribe((data) => {
        this.producto = data;
        this.precioProducto=this.producto.precioProducto;
        this.mostrarPrecio=this.producto.precioProducto;
        console.log(this.producto);
      });
    });
  }
  volver() {
    this.router.navigate(['cliente/productos']);
  }

  multiplicar(cantidad){
    console.log(cantidad)
    this.mostrarPrecio = this.precioProducto*cantidad;
    console.log(this.mostrarPrecio);
  }
}
