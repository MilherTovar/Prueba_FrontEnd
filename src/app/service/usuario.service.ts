import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Persona } from './../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private api='http://localhost:8080/api';

  constructor(
    private http:HttpClient
  ) { }

  getAllPersons(){
    const path=`${this.api}/persona/`;
    return this.http.get<Persona[]>(path);
  }

  getpersona(id:string){
    const path=`${this.api}/persona/user/?id=${id}`;
    return this.http.get<Persona>(path);
  }

}
