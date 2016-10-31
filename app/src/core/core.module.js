(function () {
    'use strict';

    angular.module('danitaApp.core', ['ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'core.route',
    'pascalprecht.translate'])
    .run(runCore);

    runCore.$inject = ['$state', '$location','$rootScope'];

    function runCore($state, $location, $rootScope) {


        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
        $rootScope.$on('$stateChangeStart', stateChangeStart);
        $rootScope.$on('$stateChangeError', stateChangeError);

        function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
        }

        function stateChangeStart(event, toState) {
        }

        // Route cancellation:
        // On routing error, go to the dashboard.
        // Provide an exit clause if it tries to do it twice.
        function stateChangeError(event, toState, toParams, fromState, fromParams, error) {
        }

        /**
         * Close dialog and cancel event back browser button
         */
        $rootScope.$on('$locationChangeStart', function (event) {
        });

    }
})();
