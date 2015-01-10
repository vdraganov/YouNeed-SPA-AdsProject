AdsApp.controller('PublicAdsController', ['$scope', 'authentication', 'adsData', function ($scope, authentication, adsData) {
	$scope.ready = false;

	$scope.isLoggedIn = authentication.isLoggedIn();

	adsData.getPublicAds()
		.$promise
		.then(function (data) {
			$scope.adsData = data;
			$scope.ready = true;
		})
}])