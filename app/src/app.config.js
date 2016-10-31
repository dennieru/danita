(function () {
    'use strict';
    var core = angular.module('danitaApp');

    /*
     * Translate configuration 
     */

    translationConfig.$inject = ['$translateProvider'];

    function translationConfig($translateProvider) {
        //To get warnings, regarding forgotten IDs in translations
        //$translateProvider.useMissingTranslationHandlerLog();

        //provide asynchoronous loading for translation
        $translateProvider.useStaticFilesLoader({
            prefix: 'resources/locale-',
            suffix: '.json'
        });

        var language = navigator.language;
        if (language.substring(0, 2) === 'es') {
            language = 'es_ES';
        } else if (language.substring(0, 2) === 'en') {
            language = 'en_US';
        } else {
            language = 'en_US';
        }

        $translateProvider.preferredLanguage(language);
        $translateProvider.useLocalStorage();

        $translateProvider.useSanitizeValueStrategy('escaped');
    }
})();
