import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilAlumnoComponent } from './components/perfils/perfil-alumno/perfil-alumno.component';
import { PerfilProfesorComponent } from './components/perfils/perfil-profesor/perfil-profesor.component';
import { RegistroAlumnoComponent } from './components/registro/registro-alumno/registro-alumno.component';
import { RegistroInicialComponent } from './components/registro/registro-inicial/registro-inicial.component';
import { RegistroProfesorComponent } from './components/registro/registro-profesor/registro-profesor.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'AppComponent', component: AppComponent },
  { path: 'perfil-alumno', component: PerfilAlumnoComponent },
  { path: 'perfil-profesor', component: PerfilProfesorComponent },
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
