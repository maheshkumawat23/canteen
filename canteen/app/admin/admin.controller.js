app.controller('adminController',function($scope,$http){

    $scope.feedbackData = [];

	var db = openDatabase('mydb', '1.0', 'Test DB', 5 * 1024 * 1024);
      db.transaction(function (tx) 
      {
        //console.log(db);
        tx.executeSql('SELECT * FROM Canteen', [], function (tx, results) {
          dataset = results.rows;
          console.log(dataset.length);
           if(dataset.length>0)
           {
           	//orderInfo.orderLength = dataset.length;
            for(var i=0;i<dataset.length;i++)
            {
              var data = dataset.item(i);
              var feedback ={
                  empId: data['empId'],
                  location: data['location'],
                  vendorName : data['vendorName'],
                  taste: data['taste'],
                  service : data['Service'],
                  hygine : data['Hygine'],
                  veriety : data['veriety'],
                  quality : data['quality'],
                  quantity : data['quantity'],
                  comments : data['comments'],
                  submitDate : data['submitDate']
              }
              //console.log(productDetails);
              $scope.feedbackData.push(feedback);
              
            }
            
          }
        });
      });
      $scope.sync = function() {
        console.log('clicking sync');
console.log($scope.feedbackData);
 $http.post('http://localhost:3000/api/posts',$scope.feedbackData).then(successCallback, errorCallback);
       console.log('i am in the post');
      }
      function successCallback(data) {
        console.log('success');
        console.log(data);
      }
      function errorCallback(){
        console.log('error');
      }

});