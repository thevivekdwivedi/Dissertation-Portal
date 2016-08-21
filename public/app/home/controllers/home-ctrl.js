angular.module(window.appNamespace + '.home').controller('HomeCtrl',['$rootScope','$scope','$injector','$stateParams',
	function ($rootScope, $scope, $injector, $stateParams) {
		
		var $location 	= $injector.get('$location');
		$location.search('key', null);
		$scope.websites = "You Searched for";

		//Search Params
		$scope.catchQuery = $stateParams.query;
		$scope.res = $stateParams.query.split(" ");
		//console.log(res);

			$scope.tags = [];

			for ( var i = 0; i < $scope.res.length; i++ ) {
				$scope.tags.push({
					tagName: $scope.res[i]
				});
			}


			var companyNames = ["Flipkart", "Amazon", "eBay"];
			var companyRevenue = ["₹2,846 crore", "US$ 107 billion", "US$ 8.59 billion"];


			$scope.companyDetails = [];

			for ( var i = 0; i < companyNames.length; i++ ) {
				$scope.companyDetails.push({
					Name: companyNames[i],
					Revenue: companyRevenue[i]
				});
			}			


		$scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
		$scope.series = ['Series A', 'Series B'];

		$scope.data = [
		[65, 59, 80, 81, 56, 55, 40],
		[28, 48, 40, 19, 86, 27, 90]
		];

		$scope.edit = true;

		$scope.toggleList = function(edit){
			$scope.edit = !edit;
		}
	}

	]);