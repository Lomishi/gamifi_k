import { Component, OnInit } from '@angular/core';
import { registro_alumno } from '../../../models/alumno';
import { AlumnoService } from '../../../service/alumno.service';
import { Router } from'@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent implements OnInit {

  constructor(private alumnoService: AlumnoService,
    private snackBar : MatSnackBar,
    private Router: Router,
    ) { }

    alumnoModel = new registro_alumno("", "", "", "", "");

  ngOnInit() {
  }

  onFormSubmit(itemForm: any): void {

    this.alumnoModel = new registro_alumno(
      itemForm.controls.nick.value,
      itemForm.controls.email.value,
      itemForm.controls.pwd.value,
      itemForm.controls.nombre.value,
      itemForm.controls.apellidos.value);

    this.alumnoService.addAlumno(this.alumnoModel).subscribe(
      datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
        }
      }
    )

    console.log(this.alumnoModel);

  }

}
