AdsApp.directive('loggedInTopbar', function () {
	return {
		controller: 'PublicAdsController',
		restrict: 'E',
		templateUrl: 'templates/directive/logged-in-topNav.html',
		replace: true
	}
})