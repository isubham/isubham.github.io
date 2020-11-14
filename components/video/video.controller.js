(function() {

    angular
    .module('app.controllers')
    .controller('videoController', 
    ['$scope', 'dataProvider', function videoController($scope, dataProvider) 
    {

        $scope.playYoutubeVideo = function(video) {
            $scope.currentVideo = video;
        }

        function initializer() {
            $scope.data = dataProvider;
            $scope.currentVideo = $scope.data.youtube.music.rock[0];
        }

        initializer();
            
    }
    ]);

})();