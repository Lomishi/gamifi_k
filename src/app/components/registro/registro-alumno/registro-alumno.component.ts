import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno';
import { AlumnoService } from '../../../service/alumno.service';
import { Router } from'@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

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
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Alumno registrador.',
            showConfirmButton: false,
            timer: 1500
          })
          this.Router.navigate(['/login']);

        }
      }
    )

  }

}
