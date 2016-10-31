(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name danitaApp
   * @description
   * # danitaApp
   *
   * Main module of the application.
   */
  angular
  .module('danitaApp', [
    'danitaApp.layout'
  ]);
  angular
  .module('danitaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/layout/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'src/layout/about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})();

