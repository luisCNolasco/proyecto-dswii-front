import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/Producto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriaService } from '../../../services/categoria.service';
import { ProveedorService } from '../../../services/proveedor.service';
import { Categoria } from '../../../models/Categoria';
import { Proveedor } from '../../../models/Proveedor';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { Imagen } from '../../../models/Imagen';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-producto',
  templateUrl: './crud-producto.component.html',
  styleUrls: ['./crud-producto.component.css'],
})
export class CrudProductoComponent {
  productos: Producto[] = [];
  categorias: Categoria[] = [];
  proveedores: Proveedor[] = [];

  producto: Producto = new Producto();

  productoEdit:Producto;
  p = 1;

  private img: any;
  private filePath: any;
  private downloadURL: string;
  urlImagen: string;

  mensajeBoton:string='Registrar Producto';
  mensajeAccionCrud:string='Producto registrado';

  constructor(
    private serviceProducto: ProductoService,
    private serviceCategoria: CategoriaService,
    private serviceProveedor: ProveedorService,
    private modal: NgbModal,
    private router: Router,

    private storage: AngularFireStorage
  ) {
    this.cargarProductos();
    this.cargarCategorias();
    this.cargarProveedores();
  }

  editar(modalRegistro,obj:Producto){
    this.mensajeBoton='Actualizar Producto'
    this.mensajeAccionCrud="Producto actualizado"
      this.modal.open(modalRegistro);
     this.producto=obj;
  }

  editarProducto(){
     
    if(this.downloadURL===''){
      this.serviceProducto.saveProducto(this.producto).subscribe((data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: this.mensajeAccionCrud,
          showConfirmButton: false,
          timer: 1500,
        });
        this.producto = new Producto();
      this.cerrar();
      this.router.navigate(['administrador/producto']);
      this.cargarProductos();
      this.downloadURL='';
      });
    }else{ 
      this.saveProducto();
    }
  }

  eliminar(id: number) {
    Swal.fire({
      title: '¿Seguro de eliminar el producto?',
      showCancelButton: true,
      confirmButtonText: `Aceptar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceProducto.deleteProducto(id).subscribe((data) => {});

        Swal.fire('Producto eliminado', '', 'success');
        this.router.navigate(['administrador/producto']);
        this.cargarProductos();
      }
    });
  }

  saveProducto() {
    this.producto.estadoProducto = 1;
    this.producto.fotoProducto = this.downloadURL;


    this.serviceProducto.saveProducto(this.producto).subscribe((data) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: this.mensajeAccionCrud,
        showConfirmButton: false,
        timer: 1500,
      });
      this.producto = new Producto();
      this.cerrar();
      this.router.navigate(['administrador/producto']);
      this.cargarProductos();
    });
   
  }

  imagenEscogida(event) {
    this.img = event.target.files[0];
    this.subirImageFirebase(this.img);
  }

  subirImageFirebase(image: Imagen) {
    this.filePath = `productos/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((urlImage) => {
            this.downloadURL = urlImage;
          });
        })
      )
      .subscribe();
  }

  cargarProductos() {
    this.serviceProducto.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }
  cargarCategorias() {
    this.serviceCategoria.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }
  cargarProveedores() {
    this.serviceProveedor.getCategorias().subscribe((data) => {
      this.proveedores = data;
    });
  }

  verModal(modalRegistro) {
    this.mensajeBoton="Registrar producto"
    this.mensajeAccionCrud="Producto registrado"
    this.modal.open(modalRegistro);
  }
  cerrar() {
    this.modal.dismissAll();
    this.producto=new Producto();
  }
}
