AdsApp.directive('logger', function () {
	return {
		controller: 'PublicAdsController',
		restrict: 'E',
		templateUrl: 'templates/directive/login-register-topNav.html',
		replace: true
	}
})