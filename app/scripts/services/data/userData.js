AdsApp.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', function ($resource, baseServiceUrl, authentication) {
	function registerUser (user) {
		return $resource(baseServiceUrl + 'user/Register')
			.save(user)
			.$promise
			.then(function (data) {
				authentication.saveUser(data);
			});
	}

	function loginUser (user) {
		$resource(baseServiceUrl + 'user/Login')
			.save(user)
			.$promise
			.then(function (data) {
				authentication.saveUser(data);
			});
	}

	function logoutUser () {
		$resource(baseServiceUrl + 'user/Logout')
		.save(user)
			.$promise
			.then(function (data) {
				authentication.removeUser();
			});
	}

	return {
		register: registerUser,
		login: loginUser,
		logout: logoutUser
	}
}])