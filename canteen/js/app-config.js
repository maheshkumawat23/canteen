

app.run(['$rootScope', '$ionicPlatform', '$state', '$window', function ($rootScope, $ionicPlatform, $state, $window) {
  // bootstrap3 theme. Can be also 'bs2', 'default'
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    // if (window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    // }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    createTable();

  });


  //First time set local storage
  // if ($window.localStorage.getItem('firsttime') === null) {
  //   $window.localStorage.setItem('firsttime', 'true');
  // }

}]);

//app run over
//app config start                  
app.config(function ($stateProvider, $urlRouterProvider,$httpProvider) {
$httpProvider.defaults.useXDomain = true;
$stateProvider  
 .state('login', {
    cache: false,
    url: '/login',
    templateUrl: 'app/login/login.html',
    controller:'loginController'
  })
  .state('home',{
    cache:false,
    url:'/home',
    templateUrl:'app/home/home.html',
    controller:'homeController'
  })
  .state('admin',{
    cache:false,
    url:'/admin',
    templateUrl:'app/admin/admin.html',
    controller:'adminController'
  })

  $urlRouterProvider.otherwise('/login');


});

function createTable()
{
  var db = openDatabase('mydb', '1.0', 'Test DB1', 5* 1024 * 1024);
  function createSuccess(){
    console.log('created table');
  }
  function onError(){
    console.log('some error in creating the table');
  }

  db.transaction(function(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS Canteen (empId,location,vendorName,taste,Service,Hygine,veriety,quality,quantity,comments,submitDate)',[],createSuccess,onError);
    
  });
}




