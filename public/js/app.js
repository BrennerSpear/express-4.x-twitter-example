var app = angular.module("PassportApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html'
    })
    .when('/loggedin', {
      templateUrl: 'views/loggedin.html',
      controller: 'LoginCtrl'
    })
    // .when('/profile', {
    //   templateUrl: 'views/profile.html',
    //   resolve: {
    //     logincheck: checkLoggedin
    //   }
    // })
    .otherwise({
      redirectTo: '/home'
    })
});

// var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
//   var deferred = $q.defer();

//   $http.get('/loggedin').success(function(user) {
//     $rootScope.errorMessage = null;
//     //User is Authenticated
//     if (user !== '0') {
//       $rootScope.currentUser = user;
//       deferred.resolve();
//     } else { //User is not Authenticated
//       $rootScope.errorMessage = 'You need to log in.';
//       deferred.reject();
//       $location.url('/login');
//     }
//   });
//   return deferred.promise;
// }