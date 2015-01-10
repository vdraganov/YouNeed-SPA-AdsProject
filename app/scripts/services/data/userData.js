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
		var resource = $resource(baseServiceUrl + 'user/Login')
			.save(user);
			
		resource.$promise
			.then(function (data) {
				authentication.saveUser(data);
			});

		return resource;
	}

	function logoutUser () {
		return $resource(baseServiceUrl + 'user/Logout')
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