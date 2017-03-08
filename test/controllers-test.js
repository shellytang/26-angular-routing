require('../app/entry.js');
require('angular-mocks');

let angular = require('angular');

describe('GalleryController', function() {
  beforeEach(function() {
    angular.mock.module('routesApp');
    angular.mock.inject(($controller) => {
      this.galleryCtrl = new $controller('GalleryController')
    });
  });

  describe('should have title', function() {
    it('title should be ', function() {
      console.log(this.galleryCtrl);
      expect(this.galleryCtrl.title).toEqual('I am the GalleryController, this is my title.');
    });
  });
});

describe('HomeController', function() {
  beforeEach(function() {
    angular.mock.module('routesApp');
    angular.mock.inject(($controller) => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  describe('should have title', function() {
    it('title should be ', function() {
      console.log(this.homeCtrl);
      expect(this.homeCtrl.title).toEqual('I am the HomeController, this is my title.');
    });
  });
});

describe('SignupController', function() {
  beforeEach(function() {
    angular.mock.module('routesApp');
    angular.mock.inject(($controller) => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('should have title', function() {
    it('title should be ', function() {
      console.log(this.signupCtrl);
      expect(this.signupCtrl.title).toEqual('I am the SignupController, this is my title.');
    });
  });
});
