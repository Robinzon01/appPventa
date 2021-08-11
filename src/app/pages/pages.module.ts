import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {FooterModule} from '../footer/footer.module';

import {RegisterComponent} from '../auth/register/register.component';
import {DeshboardComponent} from './deshboard/deshboard.component';
import {CarouselComponent} from './carousel/carousel.component';
import {PopularCategoriesComponent} from './popular-categories/popular-categories.component';
import {ProductoTendenciaComponent} from './producto-tendencia/producto-tendencia.component';
import {CategoriaDestacadaComponent} from './categoria-destacada/categoria-destacada.component';
import {ComprarMarcaComponent} from './comprar-marca/comprar-marca.component';
import {BotonInicioComponent} from './boton-inicio/boton-inicio.component';
import {PagesComponent} from './pages.component';
import {CarritoCompraComponent} from './carrito-compra/carrito-compra.component';
import {TiendaComponent} from './tienda/tienda.component';


@NgModule({
  declarations: [
    DeshboardComponent,
    CarouselComponent,
    PopularCategoriesComponent,
    ProductoTendenciaComponent,
    CategoriaDestacadaComponent,
    ComprarMarcaComponent,
    BotonInicioComponent,
    PagesComponent,
    CarritoCompraComponent,
    TiendaComponent
  ],
  exports: [
    DeshboardComponent,
    CarouselComponent,
    PopularCategoriesComponent,
    ProductoTendenciaComponent,
    CategoriaDestacadaComponent,
    ComprarMarcaComponent,
    BotonInicioComponent,
    PagesComponent,
    CarritoCompraComponent,
    TiendaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FooterModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
