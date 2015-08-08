'use strict';

angular.module('stickApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
