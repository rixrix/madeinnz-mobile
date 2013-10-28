function HomeController($scope, $http, $location, $rootScope) {
    $scope.init = function() {
        var connectionType = navigator.onLine || false;

        if (typeof navigator.connection != "undefined") {
            connectionType = navigator.connection.type
        }

        if (connectionType == 'none' || connectionType == false) {
            $scope.errorHandler();
        } else {
            $scope.getCompanies();
        }

    }

    $scope.getCompanies = function() {
        $scope.companies = [];
        var url = "https://raw.github.com/rixrix/madeinnz/master/data.json?callback=JSON_CALLBACK";

        $http.jsonp(url).
            success(function(data, status){
                // do nothing
            }).
            error(function(data, status){
                $scope.companies = json_data;
            });
    }

    $scope.showInAppBrowser = function(url) {
        window.open(url, '_blank', 'location=yes');
    }

    $scope.errorHandler = function() {
        $location.path('/404');

    }

    $scope.init();
}