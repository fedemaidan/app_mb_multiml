"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../../providers/user");
var mercadolibre_1 = require("../../providers/mercadolibre");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var ListComponent = (function () {
    function ListComponent(user, meli, router) {
        this.user = user;
        this.meli = meli;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.user.actualizarCuentas({})
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.isLoading = false;
        });
        this.user.socket.on('errorNuevaCuenta', function (mensaje) {
            dialogs.confirm({
                title: "Error agregando cuenta",
                message: "Ocurrio el siguiente error al intentar registrar la cuenta: " + mensaje,
                okButtonText: "Volver a intentar",
                cancelButtonText: "Cancelar",
            }).then(function (result) {
                console.log(result);
                if (result) {
                    this.agregarCuenta();
                }
            });
        });
    };
    ListComponent.prototype.agregarCuenta = function () {
        var enrutador = this.router;
        enrutador.navigate(["/web"]);
    };
    ListComponent.prototype.removerCuenta = function (cuenta) {
        this.meli.removerCuentaML({
            user_id_ml: cuenta.id_ml,
            nickname: cuenta.nickname
        });
    };
    ListComponent.prototype.irAPreguntas = function () {
        this.router.navigate(["/preguntas"]);
    };
    ListComponent.prototype.logout = function () {
        this.user.logout();
        this.router.navigate(["/"]);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
    }),
    __metadata("design:paramtypes", [user_1.User,
        mercadolibre_1.MercadoLibre,
        router_1.Router])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBQ3pFLDZDQUE0QztBQUM1Qyw2REFBNEQ7QUFDNUQsMENBQXlDO0FBRXpDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQU1wQyxJQUFhLGFBQWE7SUFJeEIsdUJBQW9CLElBQVUsRUFDVixJQUFrQixFQUNsQixNQUFjO1FBRmQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFDdEMsZ0NBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXJCQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQzthQUM3QixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLE9BQU87WUFDdEMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDakIsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsT0FBTyxFQUFFLDhEQUE4RCxHQUFHLE9BQU87Z0JBQ2pGLFlBQVksRUFBRSxtQkFBbUI7Z0JBQ2pDLGdCQUFnQixFQUFFLFVBQVU7YUFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU07Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ25CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ1gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUN0QixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUVQLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0UsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUMzQixTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUU5QixDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFjLE1BQU07UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDeEIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFyREQsSUFxREM7QUFyRFksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztLQUNqRSxDQUFDO3FDQUswQixXQUFJO1FBQ0osMkJBQVk7UUFDVixlQUFNO0dBTnZCLGFBQWEsQ0FxRHpCO0FBckRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VzZXInO1xuaW1wb3J0IHsgTWVyY2Fkb0xpYnJlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL21lcmNhZG9saWJyZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1dlYlZpZXcsIExvYWRFdmVudERhdGF9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgaXNMb2FkaW5nOiBib29sZWFuXG4gIHVybFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXI6IFVzZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgbWVsaTogTWVyY2Fkb0xpYnJlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuICBuZ09uSW5pdCgpIHtcblxuICBcdHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgIHRoaXMudXNlci5hY3R1YWxpemFyQ3VlbnRhcyh7fSlcbiAgICBcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG5cdCAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG5cdCAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuXHQgICAgICB9KTtcblxuICAgICB0aGlzLnVzZXIuc29ja2V0Lm9uKCdlcnJvck51ZXZhQ3VlbnRhJywgKG1lbnNhamUpID0+IHtcbiAgICAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIGFncmVnYW5kbyBjdWVudGFcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJPY3VycmlvIGVsIHNpZ3VpZW50ZSBlcnJvciBhbCBpbnRlbnRhciByZWdpc3RyYXIgbGEgY3VlbnRhOiBcIiArIG1lbnNhamUsXG4gICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJWb2x2ZXIgYSBpbnRlbnRhclwiLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCIsXG4gICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWdyZWdhckN1ZW50YSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICB9KVxuICAgICAgXG4gIH1cblxuICBhZ3JlZ2FyQ3VlbnRhKCkge1xuICAgIHZhciBlbnJ1dGFkb3IgPSB0aGlzLnJvdXRlclxuICAgIGVucnV0YWRvci5uYXZpZ2F0ZShbXCIvd2ViXCJdKSAgICBcbiAgICBcbiAgfVxuXG4gIHJlbW92ZXJDdWVudGEoY3VlbnRhKSB7XG4gICAgdGhpcy5tZWxpLnJlbW92ZXJDdWVudGFNTCh7XG4gICAgICB1c2VyX2lkX21sOiBjdWVudGEuaWRfbWwsXG4gICAgICBuaWNrbmFtZTogY3VlbnRhLm5pY2tuYW1lXG4gICAgfSlcbiAgfVxuXG4gIGlyQVByZWd1bnRhcygpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcHJlZ3VudGFzXCJdKVxuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMudXNlci5sb2dvdXQoKVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pXG4gIH1cbn0iXX0=