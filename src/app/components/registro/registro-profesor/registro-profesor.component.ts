import { Component, OnInit } from '@angular/core';
import { registro_profesor } from '../../../models/profesor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfesorService } from '../../../service/profesor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.component.html',
  styleUrls: ['./registro-profesor.component.css']
})
export class RegistroProfesorComponent implements OnInit {

  constructor(private ProfesorService: ProfesorService,
    private snackbar: MatSnackBar,
    private router: Router,
    ) { }

    profesorModel = new registro_profesor("", "", "", "", "", "");

  ngOnInit() {
  }

  onFormSubmit(itemForm: any): void {

    this.profesorModel = new registro_profesor(
      itemForm.controls.nick.value,
      itemForm.controls.email.value,
      itemForm.controls.pwd.value,
      itemForm.controls.nombre.value,
      itemForm.controls.apellidos.value,
      itemForm.controls.centro.value);

    this.ProfesorService.addprofesor(this.profesorModel).subscribe(
      datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
        }
      }
    )
    window.location.reload()


  }

}
