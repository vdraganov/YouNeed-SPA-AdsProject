AdsApp.controller('YouNeedAppController', function ($scope, mainData) {
	mainData.getAllAds(function (resp) {
		$scope.data = resp;
	});
})