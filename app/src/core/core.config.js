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
    core.config(restConfig);
    core.config(translationConfig);
    core.config(configure);
    

    configure.$inject = ['RestangularProvider'];
    /* @ngInject */

    /**
    * @name restConfig
    * @desc Restangular configurations
    * @param {Provider} RestangularProvider rest provider.
    */
    function restConfig(RestangularProvider) {
        //set the base url for api calls on our RESTful services
		var newBaseUrl = "";
		if (window.location.hostname == "localhost") {
			newBaseUrl = "http://localhost:8080/api";
		} else {
			var deployedAt = window.location.href.substring(0, window.location.href);
			newBaseUrl = deployedAt + "/api";
		}
		RestangularProvider.setBaseUrl(newBaseUrl);
    }

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
        
        // var language = navigator.language;
        var language = '';
        // language = localStorage.getItem('language');
        if(localStorage.getItem('language')){
            language = localStorage.getItem('language');
        } else{
            language = 'es_ES';
        }
        
        if (language.substring(0, 2) === 'es') {
            language = 'es_ES';
            localStorage.setItem('language', 'es_ES');
        } else if (language.substring(0, 2) === 'en') {
            language = 'en_US';
            localStorage.setItem('language', 'en_US');
        } else {
            language = 'es_ES';
            localStorage.setItem('language', 'es_ES');
        }

        $translateProvider.preferredLanguage(language);
        $translateProvider.useLocalStorage();

        $translateProvider.useSanitizeValueStrategy('escaped');
    }
})();
