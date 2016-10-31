(function () {
    'use strict';

    angular
        .module('danitaApp.layout')
        .run(appRun);

    appRun.$inject = ['routeFactory'];

    function appRun(routeFactory) {
        routeFactory.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                state: 'main',
                config: {
                    url: '/',
                    templateUrl: 'src/layout/layout.html',
                    title: 'danita App',
                    controller: 'LayoutCtrl',
                    controllerAs: 'vm',
                    authenticate: true
                }
            }
        ];
    }
})();
