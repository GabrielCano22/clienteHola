import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NombreComponent } from './nombre/nombre.component';
import { Apellido1Component } from './apellido1/apellido1.component';
import { Apellido2Component } from './apellido2/apellido2.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormareservaComponent } from './formareserva/formareserva.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { DescrpcionComponent } from './descrpcion/descrpcion.component';

@NgModule({
  declarations: [
    AppComponent,
    NombreComponent,
    Apellido1Component,
    Apellido2Component,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    FormareservaComponent,
    HabitacionesComponent,
    DescrpcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
