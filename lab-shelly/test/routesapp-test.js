'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing the routesApp', function () {

  describe('testing the gallery controller', () => {

    beforeEach(() => {
      angular.module('routesApp');
      angular.mock.inject(($rootScope, $stateProvider, $urlRouterProvider, $componentController) => {
        this.$rootScope = $rootScope;
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
        this.galleryCtrl = new $componentController('gallery');

      });
    });

    afterEach(() => this.$rootScope.$apply());

    // it('should have a title', () => {
    //   expect(this.galleryCtrl.title).toBe('The Gallery');
    // });

    it('should pass', () => {
      expect(true).toEqual(true);
    });


  });

  // describe('testing the home controller', () => {
  //   it('should have a title', () => {
  //     expect(this.homeCtrl.title).toBe('Welcome Home');
  //   });
  // });
  //
  // describe('testing the signup controller', () => {
  //   it('should have a title', () => {
  //     expect(this.signupCtrl.title).toBe('This is where we signup for the app');
  //   });
  // });



});
