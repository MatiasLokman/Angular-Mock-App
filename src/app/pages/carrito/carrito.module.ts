import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [CarritoComponent, ProductComponent],
  imports: [CommonModule, CarritoRoutingModule, MaterialModule],
})
export class CarritoModule {}
