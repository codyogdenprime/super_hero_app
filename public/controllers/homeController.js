app.controller( 'homeController', [ '$scope', '$http', function( $scope, $http ) {

	console.log( 'in homeController' );

	$scope.heroes = [];

	$scope.showHeroes = function() {

		$http( {
			url: '/hero',
			method: 'GET'
		} ).then( function( result ) {

			console.log( 'Data Recieved:', result.data );

			$scope.heroes = result.data;

		} );

	};

	$scope.showHeroes();

} ] );