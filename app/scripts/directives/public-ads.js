AdsApp.directive('publicAds', function () {
	return {
		controller: 'PublicAdsController',
		restrict: 'E',
		templateUrl: 'templates/public/public-ads.html',
		replace: true
	}
})