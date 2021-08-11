import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesComponent} from './pages.component';
import {DeshboardComponent} from './deshboard/deshboard.component';
import {TiendaComponent} from './tienda/tienda.component';
import {CarritoCompraComponent} from './carrito-compra/carrito-compra.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'deshboard', component: DeshboardComponent},
      {path: 'tienda', component: TiendaComponent},
      {path: 'carrito', component: CarritoCompraComponent},
      {path: '', redirectTo: '/deshboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRouting { }
