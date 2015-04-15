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
    data:{ pageTitle: 'Games of Thrones Test' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', ['$scope', '$timeout', function HomeController( $scope , $timeout) {

	$scope.message = "";
    $scope.showMessage = false;
	$scope.character = undefined;
	$scope.castle = undefined;
	$scope.Winterfell = [];
	$scope.Port_Real = [];
	$scope.Meereen = [];
	
	$scope.characters = [
        {
            id: 1,       
			group: "Starks",			
            label: "Eddard Stark",
			castle: 0
        },
        {
            id: 2,
			group: "Starks",			
            label: "Catelyn Stark",
			castle: 0
        },
        {
            id: 3,
            group: "Starks",
            label: "Robb Stark",
            castle: 0
        },
        {
            id: 4,
            group: "Starks",
            label: "Sansa Stark",
            castle: 0
        },
        {
            id: 5,
            group: "Starks",
            label: "Arya Stark",
            castle: 0
        },
        {
            id: 6,
            group: "Starks",
            label: "Bran Stark",
            castle: 0
        },
        {
            id: 7,
			group: "Starks",			
            label: "Jon Snow",
			castle: 0
        },
        {
            id: 8,
			group: "Lanisters",			
            label: "Tywin Lanister",
			castle: 0
        },
        {
            id: 9,
            group: "Lanisters",
            label: "Cersei Lanister",
            castle: 0
        },
        {
            id: 10,
            group: "Lanisters",
            label: "Jaime Lanister",
            castle: 0
        },
        {
            id: 11,
            group: "Lanisters",
            label: "Tyrion Lanister",
            castle: 0
        },
        {
            id: 12,
            group: "Lanisters",
            label: "Joffrey Baratheon",
            castle: 0
        },
        {
            id: 13,
            group: "Lanisters",
            label: "Myrcella Baratheon",
            castle: 0
        },
        {
            id: 14,
            group: "Boltons",
            label: "Roose Bolton",
            castle: 0
        },
        {
            id: 15,
            group: "Boltons",
            label: "Ramsay Bolton",
            castle: 0
        },
        {
            id: 16,
            group: "Boltons",
            label: "Reek",
            castle: 0
        },
        {
            id: 17,
            group: "Boltons",
            label: "Walda Bolton",
            castle: 0
        },
        {
            id: 18,
            group: "Freys",
            label: "Walder Frey",
            castle: 0
        },
        {
            id: 19,
            group: "Freys",
            label: "Lothar Frey",
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
            label: "Harrenhal"
        },
        {
            id: 3,
            label: "Casterly Rock"
        },
        {
            id: 4,
            label: "Dragonstone"
        },
        {
            id: 5,
            label: "Harrenhal"
        },
        {
            id: 6,
            label: "Moat Cailin"
        },
        {
            id: 7,
            label: "Castle Black"
        },
        {
            id: 8,
            label: "Highgarden"
        },
        {
            id: 9,
            label: "The Dreadfort"
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
                $scope.showMessage = true;
			}
			else
			{
				$scope.message = moveLabel + " wasn't assigned to " + $scope.castles[$scope.castle - 1].label + " because its already there :P ";
                $scope.showMessage = true;
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
                $scope.showMessage = true;
			}
			else
			{
				$scope.message = moveLabel + " wasn't assigned to " + $scope.castles[$scope.castle - 1].label + " because its already there :P ";
                $scope.showMessage = true;
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
                $scope.showMessage = true;
			}
			else
			{
				$scope.message = moveLabel + " wasn't assigned to " + $scope.castles[$scope.castle - 1].label + " because its already there :P ";
                $scope.showMessage = true;
			}
			
		}

        $timeout(function()
        {

            $timeout(function() {
                $scope.showMessage = false;
            }, 3000);

        }, 2000);

	}; 
	
}]);

