(function () {
    'use strict';

    angular.module('hytit', [
        'ui.router',

        'hytit.common',
        'hytit.header',
        'hytit.task'
    ])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/list');

            $stateProvider
                .state('list', {
                    url: '/',
                    templateUrl: 'task/tasks.html',
                    controller: 'TasksController'
                });
        });
})();