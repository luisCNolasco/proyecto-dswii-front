import { Categoria } from './Categoria';
import { Proveedor } from './Proveedor';

export class Producto {

    idProducto: number;
    nombreProducto: string;
    precioProducto: number;
    stockProducto: number;
    estadoProducto: number;
    categoria: Categoria;
    proveedor: Proveedor;
    fotoProducto1: string;
    fotoProducto2: string;
    descripcionProducto:string;
}