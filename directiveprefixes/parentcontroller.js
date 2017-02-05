app.controller("parentController", function ($scope) {
    $scope.parentName = "parent Controller Name";
    $scope.oneway = function (params)
    {
        console.log(params)
        alert(params.id);
    }
    $scope.name = "Trial";
    $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
    };
})