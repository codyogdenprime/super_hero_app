app.controller( 'addController', [ '$scope', '$http', function( $scope, $http ) {

	$scope.addHero = function() {
		console.log( 'Add Hero' );

		// POST call /hero to add a hero to the MongoDB
		$http({
			url: '/hero',
			method: 'POST',
			data: {
				alias: $scope.alias,
				first_name: $scope.first_name,
				last_name: $scope.last_name,
				city: $scope.city,
				power_name: $scope.power_name
			}
		}).then( function( result ) {

			// Clear all the inputs
			$scope.alias = "";
			$scope.first_name = "";
			$scope.last_name = "";
			$scope.city = "";
			$scope.power_name = "";
		});
	};
}]);