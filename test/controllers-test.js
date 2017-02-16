require('../app/entry.js');
require('angular-mocks');

let angular = require('angular');

describe('GalleryController', function() {
  beforeEach(function() {
    angular.mock.module('routesApp');
    angular.mock.inject(($controller) => {
      this.GalleryCtrl = new $controller('GalleryController')
    });
  });

  describe('should have title', function() {
    it('title should be ', function() {
      console.log(this.GalleryCtrl);
      expect(this.GalleryCtrl.title).toEqual('I am the GalleryController, this is my title.');
    });
  });
});
