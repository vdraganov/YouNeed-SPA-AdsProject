var AdsApp = angular.module('YouNeedAppModule', [
	'ngRoute'
]).config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl:'templates/login.html'
		// controller:
	})
});

