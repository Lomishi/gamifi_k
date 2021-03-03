import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../../service/alumno.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.css']
})
export class ModificarAlumnoComponent implements OnInit {

  constructor(private AlumnoService: AlumnoService,
    private Router: Router,
    ) { }

    alumnoModel = new Alumno("", "", "", "", "");


  ngOnInit(): void {
  }
  onFormSubmit(itemForm: any): void {

    this.alumnoModel = new Alumno(
      itemForm.controls.nick.value,
      itemForm.controls.pwd.value,
      itemForm.controls.email.value,
      itemForm.controls.nombre.value,
      itemForm.controls.apellidos.value);

    this.AlumnoService.modificaralumno(this.alumnoModel).subscribe(
      (datos: Alumno) => {
        if (datos['result'] === 'OK') {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Alumno modificado.',
            showConfirmButton: false,
            timer: 1500
          })
          this.Router.navigate(['/perfil-alumno']);

        }
        else if (datos['result'] === 'ERROR1'){
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El usuario introducido ya existe',
          })
        }
      }
    )

  }

}

