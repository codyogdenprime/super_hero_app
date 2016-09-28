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

  $routeProvider.
      when("/home", {
        templateUrl: "/views/home.htm",
        controller: "homeController"
      }).
      when("/cat", {
        templateUrl: "/views/add.html",
        controller: "addController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);