/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope ) {

	$scope.message = "";
	$scope.character = undefined;
	$scope.castle = undefined;
	$scope.Winterfell = [];
	$scope.Port_Real = [];
	$scope.Meereen = [];
	
	$scope.characters = [
        {
            id: 1,       
			group: "Starks",			
            label: "Ned Stark",
			castle: 0
        },
        {
            id: 2,
			group: "Starks",			
            label: "Catlyn Stark",
			castle: 0
        },
        {
            id: 3,            
			group: "Starks",			
            label: "John Snow",
			castle: 0
        },
        {
            id: 4,
			group: "Lanisters",			
            label: "Tywin Lanister",
			castle: 0
        }		
	];

	$scope.castles = [
        {
            id: 1,
            label: "Winterfell"
        },
        {
            id: 2,			
            label: "Port Real"
        },
        {
            id: 3,
            label: "Meereen"
        }		
	];

	$scope.deleteCharacter = function(castle,character)
	{
		var index = null;
		var cnt = 0;
		if( castle == 1)
		{			
			index = $scope.existeCharacter(castle,character);			
			if(index !== null)
			{
				$scope.Winterfell.splice(index, 1);
			}		
		}
		
		if( castle == 2)
		{
			index = $scope.existeCharacter(castle,character);						
			if(index !== null)
			{
				$scope.Port_Real.splice(index, 1);
			}			
		}
		
		if( castle == 3)
		{		
			index = $scope.existeCharacter(castle,character);			
			if(index !== null)
			{
				$scope.Meereen.splice(index, 1);
			}
		}	 
		
	};
	
	$scope.existeCharacter = function(castle,character)
	{
		var index = null;
		var cnt = 0;
		if( castle == 1)
		{			
			cnt = $scope.Winterfell.length;
			for(i=0;i<cnt;i++)
			{
				if($scope.Winterfell[i].id === character)
				{
					index = i;
				}
			}			
		}
		
		if( castle == 2)
		{			
			cnt = $scope.Port_Real.length;
			for(i=0;i<cnt;i++)
			{
				if($scope.Port_Real[i].id === character)
				{
					index = i;
				}
			}			
		}
		
		if( castle == 3)
		{		
			cnt = $scope.Meereen.length;
			for(i=0;i<cnt;i++)
			{
				if($scope.Meereen[i].id === character)
				{
					index = i;
				}
			}			
		}	 
		
		return index;
		
	};	
	
	$scope.characterSelect = function()
	{
		//console.log($scope.character);
	};

	$scope.castleSelect = function()
	{

		var moveLabel = $scope.characters[$scope.character-1].label;
		var moveId = $scope.characters[$scope.character-1].id;	
		
		if($scope.castle == 1)
		{
			if($scope.existeCharacter(1,moveId) == null)
			{
				if($scope.characters[$scope.character-1].castle === 0)
				{
					$scope.Winterfell.push({'id':moveId, 'label':moveLabel});				
				}
				else
				{
					$scope.Winterfell.push({'id':moveId, 'label':moveLabel});
					$scope.deleteCharacter(2,moveId);
					$scope.deleteCharacter(3,moveId);
				}
				$scope.characters[$scope.character-1].castle = 1;
				$scope.message = moveLabel + " was successfully assigned to " + $scope.castles[$scope.castle - 1].label;
			}
			else
			{
				$scope.message = moveLabel + " wasn't assigned to " + $scope.castles[$scope.castle - 1].label + " because its already there :P ";
			}
		}
		
		if($scope.castle == 2)
		{
			if($scope.existeCharacter(2,moveId) == null)
			{		
				if($scope.characters[$scope.character-1].castle === 0)
				{
					$scope.Port_Real.push({'id':moveId, 'label':moveLabel});					
				}
				else
				{
					$scope.Port_Real.push({'id':moveId, 'label':moveLabel});
					$scope.deleteCharacter(1,moveId);
					$scope.deleteCharacter(3,moveId);
				}			
				$scope.characters[$scope.character-1].castle = 2;
				$scope.message = moveLabel + " was successfully assigned to " + $scope.castles[$scope.castle - 1].label;
			}
			else
			{
				$scope.message = moveLabel + " wasn't assigned to " + $scope.castles[$scope.castle - 1].label + " because its already there :P ";
			}
			
		}
		
		if($scope.castle == 3)
		{		
			if($scope.existeCharacter(3,moveId) == null)
			{		
				if($scope.characters[$scope.character-1].castle === 0)
				{
					$scope.Meereen.push({'id':moveId, 'label':moveLabel});	
				}
				else
				{
					$scope.Meereen.push({'id':moveId, 'label':moveLabel});
					$scope.deleteCharacter(1,moveId);
					$scope.deleteCharacter(2,moveId);
				}				
				$scope.characters[$scope.character-1].castle = 3;
				$scope.message = moveLabel + " was successfully assigned to " + $scope.castles[$scope.castle - 1].label;
			}
			else
			{
				$scope.message = moveLabel + " wasn't assigned to " + $scope.castles[$scope.castle - 1].label + " because its already there :P ";
			}
			
		}				

	}; 
	
});

