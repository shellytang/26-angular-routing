'use strict';

require('./_signup.scss');

module.exports = ['$log', function($log) {
  $log.debug('SignupController');
  this.$onInit = () => {
    this.title = 'This is where we signup for the app';
  };
}];
