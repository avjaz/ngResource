'use strict';

/**
 * @ngdoc overview
 * @name ngResourceApp
 * @description
 * # ngResourceApp
 *
 * Main module of the application.
 */
angular
  .module('ngResourceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'carParkServices',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyB3jNoL7s89WnWlEwltTTv3QDLOEpkojHQ',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  });
