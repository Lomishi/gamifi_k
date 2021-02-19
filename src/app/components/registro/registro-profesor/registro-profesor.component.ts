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

  constructor(private ProfesorService: ProfesorService
    ) { }

  ngOnInit() {

  }
  profesorModel= new registro_profesor("","","","","","")


  alta() {
    this.ProfesorService.addprofesor(this.profesorModel).subscribe(datos => {

    });
  }


}
