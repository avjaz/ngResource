/**
 * Created by markbeavis on 8/12/14.
 */

'use strict';

angular.module('carParkServices', ['ngResource'])
  .factory('CarParks', ['$resource', function($resource){
    return $resource('http://api.at.govt.nz/v1/public/display/parkinglocations?api_key=c3e74bd5-1731-4ad7-8a63-a26cb1548842', {}, {
      get: {
        method: 'GET',
        isArray: true,
        transformResponse: function(data, header) {
          var markers = [];
          var response = angular.fromJson(data).response;
          for (var i=0; i < response.length; i++) {
            var marker = {
              id: response[i].id,
              latitude: response[i].latitude,
              longitude: response[i].longitude,
              options: {title: response[i].name},
              address: response[i].address
            };
            markers.push(marker);
          }
          return markers;
        }
      }
    });
  }]);
