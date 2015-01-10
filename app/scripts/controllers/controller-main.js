AdsApp.controller('YouNeedAppController', ['$scope', 'authentication', function ($scope, authentication) {
	$scope.hi = authentication.isLoggedIn();
}])