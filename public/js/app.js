var app = angular.module('myApp',['ngRoute','ngResource','angularFileUpload','google-maps','ngAnimate']);



    app.config(function($routeProvider,$locationProvider)
    {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        // Register routes with the $routeProvider
        $routeProvider
            .when('/', {
                templateUrl:"parts/home.html",
                controller:'getMenu'
            })
            .when('/aboutUs',{
                templateUrl:'parts/aboutUs.html',
                controller:'aboutUs'
            })
            .when('/brewery',{
                templateUrl:'parts/brewery.html',
                controller:'brewery'
            })
            .when('/delivery',{
                templateUrl:'parts/delivery.html',
                controller:'delivery'
            })
            .when('/menu',{
                templateUrl:'parts/menu.html',
                controller:'allMenu'
            })
            .when('/menu/bar',{
                templateUrl:'parts/bar.html',
                controller:'bar'
            })
            .when('/menu/food',{
                templateUrl:'parts/food.html',
                controller:'food'
            })
            .when('/menu/bear',{
                templateUrl:'parts/bear.html',
                controller:'bear'
            })
            .when('/menu/launch',{
                templateUrl:'parts/launch.html',
                controller:'launch'
            })
            .when('/menu/branch',{
                templateUrl:'parts/branch.html',
                controller:'branch'
            })
            .when('/menuAdmin', {
                templateUrl:"parts/add_menu.html",
                controller:'addMenu'
            })
            .when('/menuAdmin/:dish', {
                templateUrl:"/parts/maintain_dish.html",
                controller:'oneDish'
            })
            .when('/adminCategory', {
                templateUrl:"parts/maintain_category.html",
                controller:'maintainCategory'
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
            .when('/eventsAdmin/:event', {
                templateUrl:"/parts/maintain_event.html",
                controller:'oneEvent'
            })
            .when('/viewDish/:dish', {
                templateUrl:"/parts/veiwDish.html",
                controller:'viewDish'
            })
            .when('/news', {
                templateUrl:"/parts/news.html",
                controller:'news'
            })
            .when('/news/:news', {
                templateUrl:"/parts/viewNews.html",
                controller:'viewNews'
            })
            .when('/events', {
                templateUrl:"/parts/events.html",
                controller:'events'
            })
            .when('/events/:event', {
                templateUrl:"/parts/viewEvent.html",
                controller:'viewEvent'
            })
            .when('/contacts', {
                templateUrl:"/parts/contacts.html",
                controller:'contacts'
            })
            .when('/menu/byCat/:category', {
                templateUrl:"/parts/menuCat.html",
                controller:'menuCat'
            })
            .otherwise({
                redirectTo: '/'
            });
    });



