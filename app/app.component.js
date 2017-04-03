"use strict";
var core_1 = require("@angular/core");
var user_1 = require("./providers/user");
var mercadolibre_1 = require("./providers/mercadolibre");
var AppComponent = (function () {
    function AppComponent(user, meli, zone) {
        user.socket.on('actualizarPreguntas', function (resource) {
            zone.run(function () {
                meli.actualizarPreguntas({});
            });
        });
        user.socket.on('nuevaCuenta', function (resultado) {
            zone.run(function () {
                console.log("actualizo las cuentas");
                user.actualizarCuentas({});
            });
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "main",
        template: "<page-router-outlet></page-router-outlet>"
    }),
    __metadata("design:paramtypes", [user_1.User, mercadolibre_1.MercadoLibre, core_1.NgZone])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFnRDtBQUNoRCx5Q0FBd0M7QUFDeEMseURBQXdEO0FBTXhELElBQWEsWUFBWTtJQUN4QixzQkFBWSxJQUFVLEVBQUUsSUFBa0IsRUFBRSxJQUFZO1FBRXZELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLFVBQUMsUUFBUTtZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsU0FBUztZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtnQkFDeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSwyQ0FBMkM7S0FDdEQsQ0FBQztxQ0FFaUIsV0FBSSxFQUFRLDJCQUFZLEVBQVEsYUFBTTtHQUQ1QyxZQUFZLENBaUJ4QjtBQWpCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vcHJvdmlkZXJzL3VzZXInO1xuaW1wb3J0IHsgTWVyY2Fkb0xpYnJlIH0gZnJvbSAnLi9wcm92aWRlcnMvbWVyY2Fkb2xpYnJlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1haW5cIixcbiAgdGVtcGxhdGU6IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcih1c2VyOiBVc2VyLCBtZWxpOiBNZXJjYWRvTGlicmUsIHpvbmU6IE5nWm9uZSkge1xuICAgIFxuXHRcdHVzZXIuc29ja2V0Lm9uKCdhY3R1YWxpemFyUHJlZ3VudGFzJywgKHJlc291cmNlKSA9PiB7XG5cdFx0XHR6b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVsaS5hY3R1YWxpemFyUHJlZ3VudGFzKHt9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIFx0fSlcblxuICAgIFx0dXNlci5zb2NrZXQub24oJ251ZXZhQ3VlbnRhJywgKHJlc3VsdGFkbykgPT4ge1xuXHRcdFx0ICB6b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJhY3R1YWxpem8gbGFzIGN1ZW50YXNcIilcbiAgXHRcdFx0XHR1c2VyLmFjdHVhbGl6YXJDdWVudGFzKHt9KVxuICAgICAgICAgIH0pO1xuICAgIFx0fSlcblxuXHR9XG59Il19