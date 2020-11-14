(function() {

    angular
    .module('app.controllers')
    .controller('homeController', 
    ['$scope', 'dataProvider', '$sce', function videoController($scope, dataProvider, $sce) 
    {

        function initializer() {
            $scope.data = dataProvider;
            $scope.profile_pic = $sce.trustAsResourceUrl($scope.data.home.profile_pic);
        }

        initializer();
            
    }
    ]);

})();