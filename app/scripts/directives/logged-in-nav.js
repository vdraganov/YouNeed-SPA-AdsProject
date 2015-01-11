AdsApp.directive('loggedInNav', function () {
	return {
		controller: 'LoginController',
		restrict: 'E',
		templateUrl: 'templates/directive/logged-in-nav.html',
		replace: true
	}
})