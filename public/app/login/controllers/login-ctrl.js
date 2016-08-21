angular.module(window.appNamespace + '.login').controller('LoginCtrl',['$rootScope','$scope','$injector','$stateParams','$state',
	function ($rootScope, $scope, $injector, $stateParams, $state) {
		

		$scope.goToLanding = function(){
			$state.go('landing');
		}


		
	}

	]);