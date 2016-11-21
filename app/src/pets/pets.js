'use strict';

/**
 * @ngdoc function
 * @name danitaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the danitaApp
 */
angular.module('danitaApp')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['Restangular'];
  
  function MainCtrl(Restangular) {
    var vm = this;

    vm.fullContainer = false;
    vm.pets = [];
    
    // Methods
    vm.activateFullContainer = activateFullContainer;

    activate();

    function activate() {
      $(document).ready(function(){
        $('.collapsible').collapsible({
          accordion : false
        });
      });

      var pets = Restangular.all('pets');
      vm.pets = pets.getList().$object;
    }
        
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
  };
