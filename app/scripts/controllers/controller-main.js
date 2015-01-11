AdsApp.controller('YouNeedAppController', ['$scope', 'authentication', function ($scope, authentication) {
	$scope.isLoggedIn = authentication.isLoggedIn();
}])