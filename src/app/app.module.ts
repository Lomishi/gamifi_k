import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroAlumnoComponent } from './registro-alumno/registro-alumno.component';
import { RegistroProfesorComponent } from './registro-profesor/registro-profesor.component';
import { PerfilAlumnoComponent } from './perfil-alumno/perfil-alumno.component';
import { PerfilProfesorComponent } from './perfil-profesor/perfil-profesor.component';
import { MatButtonModule } from '@angular/material/button';
import { RegistroInicialComponent } from './registro-inicial/registro-inicial.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistroAlumnoComponent,
    RegistroProfesorComponent,
    PerfilAlumnoComponent,
    PerfilProfesorComponent,
    RegistroInicialComponent,
    LoginComponent,
    HeaderComponent,

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
