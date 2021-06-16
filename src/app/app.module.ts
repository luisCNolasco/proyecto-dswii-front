import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { PerfilComponent } from './components/cliente/perfil/perfil.component';
import { ProductosComponent } from './components/cliente/productos/productos.component';
import { ServiciosComponent } from './components/cliente/servicios/servicios.component';
import { PedidosComponent } from './components/cliente/pedidos/pedidos.component';
import { ProductoComponent } from './components/cliente/producto/producto.component';
import { HomeComponent } from './components/home/home.component';
import { CrudProductoComponent } from './components/administrador/crud-producto/crud-producto.component';
import { CrudServicioComponent } from './components/administrador/crud-servicio/crud-servicio.component';
import { CrudUsuarioComponent } from './components/administrador/crud-usuario/crud-usuario.component';
import { AppRoutingModule } from './app-routing.module';
import { CarritoComponent } from './components/cliente/carrito/carrito.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    ClienteComponent,
    AdministradorComponent,
    PerfilComponent,
    ProductosComponent,
    ServiciosComponent,
    PedidosComponent,
    ProductoComponent,
    HomeComponent,
    CrudProductoComponent,
    CrudServicioComponent,
    CrudUsuarioComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
