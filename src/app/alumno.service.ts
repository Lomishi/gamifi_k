import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registro_alumno } from './alumno';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
baseUrl = environment.baseurl;

constructor(private http: HttpClient) { }

addalumno(alumno : registro_alumno){

return this.http.post(`${this.baseUrl}/altaAlumno.php`, alumno)
}

}
