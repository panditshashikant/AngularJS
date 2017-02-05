app.directive("myDirective", function () {
    return {
        restrict: 'AE',
        scope: {
            name: '@textBinding',
            two: '=twoWayBinding',
            one: '&oneWayBinding'
        },
        template: "here is test directive <input type='text' ng-model='two'>" +
            "<button ng-click='one()'>Perent Event Click</button>"
    }
});
app.directive('myCustomer', function () {
    return {
        restrict:'EA',
        scope: {},
        template: "<input type='text' ng-model='name'> Name: {{name}} Address: {{address}}"
    };
});