import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{ registro_alumno } from '../alumno';
import{ AlumnoService } from '../alumno.service';
import{Router} from'@angular/router';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent implements OnInit {

  constructor(private alumnoService: AlumnoService,
private Router: Router,
    ) { }

  ngOnInit(): void {
  }

  alumnoModel= new registro_alumno("","","","","")

onSubmit(){
console.log(this.alumnoModel.nick);
console.log(this.alumnoModel.email);
console.log(this.alumnoModel.pwd);
console.log(this.alumnoModel.nombre);
console.log(this.alumnoModel.apellidos);


}
}
