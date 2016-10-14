app.controller('homeController',function($scope,$ionicPopup,$state){
 $scope.rating={};
  $scope.rating.max = 5;
  console.log($scope.rating.taste);
  $scope.showAlert = function() {

     function OnInsertSucess() {
      console.log('inserted successfully');
    }

    
    function onError() {
      console.log('error');
    }

   var d = new Date();
   var submitDate = d.toISOString();
    var db = openDatabase('mydb', '1.0', 'Test DB', 5 * 1024 * 1024);
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO Canteen(empId,location,vendorName,taste,Service,Hygine,veriety,quality,quantity,comments,submitDate) VALUES (?,?,?,?,?,?,?,?,?,?,?)',[localStorage.getItem("username"),localStorage.getItem("location"),localStorage.getItem("vendor"),$scope.rating.taste,$scope.rating.service,$scope.rating.hygine,$scope.rating.veriety,$scope.rating.quality,$scope.rating.quantity,$scope.rating.comments,submitDate], OnInsertSucess, onError);
    });
   var alertPopup = $ionicPopup.alert({
     title: 'Thanks For your feedback!',
     template: 'Press Ok to save your response'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
    // console.log($scope.rating.taste);
    localStorage.clear();
     $state.go('login');
   });
 };
});