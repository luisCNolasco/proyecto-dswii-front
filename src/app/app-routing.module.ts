import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/cliente/perfil/perfil.component';
import { ProductoComponent } from './components/cliente/producto/producto.component';
import { ProductosComponent } from './components/cliente/productos/productos.component';
import { ServiciosComponent } from './components/cliente/servicios/servicios.component';
import { PedidosComponent } from './components/cliente/pedidos/pedidos.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { CrudProductoComponent } from './components/administrador/crud-producto/crud-producto.component';
import { CrudServicioComponent } from './components/administrador/crud-servicio/crud-servicio.component';
import { CrudUsuarioComponent } from './components/administrador/crud-usuario/crud-usuario.component';
import { CarritoComponent } from './components/cliente/carrito/carrito.component';
import { EditProductoComponent } from './components/administrador/edit-producto/edit-producto.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'cliente',component:ClienteComponent,
  children:[
    {path:'perfilCliente',component:PerfilComponent},
    {path:'productos',component:ProductosComponent},
    {path:'producto/:id',component:ProductoComponent},
    {path:'servicios',component:ServiciosComponent},
    {path:'pedidos',component:PedidosComponent},
    {path:'carrito',component:CarritoComponent},
    {path:'**',pathMatch:'full',redirectTo:'productos'}
  ]},
  {path:'administrador',component:AdministradorComponent,children:[
    {path:'producto',component:CrudProductoComponent},
    {path:'servicio',component:CrudServicioComponent},
    {path:'usuario',component:CrudUsuarioComponent},
    {path:'perfilAdministrador',component:PerfilComponent},
    {path:'**',pathMatch:'full',redirectTo:'perfilAdministrador'}
  ]},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
