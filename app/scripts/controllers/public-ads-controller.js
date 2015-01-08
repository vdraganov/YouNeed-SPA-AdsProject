AdsApp.controller('PublicAdsController', ['$scope', 'adsData', function ($scope, adsData) {
	adsData.getPublicAds()
		.$promise
		.then(function (data) {
			$scope.adsData = data;
		})
}])