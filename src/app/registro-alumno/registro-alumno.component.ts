import { Component, OnInit } from '@angular/core';
import{ registro_alumno } from '../alumno';
import{ AlumnoService } from '../alumno.service';
import{Router} from'@angular/router';
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


    hola;
  ngOnInit() {
    this.hola = 5;
  }

  alumnoModel= new registro_alumno("","","","","")

  onSubmit(){
    this.alumnoService.addalumno(this.alumnoModel).subscribe(
      (value:any) => {
        console.log("respuesta de el servidor"+value);

        this.snackBar.open('profesor guardado',undefined,{
          duration:1500,
        });
        this.Router.navigate(['/profesor']);
      },
      (error: any) => {
        console.log(error);
      }
    )



  }
}
