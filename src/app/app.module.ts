import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import { InicioComponent } from './inicio/inicio.component';

import { AppRoutingModule } from './app-routing.module';

import { RegistroAlumnoComponent } from './registro-alumno/registro-alumno.component';
import { RegistroProfesorComponent } from './registro-profesor/registro-profesor.component';
import { PerfilAlumnoComponent } from './perfil-alumno/perfil-alumno.component';
import { PerfilProfesorComponent } from './perfil-profesor/perfil-profesor.component';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    RegistroAlumnoComponent,
    RegistroProfesorComponent,
    PerfilAlumnoComponent,
    PerfilProfesorComponent,

    // InicioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
