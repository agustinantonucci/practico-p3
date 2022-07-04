import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './header/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { PoductosComponent } from './body/poductos/poductos.component';
import { Error404Component } from './body/error404/error404.component';
import { HomeComponent } from './body/home/home.component';
import { ClientesComponent } from './body/clientes/clientes.component';
import { ContactanosComponent } from './body/contactanos/contactanos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    PoductosComponent,
    Error404Component,
    HomeComponent,
    ClientesComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
