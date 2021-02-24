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

    alumnoModel = new Alumno("", "");

  ngOnInit() {
  }

  onFormSubmit(itemForm: any): void {

    this.alumnoModel = new Alumno(
      itemForm.controls.nick.value,
      itemForm.controls.pwd.value);

    this.alumnoService.loginAlumno(this.alumnoModel).subscribe(
      (datos: Alumno) => {
        if (datos['result'] === 'OK') {
          console.log("caca");

          this.Router.navigate(['/perfil-alumno']);
        } else if (datos['result'] === 'ERROR1'){
          console.log("ERROR. El usuario introducido no existe");
        }
        else if (datos['result'] === 'ERROR2'){
          console.log("ERROR. Contraseña incorrecta");
        }
      }
    )

  }

}

