import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../models/profesor';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  baseUrl = 'http://localhost/';

  constructor( private http: HttpClient) { }

  addprofesor(profesor){
      return this.http.post(`${this.baseUrl}altaProfesor.php`, JSON.stringify(profesor));
}


}










