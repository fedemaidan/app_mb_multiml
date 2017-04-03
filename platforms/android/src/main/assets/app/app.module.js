"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var platform_1 = require("nativescript-angular/platform");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var api_1 = require("./providers/api");
var user_1 = require("./providers/user");
var database_1 = require("./providers/database");
var mercadolibre_1 = require("./providers/mercadolibre");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule, router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
        ],
        declarations: [app_component_1.AppComponent].concat(app_routing_1.navigatableComponents),
        bootstrap: [app_component_1.AppComponent],
        providers: [database_1.Database, user_1.User, api_1.Api, mercadolibre_1.MercadoLibre]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxvREFBcUU7QUFDckUsMERBQW1FO0FBQ25FLGtEQUFtRTtBQUNuRSxzREFBdUU7QUFDdkUsNkNBQThEO0FBQzlELHVDQUFzQztBQUN0Qyx5Q0FBd0M7QUFDeEMsaURBQWdEO0FBQ2hELHlEQUF3RDtBQUd4RCxpREFBK0M7QUFhL0MsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBWHJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLDZCQUFrQjtZQUN6QiwrQkFBdUI7WUFDdkIsNkJBQXNCLEVBQUMsaUNBQXdCO1lBQzlDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO1NBQ3hDO1FBQ0osWUFBWSxHQUFHLDRCQUFZLFNBQ3BCLG1DQUFxQixDQUFDO1FBQzdCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsU0FBUyxFQUFFLENBQUUsbUJBQVEsRUFBRSxXQUFJLEVBQUUsU0FBRyxFQUFFLDJCQUFZLENBQUM7S0FDaEQsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi9wcm92aWRlcnMvYXBpXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vcHJvdmlkZXJzL3VzZXJcIjtcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIi4vcHJvdmlkZXJzL2RhdGFiYXNlXCI7XG5pbXBvcnQgeyBNZXJjYWRvTGlicmUgfSBmcm9tIFwiLi9wcm92aWRlcnMvbWVyY2Fkb2xpYnJlXCI7XG5cblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLFxuICBcdFx0XHROYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgXHRcdFx0TmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgXHRcdE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgICBcdF0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCxcbiAgXHRcdFx0XHQuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFsgRGF0YWJhc2UsIFVzZXIsIEFwaSwgTWVyY2Fkb0xpYnJlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==