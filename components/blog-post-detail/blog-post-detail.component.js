
angular.module('app.components').component('blogPostDetail',
  {
    bindings : {
      info : "<",
    },
    templateUrl: 'components/blog-post-detail/blog-post-detail.html',
  });