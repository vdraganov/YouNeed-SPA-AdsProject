// AdsApp.factory('authentication',['localStorageServiceProvider', function (localStorageServiceProvider){
AdsApp.factory('authentication', function() {
	var key = 'user';

	function saveUserData(data) {
		localStorage.setItem(key, angular.toJson(data));
		// localStorageServiceProvider.set(key, data);
	}

	function getUserData() {
		return angular.fromJson(localStorage.getItem(key));
		// localStorageServiceProvider.get(key, data);
	}

	function getHeaders(argument) {
		var headers = {};
		var userData = getUserData();

		if (userData) {
			headers.Authorization = 'Bearer' + getUserData().user.access_token;
		};

		return headers;
	}

	function isAdmin() {
		var isAdmin = getUserData().isAdmin;
		return isAdmin;
	}

	function removeUser() {
		localStorage.clear();
		localStorage.removeItem(key);
	}

	function isLoggedIn () {
		return !!getUserData();
	}

	return {
		saveUser: saveUserData,
		getUser: getUserData,
		getHeaders: getHeaders,
		removeUser: removeUser,
		isAdmin: isAdmin,
		isLoggedIn: isLoggedIn 
		}
})