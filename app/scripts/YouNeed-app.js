var AdsApp = angular.module('YouNeedAppModule', [
	'ngRoute'
]).config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl:'templates/login.html',
		// controller:
		css: 'styles/login-register-form-style.css'
	})
	.when('/register', {
		templateUrl:'templates/register.html',
		// controller:
		css: 'styles/register-register-form-style.css'
	})
	.when('/ads', {
		templateUrl:'templates/all-ads.html'
	})
	.otherwise({
        redirectTo: '/home'
    });
});

