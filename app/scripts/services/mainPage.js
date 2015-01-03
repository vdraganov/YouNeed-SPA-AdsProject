AdsApp.factory('mainData', function ($http, $log) {
	return {
		getAllTowns: function (success) {
			$http({method: 'GET', url:'http://softuni-ads.azurewebsites.net/api/towns'})
			.success(function (data, status, headers, config) {
				success(data);
			})
			.error(function (data, status, headers, config) {
				$log.warn(data);
			})
		},
		getAllAds: function (success) {
			$http({method: 'GET', url:'http://softuni-ads.azurewebsites.net/api/ads?PageSize=5&StartPage=2'})
			.success(function (data, status, headers, config) {
				success(data);
			})
			.error(function (data, status, headers, config) {
				$log.warn(data);
			})
		},
		getAllCategories: function (success) {
			$http({method: 'GET', url:'http://softuni-ads.azurewebsites.net/api/categories'})
			.success(function (data, status, headers, config) {
				success(data);
			})
			.error(function (data, status, headers, config) {
				$log.warn(data);
			})
		}

	}
})