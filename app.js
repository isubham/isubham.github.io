angular.module('app.components', []);
angular.module('app.directives', []);
angular.module('app.services', []);
angular.module('app.providers', []);
angular.module('app.controllers', []);

angular
.module('app', ['app.components', 'app.services', 'app.providers', 'app.directives', 'ngRoute', 'ui.bootstrap', 'app.controllers'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {controller: 'homeController', templateUrl: 'components/home/home.html'})

    .when('/video', {controller: 'videoController', templateUrl: 'components/video/video.html'})
    
    .when('/blog', {controller: 'blogController', templateUrl: 'components/blog/blog.html'})
    
    .when('/audio', {controller: 'audioController', templateUrl: 'components/audio/audio.html'})
    
    .otherwise({controller: 'homeController', templateUrl: 'components/home/home.html'})
}])
.controller('MainCtrl', ['$scope', 'dataProvider', function MainCtrl($scope, dataProvider) {


    

    initializer();

}]);

