
module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  //urlRouterProvider when / -> /home

  let routes = [
    {
      name: 'home',
      route: '/home',
      template: require('../view/home/home-template.scss'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    }
    // gallery
    // signup
  ];
}