let app = angular.module('main',['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl:'views/home.html'
    }).when('/calculator',{
        templateUrl:'views/calculator.html'
    }).when('/product_base',{
        templateUrl: 'views/productBase.html',
    }).when('/meal_creator',{
        templateUrl: 'views/mealCreator.html',
    }).when('/contact',{
        templateUrl: 'views/contact.html'
    }).when('/conclusion',{
        templateUrl: 'views/conclusion.html'
    })
});
