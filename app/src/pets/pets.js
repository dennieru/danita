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

    vm.fullContainer = false;
    
    // Methods
    vm.activateFullContainer = activateFullContainer;

    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false
      });
    });
        
    function activateFullContainer(){
        vm.fullContainer = !vm.fullContainer;
        $( "#dnt-container" ).toggleClass( "container" );
        //var element = angular.element( document.querySelector( '#dnt-container' ) );
        //element.addClass('container');
        //document.getElementById("peace").className = "be-still"
    };

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
