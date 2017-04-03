import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from '../../providers/user';
import { MercadoLibre } from '../../providers/mercadolibre';
import { Router } from "@angular/router";
import 'rxjs/add/operator/map';

@Component({
  selector: "conversacion",
  templateUrl: "pages/conversacion/conversacion.html",
  styleUrls: ["pages/conversacion/conversacion-common.css", "pages/conversacion/conversacion.css"]
})
export class ConversacionComponent implements OnInit {
  
  respuesta: string
  isLoading: boolean
  usuarioPregunta: string

  constructor(private user: User,
              private meli: MercadoLibre,
              private router: Router) {}

  ngOnInit() {
    this.usuarioPregunta = "USUARIO"
  	this.respuesta = ""
  	this.isLoading = false

    this.meli.dameNombreUsuario(this.meli.pregunta.from).map(resp => resp.json())
    .subscribe((respuesta) => {
       this.usuarioPregunta = respuesta.nickname
    }, (err) => {
        console.dump(err)
    }); 
  }

  responder() {
    this.meli.responderPregunta( {
                                    user_id_ml: this.meli.pregunta.seller_id, 
                                    question_id: this.meli.pregunta.question_id, 
                                    text: this.respuesta 
                                  })
    .map(resp => resp.json())
    .subscribe((respuesta) => {
       this.respuesta = ""
       this.meli.removerPregunta()
       this.router.navigate(["/preguntas"])
    }, (err) => {
      	console.dump(err)
    }); 
  }
  
  seleccionarPregunta(question_id, actualizar) {
    if (actualizar)
      this.meli.setPreguntaPorId(question_id)
  }

  dameFechaArgentina(fecha) {
    var date = new Date(fecha)
    date.setHours(date.getHours() + 2)
    return date
  }
}