AdsApp.directive('loggedInNav', function () {
	return {
		controller: 'PublicAdsController',
		restrict: 'E',
		templateUrl: 'templates/directive/logged-in-nav.html',
		replace: true
	}
})