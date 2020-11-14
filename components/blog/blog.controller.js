(function() {

    angular
    .module('app.controllers')
    .controller('blogController', 
    ['$scope', 'dataProvider', function videoController($scope, dataProvider) 
    {
        $scope.setCurrentBlog = function(blog)
        {
            $scope.currentBlog = blog;
        }


        function initializer() {
            $scope.data = dataProvider;
        }

        initializer();
            
    }
    ]);

})();