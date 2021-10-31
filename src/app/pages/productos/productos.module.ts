import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './components/productos/productos.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProductosComponent,
    ListaProductosComponent,
    ProductoComponent,
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule,
    RouterModule,
    SharedModule,
  ],
})
export class ProductosModule {}
