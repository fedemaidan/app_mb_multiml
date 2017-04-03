import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from '../../providers/user';
import { MercadoLibre } from '../../providers/mercadolibre';
import { Router } from "@angular/router";
import {WebView, LoadEventData} from "ui/web-view";
var dialogs = require("ui/dialogs");
@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent implements OnInit {
  
  isLoading: boolean
  url
  constructor(private user: User,
              private meli: MercadoLibre,
              private router: Router) {}
  ngOnInit() {

  	this.isLoading = true
    this.user.actualizarCuentas({})
    	.map(res => res.json())
	    .subscribe(res => {
	        this.isLoading = false
	      });

     this.user.socket.on('errorNuevaCuenta', (mensaje) => {
               dialogs.confirm({
              title: "Error agregando cuenta",
              message: "Ocurrio el siguiente error al intentar registrar la cuenta: " + mensaje,
              okButtonText: "Volver a intentar",
              cancelButtonText: "Cancelar",
          }).then(function (result) {
              console.log(result)
              if (result) {
                this.agregarCuenta()
              }
          });
       })
      
  }

  agregarCuenta() {
    var enrutador = this.router
    enrutador.navigate(["/web"])    
    
  }

  removerCuenta(cuenta) {
    this.meli.removerCuentaML({
      user_id_ml: cuenta.id_ml,
      nickname: cuenta.nickname
    })
  }

  irAPreguntas() {
    this.router.navigate(["/preguntas"])
  }

  logout() {
    this.user.logout()
    this.router.navigate(["/"])
  }
}