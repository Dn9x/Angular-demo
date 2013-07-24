//titleFilters是过滤器
var app = angular.module('anApp', ['titleFilters']);  
 
app.config(function($locationProvider, $routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'cont/home', controller: 'homectrl' })
    .when('/post', { templateUrl: 'cont/post', controller: 'postctrl' })
    .when('/join', { templateUrl: 'cont/join', controller: 'joinctrl' })
    .otherwise({redirectTo:'/'});
});

//使用依赖注入，防止代码压缩的时候‘所需服务’使用失败
app.controller('homectrl', ['$scope', '$http', function($scope, $http){
	$http.get('http://localhost:3000/home', {"foo":"bar"}).success(function(data) {
    	//这里不能直接使用data
    	var js = eval('(' + data.tits + ')');
		
	    $scope.artils = js;
  	});
}]);

app.controller('postctrl', ['$scope', '$http', function($scope, $http){
    $http.get("http://localhost:3000/post", {"foo":"bar"})
	.success(function(data, status, headers, config) {
		var js = eval('(' + data.cells + ')');

	    $scope.artils = js;
	}).error(function(data, status, headers, config) {
	    $scope.status = status;
	});
}]);

app.controller('joinctrl', ['$scope', '$http', function($scope, $http){
    $http.get("http://localhost:3000/join", {"foo":"bar"})
	.success(function(data, status, headers, config) {
		var js = eval('(' + data.repls + ')');

	    $scope.artils = js;
	}).error(function(data, status, headers, config) {
	    $scope.status = status;
	});

  	$scope.big = function(pars){
  		alert('你要打开: ' + pars);
  	};
}]);