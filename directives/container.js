(function() {
  'use strict';

  angular
    .module('app')
    .directive('container', container);
    
  function container() {
    return {
      controller: 'MainCtrl',
      controllerAs: 'ctrl',
      replace: true,
      bindToController: true,
      templateUrl: 'directives/container.html'
    }
  }

})();


