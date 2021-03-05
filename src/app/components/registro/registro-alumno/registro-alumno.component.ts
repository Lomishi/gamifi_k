import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno';
import { AlumnoService } from '../../../service/alumno.service';
import { Router } from'@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
  constructor(private alumnoService: AlumnoService,
    private Router: Router,
    private formBuilder: FormBuilder,
    ) { }

    alumnoModel = new Alumno("", "", "", "", "");

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nick: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.minLength(6)]],
      confirmpwd: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],

    }, {
      validator: MustMatch('pwd', 'confirmpwd')
  });
  }


  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }



  onFormSubmit(itemForm: any): void {


    this.alumnoModel = new Alumno(
      itemForm.controls.nick.value,
      itemForm.controls.pwd.value,
      itemForm.controls.email.value,
      itemForm.controls.nombre.value,
      itemForm.controls.apellidos.value);

    this.alumnoService.addAlumno(this.alumnoModel).subscribe(
      (datos: Alumno) => {
        if (datos['result'] === 'OK') {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Alumno registrado.',
            showConfirmButton: false,
            timer: 1500
          })
          this.Router.navigate(['/login']);

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
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {

          return;
      }


      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
