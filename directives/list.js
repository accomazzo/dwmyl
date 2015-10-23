(function() {
  'use strict';

  angular
    .module('app')
    .directive('list', list);
    
  function list() {
    return {
      scope: {
        listType: '@',
        item: '=set',
        update: '='
      },
      restrict: 'EA',
      replace: true,
      controller: function() {},
      controllerAs: 'ctrl',
      bindToController: true,
      transclude: true, 
      templateUrl: 'directives/list.html'
    }
  };    
    
})();