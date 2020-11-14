function navBarController() {

  var ctrl = this;

  printNav = function () {
    console.log(ctrl.nav)
  }

  printNav();

}

angular.module('app.components').component('navBar',
  {
    templateUrl: 'components/nav/nav.html',
    bindings: {
      nav: "<"
    },
    controller: navBarController
  });