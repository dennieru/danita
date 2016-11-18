/**
 * app.module.js
 * @namespace danitaApp
 * @ngdoc module
 * @author Me
 */
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
    'danitaApp.components',
    'danitaApp.core',
    'danitaApp.layout'
  ]);
})();

