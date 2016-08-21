System.register(['@angular/router', './crisis-list.component', './hero-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, crisis_list_component_1, hero_list_component_1;
    var routes, ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (crisis_list_component_1_1) {
                crisis_list_component_1 = crisis_list_component_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: 'crisis-center', component: crisis_list_component_1.CrisisListComponent },
                { path: 'heroes', component: hero_list_component_1.HeroListComponent },
                { path: '**', component: hero_list_component_1.HeroListComponent }
            ];
            exports_1("ROUTER_PROVIDERS", ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map