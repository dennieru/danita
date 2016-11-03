/**
 * core.config.js
 * @namespace danitaApp.core
 * @ngdoc config
 * @author Me
 */
(function () {
    'use strict';

    var core = angular.module('danitaApp.core');
    var config = {
        appTitle: 'Danita App',
        appVersion: '1.0'
    };

    // Loading configurations. 
    core.value('config', config);
    core.config(translationConfig);
    core.config(configure);

    configure.$inject = [
        '$stateProvider', 
        '$urlRouterProvider',
        'routeFactoryConfigProvider', 
        '$compileProvider'
        ];
    /* @ngInject */
    
    /**
    * @name configure
    * @desc Core configurations
    * @param {Provider} $stateProvider state service provider
    * @param {Provider} $urlRouterProvider routing provider
    * @param {Factory} routeFactoryConfigProvider route factory provider
    * @param {Provider} $compileProvider compiler prvider
    */
    function configure(
        $stateProvider, 
        $urlRouterProvider,
        routeFactoryConfigProvider, 
        $compileProvider
        ) {

        //This enable debugInfoEnabled to dev site to production this value will change by false by jenkins job
        $compileProvider.debugInfoEnabled(true);

        // Configure the common route provider
        routeFactoryConfigProvider.config.$stateProvider = $stateProvider;
        routeFactoryConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
        routeFactoryConfigProvider.config.docTitle = 'Danita App';
    }

    translationConfig.$inject = ['$translateProvider'];
    /* @ngInject */

    /**
    * @name translationConfig
    * @desc Translate configuration
    * @param {Provider} $translateProvider translate service provider
    */
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
