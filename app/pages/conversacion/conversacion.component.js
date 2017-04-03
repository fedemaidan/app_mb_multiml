"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../../providers/user");
var mercadolibre_1 = require("../../providers/mercadolibre");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var ConversacionComponent = (function () {
    function ConversacionComponent(user, meli, router) {
        this.user = user;
        this.meli = meli;
        this.router = router;
    }
    ConversacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioPregunta = "USUARIO";
        this.respuesta = "";
        this.isLoading = false;
        this.meli.dameNombreUsuario(this.meli.pregunta.from).map(function (resp) { return resp.json(); })
            .subscribe(function (respuesta) {
            _this.usuarioPregunta = respuesta.nickname;
        }, function (err) {
            console.dump(err);
        });
    };
    ConversacionComponent.prototype.responder = function () {
        var _this = this;
        this.meli.responderPregunta({
            user_id_ml: this.meli.pregunta.seller_id,
            question_id: this.meli.pregunta.question_id,
            text: this.respuesta
        })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (respuesta) {
            _this.respuesta = "";
            _this.meli.removerPregunta();
            _this.router.navigate(["/preguntas"]);
        }, function (err) {
            console.dump(err);
        });
    };
    ConversacionComponent.prototype.seleccionarPregunta = function (question_id, actualizar) {
        if (actualizar)
            this.meli.setPreguntaPorId(question_id);
    };
    ConversacionComponent.prototype.dameFechaArgentina = function (fecha) {
        var date = new Date(fecha);
        date.setHours(date.getHours() + 2);
        return date;
    };
    return ConversacionComponent;
}());
ConversacionComponent = __decorate([
    core_1.Component({
        selector: "conversacion",
        templateUrl: "pages/conversacion/conversacion.html",
        styleUrls: ["pages/conversacion/conversacion-common.css", "pages/conversacion/conversacion.css"]
    }),
    __metadata("design:paramtypes", [user_1.User,
        mercadolibre_1.MercadoLibre,
        router_1.Router])
], ConversacionComponent);
exports.ConversacionComponent = ConversacionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2FjaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnZlcnNhY2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RTtBQUN6RSw2Q0FBNEM7QUFDNUMsNkRBQTREO0FBQzVELDBDQUF5QztBQUN6QyxpQ0FBK0I7QUFPL0IsSUFBYSxxQkFBcUI7SUFNaEMsK0JBQW9CLElBQVUsRUFDVixJQUFrQixFQUNsQixNQUFjO1FBRmQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFdEMsd0NBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUE7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFFckIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDO2FBQzVFLFNBQVMsQ0FBQyxVQUFDLFNBQVM7WUFDbEIsS0FBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFBO1FBQzVDLENBQUMsRUFBRSxVQUFDLEdBQUc7WUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFTLEdBQVQ7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUU7WUFDRyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztZQUN4QyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVztZQUMzQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDckIsQ0FBQzthQUMvQixHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDO2FBQ3hCLFNBQVMsQ0FBQyxVQUFDLFNBQVM7WUFDbEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7WUFDbkIsS0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtZQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxFQUFFLFVBQUMsR0FBRztZQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbURBQW1CLEdBQW5CLFVBQW9CLFdBQVcsRUFBRSxVQUFVO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVELGtEQUFrQixHQUFsQixVQUFtQixLQUFLO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUE7SUFDYixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBakRELElBaURDO0FBakRZLHFCQUFxQjtJQUxqQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLHNDQUFzQztRQUNuRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxxQ0FBcUMsQ0FBQztLQUNqRyxDQUFDO3FDQU8wQixXQUFJO1FBQ0osMkJBQVk7UUFDVixlQUFNO0dBUnZCLHFCQUFxQixDQWlEakM7QUFqRFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VzZXInO1xuaW1wb3J0IHsgTWVyY2Fkb0xpYnJlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL21lcmNhZG9saWJyZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjb252ZXJzYWNpb25cIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvY29udmVyc2FjaW9uL2NvbnZlcnNhY2lvbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvY29udmVyc2FjaW9uL2NvbnZlcnNhY2lvbi1jb21tb24uY3NzXCIsIFwicGFnZXMvY29udmVyc2FjaW9uL2NvbnZlcnNhY2lvbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ29udmVyc2FjaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIHJlc3B1ZXN0YTogc3RyaW5nXG4gIGlzTG9hZGluZzogYm9vbGVhblxuICB1c3VhcmlvUHJlZ3VudGE6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlcjogVXNlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZWxpOiBNZXJjYWRvTGlicmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c3VhcmlvUHJlZ3VudGEgPSBcIlVTVUFSSU9cIlxuICBcdHRoaXMucmVzcHVlc3RhID0gXCJcIlxuICBcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcblxuICAgIHRoaXMubWVsaS5kYW1lTm9tYnJlVXN1YXJpbyh0aGlzLm1lbGkucHJlZ3VudGEuZnJvbSkubWFwKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnN1YnNjcmliZSgocmVzcHVlc3RhKSA9PiB7XG4gICAgICAgdGhpcy51c3VhcmlvUHJlZ3VudGEgPSByZXNwdWVzdGEubmlja25hbWVcbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZHVtcChlcnIpXG4gICAgfSk7IFxuICB9XG5cbiAgcmVzcG9uZGVyKCkge1xuICAgIHRoaXMubWVsaS5yZXNwb25kZXJQcmVndW50YSgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZF9tbDogdGhpcy5tZWxpLnByZWd1bnRhLnNlbGxlcl9pZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbl9pZDogdGhpcy5tZWxpLnByZWd1bnRhLnF1ZXN0aW9uX2lkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzcHVlc3RhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgLm1hcChyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC5zdWJzY3JpYmUoKHJlc3B1ZXN0YSkgPT4ge1xuICAgICAgIHRoaXMucmVzcHVlc3RhID0gXCJcIlxuICAgICAgIHRoaXMubWVsaS5yZW1vdmVyUHJlZ3VudGEoKVxuICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wcmVndW50YXNcIl0pXG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgXHRjb25zb2xlLmR1bXAoZXJyKVxuICAgIH0pOyBcbiAgfVxuICBcbiAgc2VsZWNjaW9uYXJQcmVndW50YShxdWVzdGlvbl9pZCwgYWN0dWFsaXphcikge1xuICAgIGlmIChhY3R1YWxpemFyKVxuICAgICAgdGhpcy5tZWxpLnNldFByZWd1bnRhUG9ySWQocXVlc3Rpb25faWQpXG4gIH1cblxuICBkYW1lRmVjaGFBcmdlbnRpbmEoZmVjaGEpIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGZlY2hhKVxuICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpICsgMilcbiAgICByZXR1cm4gZGF0ZVxuICB9XG59Il19