"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../../providers/user");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var LoginComponent = (function () {
    function LoginComponent(user, router, page) {
        this.user = user;
        this.router = router;
        this.page = page;
        this.account = {
            name: 'mariano',
            password: 'mariano'
        };
        this.color1 = new color_1.Color("#FFF059");
        this.color2 = new color_1.Color("#2F3475");
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.user._user) {
            this.router.navigate(["/preguntas"], { clearHistory: true });
        }
        this.esLogin = true;
        this.page.actionBarHidden = true;
        this.page.backgroundColor = this.color1;
        this.isLoading = false;
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.esLogin) {
            this.isLoading = true;
            this.user.login(this.account).subscribe(function (resp) {
                if (resp.json().success == true) {
                    _this.router.navigate(["/preguntas"], { clearHistory: true });
                }
                else {
                    _this.isLoading = false;
                    alert(resp.json().msg);
                }
            }, function (err) {
                _this.isLoading = false;
                console.dump(err);
                alert("Fallo en el servidor");
            });
        }
        else {
            this.isLoading = true;
            this.user.signup(this.account).subscribe(function (resp) {
                if (resp.json().success == true) {
                    _this.isLoading = false;
                    _this.toggleDisplay();
                }
                else {
                    _this.isLoading = false;
                    alert(resp.json().msg);
                }
            }, function (err) {
                _this.isLoading = false;
                console.dump(err);
                alert("Fallo en el servidor");
            });
        }
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.esLogin = !this.esLogin;
        this.page.animate({
            backgroundColor: this.esLogin ? this.color1 : this.color2,
            duration: 200
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: 'pages/login/login.html',
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [user_1.User,
        router_1.RouterExtensions,
        page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsNkNBQTRDO0FBRTVDLHNEQUErRDtBQUMvRCxnQ0FBK0I7QUFDL0IsK0JBQThCO0FBUTlCLElBQWEsY0FBYztJQVd6Qix3QkFBb0IsSUFBVSxFQUNWLE1BQXdCLEVBQ3hCLElBQVU7UUFGVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVo5QixZQUFPLEdBQXFDO1lBQzFDLElBQUksRUFBRSxTQUFTO1lBQ2YsUUFBUSxFQUFFLFNBQVM7U0FDcEIsQ0FBQztRQUlGLFdBQU0sR0FBSSxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM5QixXQUFNLEdBQUksSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7SUFJRyxDQUFDO0lBRWxDLGlDQUFRLEdBQVI7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzlELENBQUM7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtJQUN4QixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQW9DQztRQW5DQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO2dCQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQy9CLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtnQkFDOUQsQ0FBQztnQkFDRCxJQUFJLENBQ0YsQ0FBQztvQkFDQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtvQkFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDeEIsQ0FBQztZQUNMLENBQUMsRUFBRSxVQUFDLEdBQUc7Z0JBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7Z0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2pCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7Z0JBQzFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7b0JBQ3RCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDdEIsQ0FBQztnQkFDRCxJQUFJLENBQ0osQ0FBQztvQkFDQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtvQkFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDeEIsQ0FBQztZQUNILENBQUMsRUFBRSxVQUFDLEdBQUc7Z0JBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7Z0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2pCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEIsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtZQUN6RCxRQUFRLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxxQkFBQztBQUFELENBQUMsQUF6RUQsSUF5RUM7QUF6RVksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUNyRSxDQUFDO3FDQVkwQixXQUFJO1FBQ0YseUJBQWdCO1FBQ2xCLFdBQUk7R0FibkIsY0FBYyxDQXlFMUI7QUF6RVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdXNlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWwnLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgIGltcGxlbWVudHMgT25Jbml0e1xuICBhY2NvdW50OiB7bmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nfSA9IHtcbiAgICBuYW1lOiAnbWFyaWFubycsXG4gICAgcGFzc3dvcmQ6ICdtYXJpYW5vJ1xuICB9O1xuICBlc0xvZ2luOiBib29sZWFuXG4gIGlzTG9hZGluZzogYm9vbGVhblxuXG4gIGNvbG9yMSA9ICBuZXcgQ29sb3IoXCIjRkZGMDU5XCIpXG4gIGNvbG9yMiA9ICBuZXcgQ29sb3IoXCIjMkYzNDc1XCIpXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyOiBVc2VyLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmKHRoaXMudXNlci5fdXNlcikge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3ByZWd1bnRhc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgICB9XG5cbiAgICB0aGlzLmVzTG9naW4gPSB0cnVlXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3IxXG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIGlmICh0aGlzLmVzTG9naW4pIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMudXNlci5sb2dpbih0aGlzLmFjY291bnQpLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwLmpzb24oKS5zdWNjZXNzID09IHRydWUpe1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3ByZWd1bnRhc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgIGFsZXJ0KHJlc3AuanNvbigpLm1zZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICBjb25zb2xlLmR1bXAoZXJyKVxuICAgICAgICAgIGFsZXJ0KFwiRmFsbG8gZW4gZWwgc2Vydmlkb3JcIilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG4gICAgICB0aGlzLnVzZXIuc2lnbnVwKHRoaXMuYWNjb3VudCkuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3AuanNvbigpLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIGFsZXJ0KHJlc3AuanNvbigpLm1zZylcbiAgICAgICAgICB9XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgY29uc29sZS5kdW1wKGVycilcbiAgICAgICAgICBhbGVydChcIkZhbGxvIGVuIGVsIHNlcnZpZG9yXCIpXG4gICAgICAgIH0pOyBcbiAgICB9XG4gIH1cblxuICB0b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuZXNMb2dpbiA9ICF0aGlzLmVzTG9naW47XG4gXG4gICAgdGhpcy5wYWdlLmFuaW1hdGUoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmVzTG9naW4gPyB0aGlzLmNvbG9yMSA6IHRoaXMuY29sb3IyLFxuICAgICAgZHVyYXRpb246IDIwMFxuICAgIH0pXG59XG5cbn0iXX0=