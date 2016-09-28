var app = angular.module( 'app', ['ngRoute'] );

// App Config
app.config(["$routeProvider", function($routeProvider){

	console.log( 'ng' );

	// Angular Routing
  $routeProvider.
      when("/home", {
        templateUrl: "/views/home.htm",
        controller: "homeController"
      }).
      when("/add", {
        templateUrl: "/views/add.htm",
        controller: "addController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);