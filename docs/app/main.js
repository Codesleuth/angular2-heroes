System.register(['@angular/core', '@angular/platform-browser-dynamic', './app.component', './app.routes', '@angular/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_dynamic_1, app_component_1, app_routes_1, common_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                app_routes_1.ROUTER_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
            ]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=main.js.map