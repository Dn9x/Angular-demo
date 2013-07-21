
function UserListCtrl($scope){
	$scope.users = [
		{"name":"AAA", "age":27, "sex":"F"},
		{"name":"BBB", "age":24, "sex":"M"},
		{"name":"CCC", "age":42, "sex":"F"},
		{"name":"DDD", "age":33, "sex":"M"},
		{"name":"EEE", "age":63, "sex":"M"},
		{"name":"GGG", "age":23, "sex":"M"},
		{"name":"FFF", "age":23, "sex":"M"},
		{"name":"NNN", "age":51, "sex":"M"},
	];

	$scope.orderProp = 'age';		//默认是年龄排序
}