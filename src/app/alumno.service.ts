import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ registro_alumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor() { }

addalumno(){
  console.log( "funcion addalumno " );
registro_alumno;
}


}
