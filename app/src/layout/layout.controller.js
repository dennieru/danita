(function () {
    'use strict';

    angular
        .module('danitaApp.layout', [])
        .controller('LayoutCtrl', LayoutCtrl);

    LayoutCtrl.$inject = ['$timeout'];

    function LayoutCtrl($timeout) {
        var vm = this;

        // Methods

        activate();

        function activate() {
        }
    }
})();
