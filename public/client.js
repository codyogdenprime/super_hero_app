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
      when("/add", {
        templateUrl: "/views/add.htm",
        controller: "addController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);