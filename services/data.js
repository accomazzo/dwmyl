(function() {
  'use strict';

  angular
    .module('dataService', ['firebase'])
    .factory('DataService', DataService);
    
  DataService.$inject = ['$firebaseArray', '$firebaseObject'];

  function DataService($firebaseArray, $firebaseObject) {
    //create, retrieve, update, destroy data from AngularFire

    var url = 'https://dwmyl.firebaseio.com/item';
    var fireRef = new Firebase(url);
    var goals = $firebaseArray(fireRef);

    var factory = {};

    factory.create = function (data) {   
        goals.$add({
          "type": data.type,
          "completed": false,
          "text": data.text
        });         
    }

    factory.retrieve = function () { 
      return goals;
    }

    factory.update = function (data) {
      var itemID = data.$id;
      var url = 'https://dwmyl.firebaseio.com/item/' + itemID;
      console.log(url);
      var ref = new Firebase(url);
      var completeGoal = $firebaseObject(ref);

      completeGoal.type = data.type;
      completeGoal.text = data.text;
      completeGoal.$id = itemID;

      if(data.completed === false) {
        completeGoal.completed = true;
      }
      else {
        completeGoal.completed = false;
      }

      completeGoal.$save()
        .then(function(ref) {
          ref.key() === data.$id; // true
        }, function(error) {
          console.log("Error:", error);
        });
    }

    factory.destroy = function () {
      goals.$loaded()
        .then(function(){
            for (var i = 0; i < goals.length; i++) {
              if (goals[i].completed === true) {
              goals.$remove(goals[i]);
              }
            }
        })
        .catch(function(error) {
          console.error("Error:", error);
        });
    }

    return factory;

  }
  
})();