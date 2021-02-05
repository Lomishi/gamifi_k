import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ registro_alumno } from './alumno';
import { registro_profesor } from './profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor() { }

  addprofesor(){
  console.log( "funcion addprofesor " );
registro_profesor;
}
}










