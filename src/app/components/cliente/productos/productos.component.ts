import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/Producto';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../services/categoria.service';
import { Categoria } from '../../../models/Categoria';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[] = [];
  categorias:Categoria[]=[];

  constructor(private serviceProducto:ProductoService,
              private serviceCategorias:CategoriaService,
              private router:Router) { }

  ngOnInit(): void {
    this.cargarProductos();
    this.cargarCategorias();
  }

  cargarProductos(){
    this.serviceProducto.getProductos().subscribe(data =>{
      this.productos=data;
    });
  }
  verProducto(id:number){
    this.router.navigate(['cliente/producto',id]);

  }

  cargarCategorias(){
    this.serviceCategorias.getCategorias().subscribe(data=>{
      this.categorias=data;
    });
  }

  capturar(valor:number){
    console.log(valor)
    if(valor==0){
      this.cargarProductos();
    }
    this.serviceProducto.getProductosPoCategoria(valor).subscribe(data=>{
      this.productos=data;
    });
  }

}
