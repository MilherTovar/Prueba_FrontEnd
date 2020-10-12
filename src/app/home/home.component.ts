import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nombre = '';
  apellido='';
  correo='';
  telefono='';

  constructor(
    private personaService: UsuarioService
  ){}

  ngOnInit(){
    this.personaService.getpersona('1')
    .subscribe(persona=>{
      this.nombre=persona.nombre;
      this.apellido=persona.apellido;
      this.correo=persona.apellido;
      this.telefono=persona.telefono;
    });
  }

}
