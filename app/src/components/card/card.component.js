(function () {
    'use strict';

    angular
        .module('danitaApp.components')
        .component('dntCard', {
        bindings:{
            data: '@'
        },
        templateUrl: 'src/components/card/card.template.html',
        controller: dntCardCtrl
    });

    function dntCardCtrl() {
        var vm = this;

        vm.ago = ' ahem';
    }
})();
