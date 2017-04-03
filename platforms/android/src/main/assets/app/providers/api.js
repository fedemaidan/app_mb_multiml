"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Api = (function () {
    function Api(http) {
        this.http = http;
    }
    Api.prototype.get = function (url, endpoint, params, options) {
        // Support easy query params for GET requests
        if (params) {
            var p = new http_1.URLSearchParams();
            for (var k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return this.http.get(url + '/' + endpoint, options);
    };
    Api.prototype.post = function (url, endpoint, body, options) {
        return this.http.post(url + '/' + endpoint, body, options);
    };
    Api.prototype.put = function (url, endpoint, body, options) {
        return this.http.put(url + '/' + endpoint, body, options);
    };
    Api.prototype.delete = function (url, endpoint, body, options) {
        return this.http.post(url + '/' + endpoint, body, options);
    };
    Api.prototype.patch = function (url, endpoint, body, options) {
        return this.http.put(url + '/' + endpoint, body, options);
    };
    return Api;
}());
Api = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Api);
exports.Api = Api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXNFO0FBQ3RFLGlDQUErQjtBQUcvQixJQUFhLEdBQUc7SUFFZCxhQUFtQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUM3QixDQUFDO0lBRUQsaUJBQUcsR0FBSCxVQUFLLEdBQVcsRUFBRyxRQUFnQixFQUFFLE1BQVksRUFBRSxPQUF3QjtRQUV6RSw2Q0FBNkM7UUFDN0MsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxHQUFHLElBQUksc0JBQWUsRUFBRSxDQUFDO1lBQzlCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUM7WUFDRCxnRUFBZ0U7WUFDaEUsaUNBQWlDO1lBQ2pDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzFELENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGtCQUFJLEdBQUosVUFBSyxHQUFXLEVBQUcsUUFBZ0IsRUFBRSxJQUFTLEVBQUUsT0FBd0I7UUFDdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsaUJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRyxRQUFnQixFQUFFLElBQVMsRUFBRSxPQUF3QjtRQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxvQkFBTSxHQUFOLFVBQU8sR0FBVyxFQUFHLFFBQWdCLEVBQUUsSUFBUyxFQUFFLE9BQXdCO1FBQ3hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELG1CQUFLLEdBQUwsVUFBTSxHQUFXLEVBQUcsUUFBZ0IsRUFBRSxJQUFTLEVBQUUsT0FBd0I7UUFDdkUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUgsVUFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksR0FBRztJQURmLGlCQUFVLEVBQUU7cUNBR2MsV0FBSTtHQUZsQixHQUFHLENBcUNmO0FBckNZLGtCQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVxdWVzdE9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuICB9XG4gIFxuICBnZXQoIHVybDogc3RyaW5nICwgZW5kcG9pbnQ6IHN0cmluZywgcGFyYW1zPzogYW55LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpIHsgICAgICAgIFxuICAgIFxuICAgIC8vIFN1cHBvcnQgZWFzeSBxdWVyeSBwYXJhbXMgZm9yIEdFVCByZXF1ZXN0c1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIGxldCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgZm9yKGxldCBrIGluIHBhcmFtcykge1xuICAgICAgICBwLnNldChrLCBwYXJhbXNba10pO1xuICAgICAgfVxuICAgICAgLy8gU2V0IHRoZSBzZWFyY2ggZmllbGQgaWYgd2UgaGF2ZSBwYXJhbXMgYW5kIGRvbid0IGFscmVhZHkgaGF2ZVxuICAgICAgLy8gYSBzZWFyY2ggZmllbGQgc2V0IGluIG9wdGlvbnMuXG4gICAgICBvcHRpb25zLnNlYXJjaCA9ICFvcHRpb25zLnNlYXJjaCAmJiBwIHx8IG9wdGlvbnMuc2VhcmNoO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwgKyAnLycgKyBlbmRwb2ludCwgb3B0aW9ucyk7XG4gIH1cblxuICBwb3N0KHVybDogc3RyaW5nICwgZW5kcG9pbnQ6IHN0cmluZywgYm9keTogYW55LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsICsgJy8nICsgZW5kcG9pbnQsIGJvZHksIG9wdGlvbnMpO1xuICB9XG5cbiAgcHV0KHVybDogc3RyaW5nICwgZW5kcG9pbnQ6IHN0cmluZywgYm9keTogYW55LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwgKyAnLycgKyBlbmRwb2ludCwgYm9keSwgb3B0aW9ucyk7XG4gIH1cblxuICBkZWxldGUodXJsOiBzdHJpbmcgLCBlbmRwb2ludDogc3RyaW5nLCBib2R5OiBhbnksIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwgKyAnLycgKyBlbmRwb2ludCwgYm9keSwgb3B0aW9ucyk7XG4gIH1cblxuICBwYXRjaCh1cmw6IHN0cmluZyAsIGVuZHBvaW50OiBzdHJpbmcsIGJvZHk6IGFueSwgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsICsgJy8nICsgZW5kcG9pbnQsIGJvZHksIG9wdGlvbnMpO1xuICB9XG5cbn1cbiJdfQ==