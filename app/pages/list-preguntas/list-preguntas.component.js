"use strict";
var core_1 = require("@angular/core");
var mercadolibre_1 = require("../../providers/mercadolibre");
var user_1 = require("../../providers/user");
var router_1 = require("@angular/router");
var ListPreguntasComponent = (function () {
    function ListPreguntasComponent(meli, user, router) {
        this.meli = meli;
        this.user = user;
        this.router = router;
        this.isLoading = false;
    }
    ListPreguntasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.meli.actualizarPreguntas({}).map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.isLoading = false;
        });
    };
    ListPreguntasComponent.prototype.irACuentas = function () {
        this.router.navigate(["/list"]);
    };
    ListPreguntasComponent.prototype.verConversacion = function (pregunta) {
        this.meli.setPregunta(pregunta);
        this.router.navigate(["/conversacion"]);
    };
    ListPreguntasComponent.prototype.dameFechaArgentina = function (fecha) {
        var date = new Date(fecha);
        date.setHours(date.getHours() + 2);
        return date;
    };
    ListPreguntasComponent.prototype.dameNickname = function (id) {
        return this.user.dameNickname(id);
    };
    return ListPreguntasComponent;
}());
ListPreguntasComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list-preguntas/list-preguntas.html",
        styleUrls: ["pages/list-preguntas/list-preguntas-common.css", "pages/list-preguntas/list-preguntas.css"]
    }),
    __metadata("design:paramtypes", [mercadolibre_1.MercadoLibre,
        user_1.User,
        router_1.Router])
], ListPreguntasComponent);
exports.ListPreguntasComponent = ListPreguntasComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1wcmVndW50YXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC1wcmVndW50YXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsNkRBQTREO0FBQzVELDZDQUE0QztBQUM1QywwQ0FBeUM7QUFPekMsSUFBYSxzQkFBc0I7SUFHakMsZ0NBQW9CLElBQWtCLEVBQ2xCLElBQVUsRUFDVixNQUFjO1FBRmQsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUhsQyxjQUFTLEdBQVksS0FBSyxDQUFBO0lBSzFCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDcEQsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRVQsQ0FBQztJQUVELDJDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELGdEQUFlLEdBQWYsVUFBZ0IsUUFBUTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUVELG1EQUFrQixHQUFsQixVQUFtQixLQUFLO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBRSxDQUFBO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRUQsNkNBQVksR0FBWixVQUFhLEVBQUU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQztBQXBDWSxzQkFBc0I7SUFMbEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsU0FBUyxFQUFFLENBQUMsZ0RBQWdELEVBQUUseUNBQXlDLENBQUM7S0FDekcsQ0FBQztxQ0FJMEIsMkJBQVk7UUFDWixXQUFJO1FBQ0YsZUFBTTtHQUx2QixzQkFBc0IsQ0FvQ2xDO0FBcENZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWVyY2Fkb0xpYnJlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL21lcmNhZG9saWJyZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0LXByZWd1bnRhcy9saXN0LXByZWd1bnRhcy5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC1wcmVndW50YXMvbGlzdC1wcmVndW50YXMtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QtcHJlZ3VudGFzL2xpc3QtcHJlZ3VudGFzLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0UHJlZ3VudGFzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVsaTogTWVyY2Fkb0xpYnJlLFxuICAgICAgICAgICAgICBwcml2YXRlIHVzZXI6IFVzZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWVcbiAgXHR0aGlzLm1lbGkuYWN0dWFsaXphclByZWd1bnRhcyh7fSkubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgfVxuXG4gIGlyQUN1ZW50YXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pXG4gIH1cblxuICB2ZXJDb252ZXJzYWNpb24ocHJlZ3VudGEpIHtcbiAgICB0aGlzLm1lbGkuc2V0UHJlZ3VudGEocHJlZ3VudGEpXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NvbnZlcnNhY2lvblwiXSlcbiAgfVxuXG4gIGRhbWVGZWNoYUFyZ2VudGluYShmZWNoYSkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoZmVjaGEpXG4gICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyAyIClcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgZGFtZU5pY2tuYW1lKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlci5kYW1lTmlja25hbWUoaWQpXG4gIH1cbn0iXX0=