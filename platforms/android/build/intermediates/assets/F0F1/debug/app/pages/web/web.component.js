"use strict";
var core_1 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var page_1 = require("ui/page");
var mercadolibre_1 = require("../../providers/mercadolibre");
var user_1 = require("../../providers/user");
var api_1 = require("../../providers/api");
var router_1 = require("@angular/router");
var WebComponent = (function () {
    function WebComponent(page, user, api, mercadolibre, router) {
        this.page = page;
        this.user = user;
        this.api = api;
        this.mercadolibre = mercadolibre;
        this.router = router;
    }
    WebComponent.prototype.ngOnInit = function () {
        var _this = this;
        var accountInfo = { user: this.user._user };
        var webview = this.page.getViewById("webview");
        this.mercadolibre.urlIniML(accountInfo).map(function (res) { return res.json(); }).subscribe(function (data) {
            webview.url = data.url;
            var self = _this;
            webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
                if (args.url.indexOf("mercadolibre") == -1) {
                    self.user.actualizarCuentas({});
                    self.router.navigate(["/list"]);
                }
            });
        });
    };
    return WebComponent;
}());
WebComponent = __decorate([
    core_1.Component({
        selector: 'basic-web-view-component',
        template: '<WebView id="webview" ></WebView><ActionBar class="action-bar"  title="Login ML"></ActionBar>'
    }),
    __metadata("design:paramtypes", [page_1.Page,
        user_1.User,
        api_1.Api,
        mercadolibre_1.MercadoLibre,
        router_1.Router])
], WebComponent);
exports.WebComponent = WebComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCx3Q0FBbUQ7QUFDbkQsZ0NBQStCO0FBQy9CLDZEQUE0RDtBQUM1RCw2Q0FBNEM7QUFDNUMsMkNBQTBDO0FBQzFDLDBDQUF5QztBQU96QyxJQUFhLFlBQVk7SUFFckIsc0JBQ1UsSUFBVSxFQUNYLElBQVUsRUFDVixHQUFRLEVBQ1IsWUFBMEIsRUFDekIsTUFBYztRQUpkLFNBQUksR0FBSixJQUFJLENBQU07UUFDWCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUNSLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDdkIsQ0FBQztJQUVGLCtCQUFRLEdBQVI7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxXQUFXLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQTtRQUMxQyxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBVSxTQUFTLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQ3pDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFFL0IsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQTtZQUNmLE9BQU8sQ0FBQyxFQUFFLENBQUMsa0JBQU8sQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLElBQW1CO2dCQUUvRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUE7b0JBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtnQkFDbkMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsUUFBUSxFQUFFLCtGQUErRjtLQUM1RyxDQUFDO3FDQUlrQixXQUFJO1FBQ0wsV0FBSTtRQUNMLFNBQUc7UUFDTSwyQkFBWTtRQUNqQixlQUFNO0dBUGYsWUFBWSxDQTRCeEI7QUE1Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1dlYlZpZXcsIExvYWRFdmVudERhdGF9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBNZXJjYWRvTGlicmUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvbWVyY2Fkb2xpYnJlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdXNlcic7XG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Jhc2ljLXdlYi12aWV3LWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGU6ICc8V2ViVmlldyBpZD1cIndlYnZpZXdcIiA+PC9XZWJWaWV3PjxBY3Rpb25CYXIgY2xhc3M9XCJhY3Rpb24tYmFyXCIgIHRpdGxlPVwiTG9naW4gTUxcIj48L0FjdGlvbkJhcj4nXG59KVxuZXhwb3J0IGNsYXNzIFdlYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgIHB1YmxpYyB1c2VyOiBVc2VyLFxuICAgICAgcHVibGljIGFwaTogQXBpLFxuICAgICAgcHVibGljIG1lcmNhZG9saWJyZTogTWVyY2Fkb0xpYnJlLFxuICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuXHQgICl7fVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB2YXIgYWNjb3VudEluZm8gPSB7IHVzZXI6IHRoaXMudXNlci5fdXNlcn1cbiAgICAgICAgbGV0IHdlYnZpZXc6IFdlYlZpZXcgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8V2ViVmlldz4oXCJ3ZWJ2aWV3XCIpO1xuXG4gICAgICAgICAgICB0aGlzLm1lcmNhZG9saWJyZS51cmxJbmlNTChhY2NvdW50SW5mbykubWFwKFxuICAgICAgICAgICAgICByZXMgPT4gcmVzLmpzb24oKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHdlYnZpZXcudXJsID0gZGF0YS51cmw7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgICAgICAgICAgd2Vidmlldy5vbihXZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogTG9hZEV2ZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MudXJsLmluZGV4T2YoXCJtZXJjYWRvbGlicmVcIikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXNlci5hY3R1YWxpemFyQ3VlbnRhcyh7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cbn0iXX0=