var app = angular.module('angularApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            //url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .state('home.events',{
            url:'/events/:deviceId',
            templateUrl: 'views/events.html',
            controller: 'EventsCtrl'
        });
});