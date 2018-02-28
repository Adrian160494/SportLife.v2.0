app.controller('mainController',['$scope','$http','getters','$location',function ($scope, $http, getters, $location) {
    $scope.calculatedBMR = {
            sex: '',
            weight: '',
            height: '',
            age: '',
            activity: '',
            bmr: '',
            cpm: '',
            target: '',
            cpmTarget: ''
    };
    let protein=0, carbon=0,fat=0;
    $scope.viewTable = 'protein';
    $scope.errorCalculate = undefined;
    $scope.validMeals = false;
    $scope.creatorProducts = {
        protein: [],
        carbon: [],
        fat: []
    };

    $scope.getAll = function () {
        getters.getProtein.then(function (response) {
            $scope.proteins = response.data;
            console.log($scope.proteins);
        });
        getters.getCarbon.then(function (response) {
            $scope.carbons = response.data;
            console.log($scope.carbons);
        });
        getters.getFat.then(function (response) {
            $scope.fats = response.data;
            console.log($scope.fats);
        })
    };

    window.onload = $scope.getAll();
    $scope.calculateBMR = function (bmr) {
        console.log(bmr);
        if(bmr.sex == undefined || bmr.weight==undefined || bmr.height==undefined || bmr.age==undefined || bmr.activity == undefined || bmr.target ==undefined){
            $scope.errorCalculate = 'You must fill all fields!!!';
            console.log($scope.errorCalculate);
        } else {
            console.log('Jestem tu');
            $scope.calculatedBMR.sex = bmr.sex;
            $scope.calculatedBMR.weight = bmr.weight;
            $scope.calculatedBMR.height = bmr.height;
            $scope.calculatedBMR.age = bmr.age;
            $scope.calculatedBMR.activity = bmr.activity;
            $scope.calculatedBMR.target = bmr.target;
           if(bmr.sex!=undefined){
               if (bmr.sex == 'male') {
                   let first = 13.7 * $scope.calculatedBMR.weight;
                   let second = 5 * $scope.calculatedBMR.height;
                   let third = 6.76 * $scope.calculatedBMR.age;
                   let bmrr = 66 + first + second - third;
                   let cpm = bmrr * bmr.activity;
                   let cpmTarget = 0;
                   if (bmr.target == 'reduction') {
                       cpmTarget = cpm - 300;
                   } else {
                       cpmTarget = cpm + 300;
                   }
                   $scope.calculatedBMR.cpm = cpm;
                   $scope.calculatedBMR.cpmTarget = cpmTarget;
                   $scope.calculatedBMR.bmr = bmrr;
               } else {
                   let first = 9.6 * $scope.calculatedBMR.weight;
                   let second = 1.8 * $scope.calculatedBMR.height;
                   let third = 4.7 * $scope.calculatedBMR.age;
                   let bmrr = 655 + first + second - third;
                   let cpm = bmrr * bmr.activity;
                   $scope.calculatedBMR.bmr = bmrr;
                   let cpmTarget = 0;
                   if (bmr.target == 'reduction') {
                       cpmTarget = cpm - 300;
                   } else {
                       cpmTarget = cpm + 300;
                   }
                   $scope.calculatedBMR.cpm = cpm;
                   $scope.calculatedBMR.cpmTarget = cpmTarget;
                   $scope.calculatedBMR.bmr = bmrr;
               }
           }
            console.log($scope.calculatedBMR);
            $location.path('/conclusion');
        }

    };
    window.onload = $scope.getAll();


    $scope.changeViewTable = function (value) {
        if(value=='protein'){
            $scope.viewTable = 'protein';
        } else if(value=='carbon'){
            $scope.viewTable = 'carbon';

        } else if(value=='fat'){
            $scope.viewTable = 'fat';
        }
    };

    $scope.addToCreator = function (product,index) {
        if($scope.viewTable == 'protein'){
            $('#proteinButton'+index).css('display','none');
            $scope.creatorProducts.protein[protein] = product;
            protein++;
            $scope.checkButtonPrepare();
        } else if ($scope.viewTable =='carbon'){
            $('#carbonButton'+index).css('display','none');
            $scope.creatorProducts.carbon[carbon] = product;
            carbon++;
            $scope.checkButtonPrepare();
        } else if ( $scope.viewTable == 'fat'){
            $('#fatButton'+index).css('display','none');
            $scope.creatorProducts.fat[fat] = product;
            fat++;
            $scope.checkButtonPrepare();
        }
    };

    $scope.checkButtonPrepare = function () {
        if($scope.creatorProducts.protein.length >2 && $scope.creatorProducts.carbon.length>3 && $scope.creatorProducts.fat.length >1){
            $('#btn_prepare').css('display','block');
        } else {
            $('#btn_prepare').css('display','none');
        }
    };

    $scope.prepareMeals = function (params) {
        console.log(params);
    }

}]);