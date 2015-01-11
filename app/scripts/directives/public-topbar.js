AdsApp.directive('logger', function () {
	return {
		controller: 'LoginController',
		restrict: 'E',
		templateUrl: 'templates/directive/login-register-topNav.html',
		replace: true
	}
})