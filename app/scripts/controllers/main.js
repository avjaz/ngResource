'use strict';

/**
 * @ngdoc function
 * @name ngResourceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngResourceApp
 */
angular.module('ngResourceApp')
  .controller('MainCtrl', ['$scope', 'CarParks', function ($scope, CarParks) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.markers = CarParks.get();
    $scope.map = {center: {latitude: -36.8478475, longitude: 174.7554874}, zoom: 10};
  }]);
