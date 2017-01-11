'use strict';

/**
 * @ngdoc overview
 * @name quizappApp
 * @description
 * # quizappApp
 *
 * Main module of the application.
 */
angular
  .module('quizappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngMaterial'
  ])
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
   $stateProvider
   .state('home', {
    url: "/home/",
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
   .state('about', {
    url: "/about/",
    templateUrl: 'views/about.html',
    controller: 'AbtCtrl'
  });
   return $urlRouterProvider.otherwise("/home/");
 });
