
function _config(iScrollServiceProvider) {
    // Supply a default configuration object, eg:
    iScrollServiceProvider.configureDefaults({
        iScroll: {
            // Passed through to the iScroll library
            scrollbars: true,
            fadeScrollbars: true
        },
        directive: {
            // Interpreted by the directive
            refreshInterval: 500
        }
    });
}

(function(angular) {
  'use strict';
angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
  /* .config(_config)
  .when('/',{template:'This is the default Route'})
                .when('/route/:id',
                    {
                        template:'Referred item is {{ctrl.id}}' + ' and passed query-string values are {{ctrl.qStrName}} , {{ctrl.qStrAge}}',
                        controller: ['$routeParams', function($routeParams) {
                            var self=this;
                            self.id = $routeParams.id;
                            self.qStrName = $routeParams.name;
                            self.qStrAge = $routeParams.age;
                        }],
                        controllerAs: 'ctrl'
                    })
                .otherwise({redirectTo:'/'});
  resolve: {
            message: function(messageService){
                return messageService.getMessage();
        }
  */
  .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/Book/:bookId', {
          templateUrl: 'book.html',
          controller: 'BookCtrl'
          
        })
        .when('/Book/:bookId/ch/:chapterId', {
          templateUrl: 'chapter.html',
          controller: 'ChapterCtrl',
          controllerAs: 'chapter'
        });

      $locationProvider.html5Mode(true);


  })
  .controller('MainCtrl', 
    function($route, $routeParams, $location, $scope) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $scope.test123=function(){
        alert("MainCtrl-test123")
      }
      $scope.test234=function(e){
      alert("MainCtrl-test234");
    }
  })
  .controller('BookCtrl', function($routeParams,$scope) {
    this.name = "BookCtrl";
    this.params = $routeParams;
    /*$scope.test234=function(e){
      alert("test234");
    }
    $scope.test123=function(){
        alert("test123")
      }*/

  })
  .controller('ChapterCtrl', function($routeParams,$scope) {
    this.name = "ChapterCtrl";
    this.params = $routeParams;
  $scope.test123=function(){
        alert("MainCtrl-test123")
      }
      $scope.test234=function(e){
      alert("MainCtrl-test234");
    }
/*$scope.$parent.myScrollOptions = {
        'wrapper': {
            snap: false,
            onScrollEnd: function ()
            {
                alert('finshed scrolling wrapper2');
            }}
    };*/


/*    $scope.refreshiScroll3 = function ()
    {
        $scope.$parent.myScroll['wrapper3'].refresh();
        alert('wrapper3 refreshed');
    };


    $scope.refreshiScroll2 = function ()
    {
        $scope.$parent.myScroll['testWrap2'].refresh();
        alert('testWrap2 refreshed');
    };*/
/*
    $scope.$parent.myScrollOptions = {
        snap: false,
        onScrollEnd: function ()
        {
            alert('finshed scrolling');
        }
    };

    // expose refreshiScroll() function for ng-onclick or other meth
    $scope.refreshiScroll = function ()
    {
        $scope.$parent.myScroll['wrapper'].refresh();
    };
*/

  });
})(window.angular);
 //var element = angular.element(document.getElementById("ngViewExample"));
/*
   var viewContentElement = angular.element(
            document.querySelectorAll('.viewContent')[0]);
        $rootScope.viewController = viewContentElement.controller();*/
//var $scope = angular.element(appElement).scope(); 
// var scope = element.scope();
 //scope.$apply();
 // scope.field1;

 function test123(n){
  var a = document.querySelector('[ng-controller="BookCtrl"]');
alert(a)
  alert("1");
  //alert(a)
  //$scope.test123();
 }
 function book(){
  var el = document.getElementById('bookId');
var ngEl = angular.element(el);
var scope = ngEl.scope();
scope.test234();
scope.test123();

//scope.name // 'Joe'
//var $scope = angular.element(appElement).scope();
//console.log($scope);
/*$scope.$apply(function() {
    $scope.user.zoomlvl = valZoom;
});*/
 }