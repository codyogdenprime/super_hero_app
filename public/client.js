/*

alias
first_name
last_name
city
power_name

*/

var app = angular.module( 'app', ['ngRoute'] );

app.config(["$routeProvider", function($routeProvider){

	console.log( 'ng' );

/*    $routeProvider.
      when("/home", {
        templateUrl: "/views/partials/home.html",
        controller: "homeController"
      }).
      when("/cat", {
        templateUrl: "/views/partials/cat.html",
        controller: "catController"
      }).
      when("/lizard", {
        templateUrl: "/views/partials/lizard.html",
        controller: "lizardController"
      }).
      otherwise({
        redirectTo: "/home"
      });*/
}]);