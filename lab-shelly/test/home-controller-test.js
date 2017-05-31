'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing the home controller', function () {

  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('GalleryController');
      this.homeCtrl.$onInit();
    });
  });

  it('should have a title', () => {
    expect(this.homeCtrl.title).toBe('The Gallery');
  });

});
