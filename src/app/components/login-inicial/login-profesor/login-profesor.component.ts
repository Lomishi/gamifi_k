import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';

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

    this.profesorService.addprofesor(this.profesorModel).subscribe(
      (datos: Profesor) => {
        if (datos['result'] === 'OK') {
          this.Router.navigate(['/perfil-alumno']);

        }
      }
    )

  }

}
