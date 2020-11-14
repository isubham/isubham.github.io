(function() {

    angular
    .module('app.controllers')
    .controller('audioController', 
    ['$scope', 'dataProvider', function audioController($scope, dataProvider) 
    {

        $scope.playSpotifyAudio = function(audio) {
            $scope.currentAudio = audio;
        }

        function initializer() {
            $scope.data = dataProvider;
            $scope.currentAudio = $scope.data.spotify[0];
        }

        initializer();
            
    }
    ]);

})();