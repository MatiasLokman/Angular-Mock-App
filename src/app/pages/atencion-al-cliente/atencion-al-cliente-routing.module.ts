import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtencionAlClienteComponent } from './components/atencion-al-cliente/atencion-al-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: AtencionAlClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtencionAlClienteRoutingModule {}
