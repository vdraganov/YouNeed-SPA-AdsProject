AdsApp.directive('loggedInTopbar', function () {
	return {
		controller: 'LoginController',
		restrict: 'E',
		templateUrl: 'templates/directive/logged-in-topNav.html',
		replace: true
	}
})