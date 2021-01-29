import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { LoginComponent } from './login/login.component';
import { PerfilAlumnoComponent } from './perfil-alumno/perfil-alumno.component';
import { PerfilProfesorComponent } from './perfil-profesor/perfil-profesor.component';
import { RegistroAlumnoComponent } from './registro-alumno/registro-alumno.component';
import { RegistroInicialComponent } from './registro-inicial/registro-inicial.component';
import { RegistroProfesorComponent } from './registro-profesor/registro-profesor.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'AppComponent', component: AppComponent },
  { path: 'perfil-alumno', component: PerfilAlumnoComponent },
  { path: 'perfil-profesort', component: PerfilProfesorComponent },
  { path: 'registro-alumno', component: RegistroAlumnoComponent },
  { path: 'registro-profesor', component: RegistroProfesorComponent },
  { path: 'registro-inicial', component: RegistroInicialComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
