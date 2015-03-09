angular.module('starter').factory('InstructionsService', [ function() {

  var instructionsObj = {};

  instructionsObj.instructions = {
    newLocations : {
      text : 'Aperte e segure para fazer uma denúncia',
      seen : false
    }
  };

  return instructionsObj;

}]);
