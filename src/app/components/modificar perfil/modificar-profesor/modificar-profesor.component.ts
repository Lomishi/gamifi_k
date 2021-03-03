import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor';
import { ProfesorService } from '../../../service/profesor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-profesor',
  templateUrl: './modificar-profesor.component.html',
  styleUrls: ['./modificar-profesor.component.css']
})
export class ModificarProfesorComponent implements OnInit {

  constructor(private ProfesorService: ProfesorService,
    private Router: Router,
    ) { }

    profesorModel = new Profesor("", "", "", "", "", "");


  ngOnInit(): void {
  }

  onFormSubmit(itemForm: any): void {

    this.profesorModel = new Profesor(
      itemForm.controls.nick.value,
      itemForm.controls.pwd.value,
      itemForm.controls.email.value,
      itemForm.controls.nombre.value,
      itemForm.controls.apellidos.value,
      itemForm.controls.centro.value);

    this.ProfesorService.modificarprofesor(this.profesorModel).subscribe(
      (datos: Profesor) => {
        if (datos['result'] === 'OK') {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Profesor modificado.',
            showConfirmButton: false,
            timer: 1500
          })
          this.Router.navigate(['/perfil-profesor']);

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
