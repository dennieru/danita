/**
 * core.module.js
 * @namespace danitaApp
 * @ngdoc module
 * @author Me
 */
(function () {
    'use strict';
    
    /**
     * @memberof danitaApp
     * @name danitaApp.core
     * @desc Set core Module of application
     */
    angular.module('danitaApp.core', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'core.route',
        'pascalprecht.translate',
        'restangular'
        ]).run(runCore);

    runCore.$inject = [
        '$state', 
        '$location',
        '$rootScope'
        ];
    /* @ngInject */
    
    /**
    * @name runCore
    * @desc Core first configurations
    * @param {NGService} $state state service
    * @param {NGService} $location location service
    * @param {NGService} $rootScope root scope service
    */
    function runCore($state, $location, $rootScope) {
        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
        $rootScope.$on('$stateChangeStart', stateChangeStart);
        $rootScope.$on('$stateChangeError', stateChangeError);

        // fired once the state transition is complete.
        function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
        }

        // fired when the transition begins.
        function stateChangeStart(event, toState) {
        }
        
        // fired when an error occurs during transition.
        function stateChangeError(event, toState, toParams, fromState, fromParams, error) {
        }
    }
})();
