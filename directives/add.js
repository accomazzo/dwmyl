(function() {
  'use strict';

  angular
    .module('app')
    .directive('add', add);
    
  function add() {
    return {
      scope: {
          dataObj: '=set',
          destroy: '='
      },     
      controller: function() {},
      controllerAs: 'ctrl',
      bindToController: true,
      transclude: true,
      replace: true,
      restrict: 'EA',
      templateUrl: 'directives/add.html',
      link: function(scope, elem, attrs) {

        scope.addGoal = function (){
          var data = scope.ctrl.dataObj;
          data({
            text: scope.goalText, 
            type: scope.goalType
          });
        }

        scope.clearCompleted = function () {
          var removeItems = scope.ctrl.destroy;
            removeItems();
        }

      } 
    }
  }

})();





