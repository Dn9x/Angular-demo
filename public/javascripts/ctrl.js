var app = angular.module('anApp', []);
 
app.config(function($locationProvider, $routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'cont/home', controller: 'homectrl' })
    .when('/post', { templateUrl: 'cont/post', controller: 'postctrl' })
    .when('/join', { templateUrl: 'cont/join', controller: 'joinctrl' })
    .otherwise({redirectTo:'/'});
});

app.controller('homectrl', function($scope, $http){
	$http.get('http://localhost:3000/home', {"foo":"bar"}).success(function(data) {
    	var js = eval('(' + data.tits + ')');
		
	    $scope.artils = js;
  	});
});

app.controller('postctrl', function($scope, $http){
    $http.get("http://localhost:3000/post", {"foo":"bar"})
	.success(function(data, status, headers, config) {
		var js = eval('(' + data.cells + ')');

	    $scope.artils = js;
	}).error(function(data, status, headers, config) {
	    $scope.status = status;
	});
});

app.controller('joinctrl', function($scope, $http){
    $http.get("http://localhost:3000/join", {"foo":"bar"})
	.success(function(data, status, headers, config) {
		var js = eval('(' + data.repls + ')');

	    $scope.artils = js;
	}).error(function(data, status, headers, config) {
	    $scope.status = status;
	});
});