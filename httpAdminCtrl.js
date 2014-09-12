angular.module("httpAdmin")
  .controller("httpAdminCtrl", function($scope, $rootScope, $routeParams, $location, httpAdminSvc){

    httpAdminSvc.getProducts().success(function(products){
      $scope.products = products;
    });

    httpAdminSvc.getProduct($routeParams.idx).success(function(product){
      $scope.singleProduct = product;
      console.log($scope.singleProduct);
    });

    $scope.createProduct = function(product){
      httpAdminSvc.createProduct({
        name: product.name,
        price: product.price,
        quantity: 1,
        imageUrl: product.imageUrl,
        description: product.description,
        reviews: []
      });
      $location.path("/httpAdmin");
    };

    $scope.removeProduct = function(id){
      httpAdminSvc.deleteProduct(id);
    };

    $scope.editProduct = function(product){
      httpAdminSvc.updateProduct(product);
      $location.path("/httpAdmin");
    }


    $rootScope.$on("product:added", function(){
      httpAdminSvc.getProducts().success(function(products){
        $scope.products = products;
      });
    });

    $rootScope.$on("product:updated", function(){
      httpAdminSvc.getProducts().success(function(products){
        $scope.products = products;
      });
    });

    $rootScope.$on("product:deleted", function(){
      httpAdminSvc.getProducts().success(function(products){
        $scope.products = products;
      });
    });
  });
