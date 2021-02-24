import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfesorService } from '../../../service/profesor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.component.html',
  styleUrls: ['./registro-profesor.component.css']
})
export class RegistroProfesorComponent implements OnInit {

  constructor(private ProfesorService: ProfesorService,
    private snackBar: MatSnackBar,
    private Router: Router,
    ) { }

    profesorModel = new Profesor("", "", "", "", "", "");

  ngOnInit() {
  }

  onFormSubmit(itemForm: any): void {

    this.profesorModel = new Profesor(
      itemForm.controls.nick.value,
      itemForm.controls.email.value,
      itemForm.controls.pwd.value,
      itemForm.controls.nombre.value,
      itemForm.controls.apellidos.value,
      itemForm.controls.centro.value);

    this.ProfesorService.addprofesor(this.profesorModel).subscribe(
      (datos: Profesor) => {
        if (datos['result'] === 'OK') {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Profesor registrador.',
            showConfirmButton: false,
            timer: 1500
          })
          this.Router.navigate(['/login']);

        }
      }
    )

  }

}
