(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainCtrl', MainCtrl);
    
  MainCtrl.$inject = ['$scope','DataService'];
  
  function MainCtrl ($scope, DataService) {

    this.create = DataService.create;
    this.item = DataService.retrieve();
    this.update = DataService.update;
    this.destroy = DataService.destroy;

  };

})();