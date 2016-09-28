app.controller( 'homeController', [ '$scope', '$http', function( $scope, $http ) {

	console.log( 'in homeController' );

	$scope.heroes = [];

	// GET json of heroes and set it to the $scope.heroes
	// It is modeled on the DOM
	$scope.showHeroes = function() {
		$http( {
			url: '/hero',
			method: 'GET'
		} ).then( function( result ) {
			console.log( 'Data Recieved:', result.data );
			$scope.heroes = result.data;
		} );
	};

	// When a delete button is clicked
	$scope.removeHero = function() {
		// Confirm with the user
		var areYouSure = confirm( 'Are you sure?' );
		// If yes
		if( areYouSure ) {
			// Delete the hero
			$http( {
				url: '/hero/' + this.hero._id,
				method: 'DELETE'
			} ).then( function( result ) {
				$scope.showHeroes(); // Refresh the heroes
			} );
		}
	};
	$scope.showHeroes();
} ] );