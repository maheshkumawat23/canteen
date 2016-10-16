(function () {

  angular.module('app')
    .controller('homeController', homeController);

  homeController.$inject = ['$scope', '$ionicPopup', '$state'];
  function homeController($scope, $ionicPopup, $state) {
    var vm = this;
    vm.rating = {
      'taste': 0,
      'service': 0,
      'hygine': 0,
      'veriety': 0,
      'quality': 0,
      'quantity': 0,
    };
    vm.rating.max = 5;
    vm.showAlert = showAlert;
    //$scope.rating = {};
    //$scope.rating.max = 5;
    console.log(vm.rating.taste);

   function showAlert() {
      
      if(vm.rating.comments === undefined)
      {
          vm.rating.comments = "No comments";
      }

      function OnInsertSucess() {
        console.log('inserted successfully');
      }


      function onError() {
        console.log('error');
      }
      if(vm.rating.taste ===0 || vm.rating.service ===0 || vm.rating.hygine ===0||vm.rating.veriety===0||vm.rating.quality===0||vm.rating.quantity==0){
        var alertPopup = $ionicPopup.alert({
        title: 'Alert',
        template: 'Please give feedback to all fields !!!'
      });
      }
      else
      {
      console.log(vm.rating.comments);
      var d = new Date();
      var submitDate = d.toISOString();
      var db = openDatabase('mydb', '1.0', 'Test DB', 5 * 1024 * 1024);
      db.transaction(function (tx) {

        tx.executeSql('INSERT INTO Canteen(empId,location,vendorName,taste,Service,Hygine,veriety,\
        quality,quantity,comments,submitDate) \
        VALUES (?,?,?,?,?,?,?,?,?,?,?)',
          [localStorage.getItem("username"), localStorage.getItem("location"), localStorage.getItem("vendor"),
            vm.rating.taste, vm.rating.service,
            vm.rating.hygine, vm.rating.veriety,
            vm.rating.quality, vm.rating.quantity,
            vm.rating.comments, submitDate
          ],
          OnInsertSucess, onError);
      });
      var alertPopup = $ionicPopup.alert({
        title: 'Thanks For your feedback!',
        template: 'Press Ok to save your response'
      });

      alertPopup.then(function (res) {
        console.log('Thank you for not eating my delicious ice cream cone');
        // console.log($scope.rating.taste);
        localStorage.clear();
        $state.go('login');
      });
    }
   };
  }
})();
