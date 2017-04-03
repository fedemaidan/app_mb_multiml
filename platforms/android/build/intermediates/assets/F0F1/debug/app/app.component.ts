import {Component, NgZone} from '@angular/core';
import { User } from './providers/user';
import { MercadoLibre } from './providers/mercadolibre';

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
	constructor(user: User, meli: MercadoLibre, zone: NgZone) {
    
		user.socket.on('actualizarPreguntas', (resource) => {
			zone.run(() => {
                meli.actualizarPreguntas({});
            });
    	})

    	user.socket.on('nuevaCuenta', (resultado) => {
			  zone.run(() => {
          console.log("actualizo las cuentas")
  				user.actualizarCuentas({})
          });
    	})

	}
}