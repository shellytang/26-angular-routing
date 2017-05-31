'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing the routesApp', function () {

  describe('testing the home controller', () => {

    beforeEach(() => {
      angular.mock.module('routesApp');
      angular.mock.inject($controller => {
        this.homeCtrl = new $controller('HomeController');
        this.homeCtrl.$onInit();
      });
    });

    it('should have a title', () => {
      expect(this.homeCtrl.title).toBe('Welcome Home');
    });
  });

  describe('testing the signup controller', () => {

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


  describe('testing the gallery controller', () => {

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

});
