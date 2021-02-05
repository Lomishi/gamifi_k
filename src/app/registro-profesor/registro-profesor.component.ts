import { Component, OnInit } from '@angular/core';
import{ registro_profesor } from '../profesor';
import{ ProfesorService } from '../profesor.service';
import{Router} from'@angular/router';
@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.component.html',
  styleUrls: ['./registro-profesor.component.css']
})
export class RegistroProfesorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  profesorModel= new registro_profesor("","","","","","")
  onSubmit(){



  }
}
