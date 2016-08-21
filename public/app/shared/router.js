angular.module(window.appNamespace + '.shared')

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',

        function($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/login');
            

            $stateProvider
                .state('login', {
                    url:'/login',
                    templateUrl: 'app/login/templates/login.html',
                    controller: 'LoginCtrl'
                })
                .state('landing',{
                	url: '/landing',
                	templateUrl: 'app/landing/templates/landing.html',
                	controller: 'LandingCtrl'
              }).state('scholardashboard',{
                	url: '/scholardashboard',
                	templateUrl: 'app/scholardashboard/templates/scholardashboard.html',
                	controller: 'ScholarDashboardCtrl'
              });

}

]);