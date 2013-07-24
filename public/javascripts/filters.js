/**
 *  自定义一个过滤器：如果标题长度大于56就截取
 *  使用方法：
 * 	     1.在要使用的模块中添加注入：angular.module('xxx', ['titleFilters']).
 *       2.在页面上：{{ expression | spititle }}
 */
angular.module('titleFilters', []).filter('spititle', function() {
  return function(input) {
  	var result = '';

  	if(input.length > 56){
  		result = input.substr(0, 56) + '...';
  	}else{
  		result = input;
  	}

    return result;
  };
});