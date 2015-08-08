'use strict';

angular.module('stickApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


