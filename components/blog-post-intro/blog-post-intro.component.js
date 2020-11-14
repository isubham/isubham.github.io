
angular.module('app.components').component('blogPostIntro',
  {
    bindings : {
      info : "<",
    },
    templateUrl: 'components/blog-post-intro/blog-post-intro.html',
  });