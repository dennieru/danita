'use strict';

/**
 * @ngdoc function
 * @name danitaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the danitaApp
 */
angular.module('danitaApp')
  .controller('MainCtrl', function () {
    var vm = this;

    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false
      });
    });

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
