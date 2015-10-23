(function() {
  'use strict';

  angular
    .module('app')
    .directive('item', item);
    
  function item() {
    return {
      scope: {
        item: '=set',
        onClick: '&',
        listType: '=',
        update: '='
      },      
      controller: function() {},
      controllerAs: 'ctrl',
      bindToController: true,
      transclude: true, 
      replace: true,
      restrict: 'EA',
      templateUrl: 'directives/items.html',
      link: function(scope, elem, attrs) {

        scope.$parent.onChange = function (data) {
          scope.ctrl.update(data);
        }        

        //filter the items by type: day, month, year, life
        var filter = {type: scope.ctrl.listType};
        scope.typeFilter = filter;  

      }
    }
  }    

})();