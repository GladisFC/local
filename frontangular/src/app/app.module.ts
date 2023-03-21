import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NadvarComponent } from './componentes/nadvar/nadvar.component';
import { BotonloginComponent } from './componentes/botonlogin/botonlogin.component';
import { BotoncerrarsesionComponent } from './componentes/botoncerrarsesion/botoncerrarsesion.component';

@NgModule({
  declarations: [
    AppComponent,
    NadvarComponent,
    BotonloginComponent,
    BotoncerrarsesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
