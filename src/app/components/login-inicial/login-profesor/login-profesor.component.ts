import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.component.html',
  styleUrls: ['./login-profesor.component.css']
})
export class LoginProfesorComponent implements OnInit {

  constructor(private profesorService: ProfesorService,
    private Router: Router,
    ) { }

    profesorModel = new Profesor("", "");

  ngOnInit() {
  }

  onFormSubmit(itemForm: any): void {

    this.profesorModel = new Profesor(
      itemForm.controls.nick.value,
      itemForm.controls.pwd.value);

    this.profesorService.loginProfesor(this.profesorModel).subscribe(
      (datos: Profesor) => {
        if (datos['result'] === 'OK') {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Bienvenido Alumno.',
            showConfirmButton: false,
            timer: 1500
          })
          this.Router.navigate(['/perfil-alumno']);
        } else if (datos['result'] === 'ERROR1'){
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El usuario introducido no existe',
          })
        }
        else if (datos['result'] === 'ERROR2'){
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Contraseña incorrecta',
          })
        }
      }

    )}

}
