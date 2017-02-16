require('./home-template.html');

module.exports = ['$log', HomeController];

function HomeController($log) {
  $log.debug('HomeController');
}