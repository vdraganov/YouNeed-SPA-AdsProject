var AdsApp = angular.module('YouNeedAppModule', [
	'ngRoute',
	'ngResource',
	'LocalStorageModule'
	])

AdsApp.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/')

AdsApp.config(['$routeProvider', 'localStorageServiceProvider', function($routeProvider, localStorageServiceProvider) {
	$routeProvider.when('/ads', {
		templateUrl:'templates/home-ads.html',
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


	// Local storage settings
    // localStorageServiceProvider.setStorageType('LocalStorage');
    // localStorageServiceProvider.setPrefix('AdsApp');
}]);


