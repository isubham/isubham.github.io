angular.module('app.directives').directive('spotifySong', ['$sce', function($sce) {
    return {
        restrict : "E",
        scope : {
            audio : "="
        },
        templateUrl: 'components/spotify-song/spotify-song.html',
        link: function(scope, element, attributes) {

            scope.pageUrl = function () {
                return $sce.trustAsResourceUrl(scope.audio.url);
            }

        }

    }
}]);
  