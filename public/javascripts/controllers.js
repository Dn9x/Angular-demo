var app = angular.module('myApp', []);
 
app.config(function($locationProvider, $routeProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: 'partials/index', controller: 'ctrl2' })
    .when('/about', { templateUrl: 'partials/about', controller: 'ctrl1' })
    .otherwise({redirectTo:'/'});
});

app.controller('ctrl1', function($scope, $http){

	$http.get('http://localhost:3000/tits', {"foo":"bar"}).success(function(data) {
    	var js = eval('(' + data.tits + ')');
		
	    $scope.users = js;
  	});

	$scope.orderProp = 'title';		//默认是年龄排序
});

app.controller('ctrl2', function($scope, $http){
    $http.get("http://localhost:3000/lis", {"foo":"bar"})
	.success(function(data, status, headers, config) {
		var js = eval('(' + data.users + ')');

	    $scope.users = js;
	}).error(function(data, status, headers, config) {
	    $scope.status = status;
	});
});

/*app.controller('ctrl2', function($scope){
  $scope.lists = [
		{"name":"AAA", "age":27, "sex":"F"},
		{"name":"BBB", "age":24, "sex":"M"},
		{"name":"CCC", "age":42, "sex":"F"},
		{"name":"DDD", "age":33, "sex":"M"},
		{"name":"EEE", "age":63, "sex":"M"},
		{"name":"GGG", "age":23, "sex":"M"},
		{"name":"FFF", "age":23, "sex":"M"},
		{"name":"NNN", "age":51, "sex":"M"},
	];
=[
	  {"name":"xiuxu123","mono":"喜欢编程源","join":"于 2012-12-4 10:45 加入 CNode"}, 
	  {"name":"xiuxu123","mono":"喜欢编程开源","join":"于 2012-12-4 10:45 加入 CNode"},
	];


	$scope.users = [
		{"name":"xiuxu123",
		"mono":"喜欢编程\r\n喜欢node.js\r\n喜欢前端\r\n喜欢开源",
		"desc":"",
		"join":"于 2012-12-4 10:45 加入 CNode",
		"_id":"51e8a0f7a6bd50540d000001",
		"__v":0,
		"create_at":"2013-07-19T02:14:15.531Z"}
		];
  $http({method: 'GET', url: '/lis'}).
  success(function(data, status, headers, config) {
    alert(data+"");
    $scope.lists = data;
  }).
  error(function(data, status, headers, config) {
  	alert('error: ' + data);
  });
});*/

function chec(){
		var data ='[{"name":"xiuxu123","mono":"喜欢编程\r\n喜欢node.js\r\n喜欢前端\r\n喜欢开源","de' +
			'c":"","join":"于 2012-12-4 10:45 加入 CNode","_id":"51e8a0f7a6bd50540d000001","' + 
			'_v":0,"create_at":"2013-07-19T02:14:15.531Z"}]';

	var js = eval('(' + data + ')');

	alert(js);

	return js;
}