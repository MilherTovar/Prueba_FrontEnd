import { Component, OnInit } from '@angular/core';
import { ContextoService } from '../../service/contexto.service';
import { RespuestaService } from '../../service/respuesta.service';
import { Respuesta } from '../../interfaces/respuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent implements OnInit {

  contexto = '';
  pregunta = '';
  paso: number = null;
  respuestas: Respuesta[] = null;
  des_respuesta: Respuesta[];
  items: number[] = [1, 2, 3, 4, 5];

  constructor(
    private contextService: ContextoService,
    private respuestaService: RespuestaService
  ) { }

  ngOnInit() {
    this.paso = 0;
    this.contextService.getContext(3)
      .subscribe(contexto => {
        this.contexto = contexto.context;
        this.pregunta = contexto.pregunta;
      });
    this.respuestaService.getAllRespuestas()
      .subscribe(respuestas => {
        this.respuestas = respuestas.filter(respuesta => respuesta.id_contexto == 3);
      });
    console.log(this.paso);
  }

  incrementar() {
    if (this.paso < 4) {
      this.paso++;
      this.contextService.getContext(this.paso + 3)
        .subscribe(contexto => {
          this.contexto = contexto.context;
          this.pregunta = contexto.pregunta;
        });
      this.respuestaService.getAllRespuestas()
        .subscribe(respuestas => {
          this.respuestas = respuestas.filter(respuesta => respuesta.id_contexto == this.paso + 3);
        });
    }
    this.des_respuesta = null;
  }

  ubicar_respuesta(id: number) {
    this.respuestaService.getAllRespuestas()
      .subscribe(respuestas => {
        this.des_respuesta = respuestas;
        //this.respuestas=respuestas;
        //console.log(this.respuestas);
        console.log(this.des_respuesta);
      });
    console.log("Entro " + id);
  }

  ubicar_contexto(id: number) {
    console.log("Botón: " + id);
    this.contextService.getContext(id + 3)
      .subscribe(contexto => {
        this.contexto = contexto.context;
        this.pregunta = contexto.pregunta;
      });
    this.respuestaService.getAllRespuestas()
      .subscribe(respuestas => {
        this.respuestas = respuestas.filter(respuesta => respuesta.id_contexto == id + 3);
      });
    this.des_respuesta = null;
    this.paso=id;
  }

}
