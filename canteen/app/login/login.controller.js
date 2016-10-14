app.controller('loginController', function($scope,$ionicModal,$state){
    $scope.locationNames = ["location1","location2","location3","location4","location5","location6","location7","location8"];
    $scope.vendorNames = ["location1","location2","location3","location4","location5","location6","location7","location8"];
    $scope.data ={};
    console.log($scope.data.username);
    $scope.login = function() {
         localStorage.setItem("username",$scope.data.username);
        localStorage.setItem("location",$scope.data.selectedLocationName);
        localStorage.setItem("vendor",$scope.data.selectedVendorName);
        
            $state.go('home');
    };
    $scope.adminLogin = function() {
        $state.go('admin');
    }

    $ionicModal.fromTemplateUrl('app/login/adminlogin.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        //alert('hello');
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });

    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });

});