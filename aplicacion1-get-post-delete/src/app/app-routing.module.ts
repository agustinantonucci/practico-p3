import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ClientesComponent } from './body/clientes/clientes.component';
import { ContactanosComponent } from './body/contactanos/contactanos.component';
import { Error404Component } from './body/error404/error404.component';
import { HomeComponent } from './body/home/home.component';
import { PoductosComponent } from './body/poductos/poductos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: PoductosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
