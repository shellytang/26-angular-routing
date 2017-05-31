'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing the gallery controller ', function () {

  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
      this.galleryCtrl.$onInit();
    });
  });

  it('should have a title', () => {
    expect(this.galleryCtrl.title).toBe('The Gallery');
  });


});
