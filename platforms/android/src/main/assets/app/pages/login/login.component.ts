import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from '../../providers/user';
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

@Component({
  selector: "my-app",
  templateUrl: 'pages/login/login.html',
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent  implements OnInit{
  account: {name: string, password: string} = {
    name: 'mariano',
    password: 'mariano'
  };
  esLogin: boolean
  isLoading: boolean

  color1 =  new Color("#FFF059")
  color2 =  new Color("#2F3475")

  constructor(private user: User,
              private router: RouterExtensions,
              private page: Page) {}

  ngOnInit() {
    if(this.user._user) {
      this.router.navigate(["/preguntas"], { clearHistory: true })
    }

    this.esLogin = true
    this.page.actionBarHidden = true;
    this.page.backgroundColor = this.color1
    this.isLoading = false
  }

  submit() {
    if (this.esLogin) {
        this.isLoading = true
        this.user.login(this.account).subscribe((resp) => {
          if (resp.json().success == true){
            this.router.navigate(["/preguntas"], { clearHistory: true })
          }
          else
            {
              this.isLoading = false
              alert(resp.json().msg)
            }
        }, (err) => {
          this.isLoading = false
          console.dump(err)
          alert("Fallo en el servidor")
        });
    }
    else {
      this.isLoading = true
      this.user.signup(this.account).subscribe((resp) => {
          if (resp.json().success == true) {
            this.isLoading = false
            this.toggleDisplay()
          }
          else
          {
            this.isLoading = false
            alert(resp.json().msg)
          }
        }, (err) => {
          this.isLoading = false
          console.dump(err)
          alert("Fallo en el servidor")
        }); 
    }
  }

  toggleDisplay() {
    this.esLogin = !this.esLogin;
 
    this.page.animate({
      backgroundColor: this.esLogin ? this.color1 : this.color2,
      duration: 200
    })
}

}