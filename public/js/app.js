var app = angular.module('myApp',['ngRoute','ngResource','angularFileUpload']);



    app.config(function($routeProvider)
    {
        // Register routes with the $routeProvider
        $routeProvider
            .when('/', {
                templateUrl:"parts/home.html",
                controller:'getMenu'
            })
            .when('/menu',{
                templateUrl:'parts/menu.html',
                controller:'menu'
            })
            .when('/menuAdmin', {
                templateUrl:"parts/add_menu.html",
                controller:'addMenu'
            })
            .when('/menuAdmin/:dish', {
                templateUrl:"/parts/maintain_dish.html",
                controller:'oneDish'
            })
            .when('/newsAdmin', {
                templateUrl:"/parts/add_news.html",
                controller:'addNews'
            })
            .when('/newsAdmin/:news', {
                templateUrl:"/parts/maintain_news.html",
                controller:'oneNews'
            })
            .when('/eventsAdmin', {
                templateUrl:"/parts/add_event.html",
                controller:'addEvent'
            })
            .otherwise({
                redirectTo: '/'
            });
    });




