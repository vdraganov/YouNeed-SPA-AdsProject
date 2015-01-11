AdsApp.factory('filter', function () {
	var filterParams = {};

	function filterByCategory (category) {
		filterParams.CategoryId = category.id;
	}

	function filterByTown (town) {
		filterParams.TownId = town.id;
	}

	function getFilterParams () {
		return filterParams;
	}
	
	return {
		filterByCategory: filterByCategory,
		filterByTown: filterByTown,
		getFilterParams: getFilterParams
	}
})