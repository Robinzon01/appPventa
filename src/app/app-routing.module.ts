import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesRouting} from './pages/pages.routing';
import {AuthRouting} from './auth/auth.routing';

import {NopagefoundComponent} from './nopagefound/nopagefound.component';

const routes: Routes = [
  {path: '**', component: NopagefoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRouting,
    AuthRouting
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
