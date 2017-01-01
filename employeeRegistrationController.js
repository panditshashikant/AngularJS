app.controller("employeeRegistrationController", function ($scope) {
    $scope.employee = { firstName: null, lastName: null };
    $scope.employee.firstName = "Shashikant@GJGJ";
    $scope.employee.lastName = "Pandit";
    $scope.saveEmployee = function (employee) {
        console.log(employee);
    }
});