import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";
import { Api } from "./providers/api";
import { User } from "./providers/user";
import { Database } from "./providers/database";
import { MercadoLibre } from "./providers/mercadolibre";


import { AppComponent } from "./app.component";

@NgModule({
  imports: [NativeScriptModule,
  			NativeScriptFormsModule,
  			NativeScriptHttpModule,NativeScriptRouterModule,
    		NativeScriptRouterModule.forRoot(routes)
    	],
  declarations: [AppComponent,
  				...navigatableComponents],
  bootstrap: [AppComponent],
  providers: [ Database, User, Api, MercadoLibre]
})
export class AppModule {}
