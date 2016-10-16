/* created IIFE function to avoid collison */
(function () {
    angular.module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope', '$ionicModal', '$state', '$ionicPopup'];

    function loginController($scope, $ionicModal, state, $ionicPopup) {

/*******************************************************************************************************************/
        var vm = this;
        vm.login = login;
        vm.adminLogin = adminLogin;
        vm.checked = true;
        vm.locationNames = ["location1", "location2", "location3","location4", 
        "location5", "location6", "location7","location8"];
        vm.vendorNames = ["location1", "location2", "location3", "location4", 
        "location5", "location6", "location7", "location8"];
        vm.data = {};

/********************************************************************************************************************/

        /* login function to check user credentials */
        function login() {
            console.log(this.username + "," + this.selectedLocationName + "," + this.selectedVendorName);
            var username = vm.username;
            var selectedLocationName = vm.selectedLocationName;
            var selectedVendorName = vm.selectedVendorName;

            if (username === undefined || selectedLocationName === undefined || selectedVendorName === undefined) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Warning',
                    template: 'Please fill all the field'
                });

                alertPopup.then(function (res) {
                    console.log('Thank you for submitting your respone in warning popup');
                });
            }
            else {
                localStorage.setItem("username", username);
                localStorage.setItem("location", selectedLocationName);
                localStorage.setItem("vendor", selectedVendorName);
                state.go('home');
            }

        }
        function adminLogin() {
           // console.log(vm.adminUserName + "," + vm.adminPassword);
            if (vm.adminUserName === undefined || vm.adminPassword === undefined) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Warning',
                    template: 'Please fill all the field'
                });

                alertPopup.then(function (res) {
                    console.log('Thank you for submitting your respone in warning popup');
                });

            }
            else {
                state.go('admin');
            }
        }

        $ionicModal.fromTemplateUrl('app/login/adminlogin.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function () {
            //alert('hello');
            $scope.modal.show();
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });

        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });

        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });

    }
})();
/*app.controller('loginController', function($scope,$ionicModal,$state){
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

});*/