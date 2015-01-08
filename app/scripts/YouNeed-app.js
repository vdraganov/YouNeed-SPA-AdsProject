var AdsApp = angular.module('YouNeedAppModule', [
	'ngRoute',
	'ngResource'
	])

AdsApp.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/')

AdsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/ads', {
		templateUrl:'templates/all-ads.html',
		controller: 'YouNeedAppController'
	})
	.when('/login', {
		templateUrl:'templates/login.html',
		controller: 'LoginController',
		css: 'styles/login-register-form-style.css'
	})
	.when('/register', {
		templateUrl:'templates/register.html',
		controller: 'RegisterController',
		css: 'styles/register-register-form-style.css'
	})
	.otherwise({
        redirectTo: '/ads'
    });
}]);


