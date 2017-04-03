"use strict";
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
require("rxjs/add/operator/map");
var Database = (function () {
    function Database() {
        var self = this;
        new Sqlite("db", function (err, db) {
            if (err) {
                console.error("We failed to open database", err);
            }
            else {
                self.inicializar(db);
            }
        });
    }
    Database.prototype.crearEstructuraDB = function () {
        var usuario = "Create table usuario (usuario varchar(255), token varchar(255)); ";
        this.db.execSQL(usuario);
        this.db.version(1);
    };
    Database.prototype.inicializar = function (db) {
        var self = this;
        this.db = db;
        this.getDB().version(function (err, ver) {
            if (ver == 0) {
                self.crearEstructuraDB();
            }
        });
    };
    Database.prototype.getDB = function () {
        return this.db;
    };
    Database.prototype.dameUsuario = function () {
        return this.getDB().get('select usuario, token from usuario');
    };
    Database.prototype.insertarUsuario = function (nombre, token) {
        return this.db.execSQL("insert into usuario (usuario, token ) values (?,?);", [nombre, token]);
    };
    Database.prototype.borrarUsuarios = function () {
        return this.db.execSQL("delete from usuario");
    };
    return Database;
}());
Database = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Database);
exports.Database = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBRSxxQkFBcUIsQ0FBRSxDQUFDO0FBQzlDLGlDQUErQjtBQUcvQixJQUFhLFFBQVE7SUFJcEI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBUyxHQUFHLEVBQUUsRUFBRTtZQUMxQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDdEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNJLElBQUksT0FBTyxHQUFHLG1FQUFtRSxDQUFBO1FBQ2pGLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFSCw4QkFBVyxHQUFYLFVBQVksRUFBRTtRQUNiLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEdBQUcsRUFBRSxHQUFHO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBQzFCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUdULENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGtDQUFlLEdBQWYsVUFBZ0IsTUFBTSxFQUFFLEtBQUs7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLHFEQUFxRCxFQUFFLENBQUUsTUFBTSxFQUFDLEtBQUssQ0FBRyxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0YsZUFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUFoRFksUUFBUTtJQURwQixpQkFBVSxFQUFFOztHQUNBLFFBQVEsQ0FnRHBCO0FBaERZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xudmFyIFNxbGl0ZSA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiICk7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZSB7XG5cblx0ZGJcblx0XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHZhciBzZWxmID0gdGhpc1xuXHRcdG5ldyBTcWxpdGUoXCJkYlwiLCBmdW5jdGlvbihlcnIsIGRiKSB7XG5cdCAgICAgICAgaWYgKGVycikge1xuXHQgICAgICAgICAgY29uc29sZS5lcnJvcihcIldlIGZhaWxlZCB0byBvcGVuIGRhdGFiYXNlXCIsIGVycik7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHNlbGYuaW5pY2lhbGl6YXIoZGIpXG5cdCAgICAgICAgfVxuXHQgICAgfSlcblx0fVxuXG5cdGNyZWFyRXN0cnVjdHVyYURCKCkge1xuICAgIFx0dmFyIHVzdWFyaW8gPSBcIkNyZWF0ZSB0YWJsZSB1c3VhcmlvICh1c3VhcmlvIHZhcmNoYXIoMjU1KSwgdG9rZW4gdmFyY2hhcigyNTUpKTsgXCJcblx0ICAgIHRoaXMuZGIuZXhlY1NRTCh1c3VhcmlvKTtcblx0ICAgIHRoaXMuZGIudmVyc2lvbigxKTsgXG5cdCAgfSBcblxuXHRpbmljaWFsaXphcihkYikge1xuXHRcdHZhciBzZWxmID0gdGhpc1xuXHRcdHRoaXMuZGIgPSBkYlxuXHRcdHRoaXMuZ2V0REIoKS52ZXJzaW9uKGZ1bmN0aW9uKGVyciwgdmVyKSB7XG5cdCAgICAgICAgaWYgKHZlciA9PSAwKSB7XG5cdCAgICAgICAgICBzZWxmLmNyZWFyRXN0cnVjdHVyYURCKClcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHRcdFxuXHQgICAgICBcblx0fVxuXG5cdGdldERCKCkge1xuXHRcdHJldHVybiB0aGlzLmRiXG5cdH1cblxuXHRkYW1lVXN1YXJpbygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXREQigpLmdldCgnc2VsZWN0IHVzdWFyaW8sIHRva2VuIGZyb20gdXN1YXJpbycpO1xuXHR9XG5cblx0aW5zZXJ0YXJVc3VhcmlvKG5vbWJyZSwgdG9rZW4pIHtcblx0XHRyZXR1cm4gdGhpcy5kYi5leGVjU1FMKFwiaW5zZXJ0IGludG8gdXN1YXJpbyAodXN1YXJpbywgdG9rZW4gKSB2YWx1ZXMgKD8sPyk7XCIsIFsgbm9tYnJlLHRva2VuICBdKTtcblx0fVxuXG5cdGJvcnJhclVzdWFyaW9zKCkge1xuXHRcdHJldHVybiB0aGlzLmRiLmV4ZWNTUUwoXCJkZWxldGUgZnJvbSB1c3VhcmlvXCIpO1xuXHR9XG59XG4iXX0=