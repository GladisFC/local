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
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { BtneditexperienciaComponent } from './componentes/btneditexperiencia/btneditexperiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BtneditproyectosComponent } from './componentes/btneditproyectos/btneditproyectos.component';
import { ModalbannerComponent } from './componentes/modalbanner/modalbanner.component';
import { ModaleditfotoComponent } from './componentes/modaleditfoto/modaleditfoto.component';
import { ModaleditinfoComponent } from './componentes/modaleditinfo/modaleditinfo.component';
import { ModalagregarexperienciaComponent } from './componentes/modalagregarexperiencia/modalagregarexperiencia.component';
import { ModaleditexperienciaComponent } from './componentes/modaleditexperiencia/modaleditexperiencia.component';
import { ModalborrarexperienciaComponent } from './componentes/modalborrarexperiencia/modalborrarexperiencia.component';
import { ModalediteducacionComponent } from './componentes/modalediteducacion/modalediteducacion.component';
import { ModalagregareducacionComponent } from './componentes/modalagregareducacion/modalagregareducacion.component';
import { ModalborrareducacionComponent } from './componentes/modalborrareducacion/modalborrareducacion.component';
import { ModaleditproyectosComponent } from './componentes/modaleditproyectos/modaleditproyectos.component';
import { ModalagregarproyectoComponent } from './componentes/modalagregarproyecto/modalagregarproyecto.component';
import { ModalborrarproyectoComponent } from './componentes/modalborrarproyecto/modalborrarproyecto.component';

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
    BtnedithysComponent,
    ExperienciaComponent,
    BtneditexperienciaComponent,
    ProyectosComponent,
    BtneditproyectosComponent,
    ModalbannerComponent,
    ModaleditfotoComponent,
    ModaleditinfoComponent,
    ModalagregarexperienciaComponent,
    ModaleditexperienciaComponent,
    ModalborrarexperienciaComponent,
    ModalediteducacionComponent,
    ModalagregareducacionComponent,
    ModalborrareducacionComponent,
    ModaleditproyectosComponent,
    ModalagregarproyectoComponent,
    ModalborrarproyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
