angular.module(window.appName,
	[
	'ui.bootstrap',
	'ui.router',
	'ngResource',
	window.appNamespace + '.shared',
	window.appNamespace + '.landing',
	window.appNamespace + '.home',
	window.appNamespace + '.login',
	window.appNamespace + '.scholardashboard'

	])
	.run(['$rootScope','$state', function($rootScope, $state) {
   
   			}]);


//App.js

