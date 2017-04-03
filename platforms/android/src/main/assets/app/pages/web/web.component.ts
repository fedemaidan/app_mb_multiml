import {Component, OnInit, ViewChild} from "@angular/core";
import {WebView, LoadEventData} from "ui/web-view";
import { Page } from "ui/page";
import { MercadoLibre } from '../../providers/mercadolibre';
import { User } from '../../providers/user';
import { Api } from '../../providers/api';
import { Router } from "@angular/router";


@Component({
    selector: 'basic-web-view-component',
    template: '<WebView id="webview" ></WebView><ActionBar class="action-bar"  title="Login ML"></ActionBar>'
})
export class WebComponent implements OnInit {

    constructor(
      private page: Page,
      public user: User,
      public api: Api,
      public mercadolibre: MercadoLibre,
      private router: Router
	  ){}
    
    ngOnInit() {
        var accountInfo = { user: this.user._user}
        let webview: WebView = this.page.getViewById<WebView>("webview");

            this.mercadolibre.urlIniML(accountInfo).map(
              res => res.json()).subscribe(data => {
                
                webview.url = data.url;
                var self = this
                webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
                    
                    if (args.url.indexOf("mercadolibre") == -1) {
                        self.user.actualizarCuentas({})
                        self.router.navigate(["/list"])
                    }
                });
            })
    }
}