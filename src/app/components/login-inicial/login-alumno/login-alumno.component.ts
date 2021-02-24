import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno';
import { AlumnoService } from '../../../service/alumno.service';
import { Router } from'@angular/router';


@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.css']
})
export class LoginAlumnoComponent implements OnInit {

  constructor(private alumnoService: AlumnoService,
    private Router: Router,
    ) { }

    alumnoModel = new Alumno("", "", "", "", "");

  ngOnInit() {
  }

  onFormSubmit(itemForm: any): void {

    this.alumnoModel = new Alumno(
      itemForm.controls.nick.value,
      itemForm.controls.email.value,
      itemForm.controls.pwd.value,
      itemForm.controls.nombre.value,
      itemForm.controls.apellidos.value);

    this.alumnoService.addAlumno(this.alumnoModel).subscribe(
      (datos: Alumno) => {
        if (datos['result'] === 'OK') {
          this.Router.navigate(['/perfil-alumno']);

        }
      }
    )

  }

}

