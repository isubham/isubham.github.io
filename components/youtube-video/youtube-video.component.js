angular.module('app.directives').directive('youtubeVideo', ['$sce', function($sce) {
    return {
        restrict : "E",
        scope : {
            video : "="
        },
        templateUrl: 'components/youtube-video/youtube-video.html',
        link: function(scope, element, attributes) {
            scope.videoUrl = function () {
                return $sce.trustAsResourceUrl(embedUrl(scope.video.url));
            }

            scope.youtubeVideoUrl = function() {
                return youtubeUrl(scope.video.url);
            }

            function embedUrl(hash) {
                return "https://www.youtube.com/embed/" + hash;
            } 

            function youtubeUrl(hash) {
                return "https://www.youtube.com/watch?v=" + hash;
            }

        }

        
    }
}]);
  