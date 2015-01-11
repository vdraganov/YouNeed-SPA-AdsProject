AdsApp.controller('PublicAdsController', ['$scope', 'adsData', 'filter', function ($scope, adsData, filter) {
	$scope.ready = false;

	function loadPublicAds (filterParams) {
		filterParams = filterParams || {};

		adsData.getPublicAds(filterParams)
			.$promise
			.then(function (data) {
				$scope.adsData = data;
				$scope.ready = true;
			});
	}

	loadPublicAds();

	$scope.pageChanged = function function_name (argument) {
		// body...
	}

	$scope.$on('categoryClicked', function (category) {
		loadPublicAds(filter.getFilterParams());
	});

	$scope.$on('townClicked', function (town) {
		loadPublicAds(filter.getFilterParams());
	})

}])