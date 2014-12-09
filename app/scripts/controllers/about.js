'use strict';

/**
 * @ngdoc function
 * @name ngResourceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngResourceApp
 */
angular.module('ngResourceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
