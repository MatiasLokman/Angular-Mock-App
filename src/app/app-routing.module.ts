import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./pages/productos/productos.module').then(
        (m) => m.ProductosModule
      ),
  },
  {
    path: 'atencion-al-cliente',
    loadChildren: () =>
      import('./pages/atencion-al-cliente/atencion-al-cliente.module').then(
        (m) => m.AtencionAlClienteModule
      ),
  },
  {
    path: 'carrito',
    loadChildren: () =>
      import('./pages/carrito/carrito.module').then((m) => m.CarritoModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio',
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
