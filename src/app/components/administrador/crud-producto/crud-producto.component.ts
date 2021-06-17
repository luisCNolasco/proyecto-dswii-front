import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/Producto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crud-producto',
  templateUrl: './crud-producto.component.html',
  styleUrls: ['./crud-producto.component.css']
})
export class CrudProductoComponent implements OnInit {
productos:Producto[]=[];

  constructor(private serviceProducto:ProductoService,
              private modal:NgbModal) { 
    this.cargarProductos();
  }

  ngOnInit(): void {
  }

  cargarProductos(){
    this.serviceProducto.getProductos().subscribe(data =>{
      this.productos=data;
      console.log(this.productos);
    });
  }

  verModal(modalRegistro){
    this.modal.open(modalRegistro)
  }

}
