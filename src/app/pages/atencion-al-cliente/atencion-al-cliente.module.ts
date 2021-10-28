import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtencionAlClienteRoutingModule } from './atencion-al-cliente-routing.module';
import { AtencionAlClienteComponent } from './components/atencion-al-cliente/atencion-al-cliente.component';


@NgModule({
  declarations: [
    AtencionAlClienteComponent
  ],
  imports: [
    CommonModule,
    AtencionAlClienteRoutingModule
  ]
})
export class AtencionAlClienteModule { }
