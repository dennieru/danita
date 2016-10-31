(function () {
    'use strict';

    angular
        .module('core.route')
        .provider('routeFactoryConfig', routeFactoryConfig)
        .factory('routeFactory', routeFactory);


    // Must configure via the routeFactoryConfigProvider
    function routeFactoryConfig() {
        /* jshint validthis:true */
        this.config = {};

        this.$get = function () {
            return {
                config: this.config
            };
        };
    }

    routeFactory.$inject = ['$location', '$rootScope', 'routeFactoryConfig'];

    function routeFactory($location, $rootScope, routeFactoryConfig) {
        
        var $stateProvider = routeFactoryConfig.config.$stateProvider;
        var $urlRouterProvider = routeFactoryConfig.config.$urlRouterProvider;
        var service = {
            configureRoutes: configureRoutes
        };

        function configureRoutes(routes) {

            routes.forEach(function (route) {
                $stateProvider.state(route.state, route.config);
            });

            $urlRouterProvider.otherwise('/');
        }
        
        return service;
    }
})();
