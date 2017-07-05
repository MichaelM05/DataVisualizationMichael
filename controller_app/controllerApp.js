var app = angular.module('myApp', []);
app.controller('dataCtrl', function ($scope, $http) {
    $http.get("https://data.cityofchicago.org/resource/u77m-8jgp.json").then(function (response) {
        $scope.myData = response.data;
    });
});

app.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function ($scope) {
            if ($scope.$last === true) {
                $timeout(function () {
                    $(function () {
                        $('#dataTable').dataTable({
                            "bPaginate": true,
                            "bLengthChange": true,
                            "bFilter": true,
                            "bSort": true,
                            "bInfo": true,
                            "bAutoWidth": true

                        });
                    });
                });
            }
        }
    };
});
