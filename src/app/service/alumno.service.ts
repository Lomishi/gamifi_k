import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registro_alumno } from '../models/alumno';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  baseUrl = 'http://localhost/';

constructor(private http: HttpClient) { }

addAlumno(alumno){
  return this.http.post(`${this.baseUrl}altaAlumno.php`, JSON.stringify(alumno));
}

}
