'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing the signup controller', function () {

  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
      this.signupCtrl.$onInit();
    });
  });

  it('should have a title', () => {
    expect(this.signupCtrl.title).toBe('This is where we signup for the app');
  });

});
