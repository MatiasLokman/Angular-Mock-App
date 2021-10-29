import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtencionAlClienteRoutingModule } from './atencion-al-cliente-routing.module';
import { AtencionAlClienteComponent } from './components/atencion-al-cliente/atencion-al-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [AtencionAlClienteComponent],
  imports: [
    CommonModule,
    AtencionAlClienteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CoreModule,
  ],
})
export class AtencionAlClienteModule {}
