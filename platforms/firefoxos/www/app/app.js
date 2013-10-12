/**
 * @FIXME Quick work around for Angularjs issue w/ jsonp request
 */
var json_data;
function processRecordCallback(data) {
    json_data = data;
}
//# end hack

/**
 * Define app module
 */
var mnzApp = angular.module('mnzApp', []).
    config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/', {templateUrl:'app/views/home/index.html', controller: HomeController});
            $routeProvider.when('/about', {templateUrl:'app/views/home/about.html', controller: HomeController});
            $routeProvider.when('/404', {templateUrl: 'app/views/error/404.html', controller: HomeController});
            $routeProvider.otherwise({redirectTo:'/'});
        }
    ]);