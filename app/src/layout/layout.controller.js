(function () {
    'use strict';

    angular
        .module('danitaApp.layout', [])
        .controller('LayoutCtrl', LayoutCtrl);

    LayoutCtrl.$inject = ['$timeout', '$translate'];

    function LayoutCtrl($timeout, $translate) {
        var vm = this;

        vm.defaultLang = false;

        // Methods
        vm.changeLanguage = changeLanguage;

        activate();

        function activate() {
            defineDefaultLang();
            $(document).ready(function(){
                $(".dnt-button-collapse").sideNav();
            });

            $(document).ready(function(){
                $('.modal').modal();;
            });
        };

        function defineDefaultLang(){
            if(localStorage.getItem('language') === 'en_US'){
                vm.defaultLang = true;
            } else{
                vm.defaultLang = false;
            }
        }    

        function changeLanguage() {
            if(localStorage.getItem('language') === 'es_ES'){
                $translate.use('en_US');
                localStorage.setItem('language', 'en_US');
            } else{
                $translate.use('es_ES');
                localStorage.setItem('language', 'es_ES');
            }
        };
    }
})();
