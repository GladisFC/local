import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NadvarComponent } from './componentes/nadvar/nadvar.component';
import { BotonloginComponent } from './componentes/botonlogin/botonlogin.component';
import { BotoncerrarsesionComponent } from './componentes/botoncerrarsesion/botoncerrarsesion.component';
import { ModalloginnadvarComponent } from './componentes/modalloginnadvar/modalloginnadvar.component';
import { ModalcerrarsesionComponent } from './componentes/modalcerrarsesion/modalcerrarsesion.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { BtneditbannerComponent } from './componentes/btneditbanner/btneditbanner.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { BtneditsobremiComponent } from './componentes/btneditsobremi/btneditsobremi.component';
import { BtnediteducacionComponent } from './componentes/btnediteducacion/btnediteducacion.component';
import { HysComponent } from './componentes/hys/hys.component';
import { BtnedithysComponent } from './componentes/btnedithys/btnedithys.component';

@NgModule({
  declarations: [
    AppComponent,
    NadvarComponent,
    BotonloginComponent,
    BotoncerrarsesionComponent,
    ModalloginnadvarComponent,
    ModalcerrarsesionComponent,
    BannerComponent,
    SobremiComponent,
    BtneditbannerComponent,
    EducacionComponent,
    BtneditsobremiComponent,
    BtnediteducacionComponent,
    HysComponent,
    BtnedithysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
