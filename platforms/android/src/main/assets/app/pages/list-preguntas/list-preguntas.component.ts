import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MercadoLibre } from '../../providers/mercadolibre';
import { User } from '../../providers/user';
import { Router } from "@angular/router";

@Component({
  selector: "list",
  templateUrl: "pages/list-preguntas/list-preguntas.html",
  styleUrls: ["pages/list-preguntas/list-preguntas-common.css", "pages/list-preguntas/list-preguntas.css"]
})
export class ListPreguntasComponent implements OnInit {
  
  isLoading: boolean = false
  constructor(private meli: MercadoLibre,
              private user: User,
              private router: Router) {

  }
  
  ngOnInit() {
    this.isLoading = true
  	this.meli.actualizarPreguntas({}).map(res => res.json())
      .subscribe(res => {
          this.isLoading = false
        });

  }

  irACuentas() {
    this.router.navigate(["/list"])
  }

  verConversacion(pregunta) {
    this.meli.setPregunta(pregunta)
    this.router.navigate(["/conversacion"])
  }

  dameFechaArgentina(fecha) {
    var date = new Date(fecha)
    date.setHours(date.getHours() + 2 )
    return date
  }

  dameNickname(id) {
    return this.user.dameNickname(id)
  }
}