import { Component, OnInit } from '@angular/core';
import{ registro_profesor } from '../../../models/profesor';
import { MatSnackBar } from '@angular/material/snack-bar';
import{ ProfesorService } from '../../../service/profesor.service';
import{Router} from'@angular/router';

@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.component.html',
  styleUrls: ['./registro-profesor.component.css']
})




export class RegistroProfesorComponent implements OnInit {

  constructor(private ProfesorService: ProfesorService,
    private snackbar: MatSnackBar,
    private router:Router,) { }

  ngOnInit() {

  }
  profesorModel= new registro_profesor("","","","","","")

  onSubmit(){
    this.ProfesorService.addprofesor(this.profesorModel).subscribe(
      (value:any) => {
        console.log("respuesta de el servidor"+value);

        this.snackbar.open('profesor guardado',undefined,{
          duration:1500,
        });
        this.router.navigate(['/profesor']);
      },
      (error: any) => {
        console.log(error);
      }

    )



  }

}
