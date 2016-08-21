angular.module(window.appNamespace + '.landing')
.controller('LandingCtrl',['$rootScope','$scope','$injector','$state',
	function ($rootScope, $scope, $injector, $state) {
		
	$scope.goToScholarDashboard = function(){
			$state.go('scholardashboard');
		}
	}

]);