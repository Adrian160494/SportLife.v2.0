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
    let protein=0, carbon=0, fat=0, protein2 =0, carbon2=0, fat2=0, kcal=0;
    $scope.viewTable = 'protein';
    $scope.errorCalculate = undefined;
    $scope.validMeals = false;
    $scope.targetProperties = {};
    $scope.creatorProducts = {
        protein: [],
        carbon: [],
        fat: []
    };
    $scope.makroProducts = [];

    $scope.meals = [];

    $scope.errorMeals = null;
    $scope.showError = false;
    $scope.getAll = function () {
        getters.getProtein.then(function (response) {
            $scope.proteins = response.data;
            console.log($scope.proteins);
        });
        getters.getCarbon.then(function (response) {
            $scope.carbons = response.data;
        });
        getters.getFat.then(function (response) {
            $scope.fats = response.data;
        })
    };

    window.onload = $scope.getAll();
    $scope.calculateBMR = function (bmr) {
        console.log(bmr);
        if(bmr.sex == undefined || bmr.weight==undefined || bmr.height==undefined || bmr.age==undefined || bmr.activity == undefined || bmr.target ==undefined){
            $scope.errorCalculate = 'You must fill all fields!!!';

        } else {
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
            document.getElementById('proteinButton'+index).disabled = true;
            $scope.creatorProducts.protein.push(product);
            protein++;
            $scope.checkButtonPrepare();
        } else if ($scope.viewTable =='carbon'){
            document.getElementById('carbonButton'+index).disabled = true;
            $scope.creatorProducts.carbon.push(product);
            carbon++;
            $scope.checkButtonPrepare();
        } else if ( $scope.viewTable == 'fat'){
            document.getElementById('fatButton'+index).disabled = true;
            $scope.creatorProducts.fat.push(product);
            fat++;
            $scope.checkButtonPrepare();
        }
    };

    $scope.removeFromCreator = function (index,name,item) {
        switch (name){
            case 'protein':
                $scope.creatorProducts.protein.splice(index,1);
                for(var i=0;i<$scope.proteins.length;i++){
                    if(item.product == $scope.proteins[i].product){
                        document.getElementById('proteinButton'+i).disabled = false;
                    }
                }
                break;
            case 'carbon':
                $scope.creatorProducts.carbon.splice(index,1);
                for(var n=0;n<$scope.carbons.length;n++){
                    if(item.product === $scope.carbons[n].product){
                        document.getElementById('carbonButton'+n).disabled = false;
                    }
                }
                break;
            case 'fat':
                $scope.creatorProducts.fat.splice(index,1);
                for(var k=0;k<$scope.fats.length;k++){
                    if(item.product === $scope.fats[k].product){
                        document.getElementById('fatButton'+k).disabled = false;
                    }
                }
                break;
        }
    };

    $scope.addToMakro = function (product, index, name) {
        var product2 = {product: product, type: name};
      $scope.makroProducts.push(product2);
        switch (name){
            case 'protein':
                document.getElementById('makroProteinButton'+index).disabled = true;
                break;
            case 'carbon':
                document.getElementById('makroCarbonButton'+index).disabled = true;
                break;
            case 'fat':
                document.getElementById('makroFatButton'+index).disabled = true;
                break;
        }

    };

    $scope.removeFromMakro = function (index) {
        var product = $scope.makroProducts[index];
        console.log(product);
        $scope.makroProducts.splice(index,1);
        switch (product.type){
            case 'protein':
                for(var i=0;i<$scope.proteins.length;i++){
                    if(product.product.product === $scope.proteins[i].product){
                        document.getElementById('makroProteinButton'+i).disabled = false;
                        console.log(product.product);
                    }
                }
                break;
            case 'carbon':
                for(var n=0;n<$scope.carbons.length;n++){
                    if(product.product.product === $scope.carbons[n].product){
                        document.getElementById('makroCarbonButton'+n).disabled = false;
                    }
                }
                break;
            case 'fat':
                for(var k=0;k<$scope.fats.length;k++){
                    if(product.product.product === $scope.fats[k].product){
                        document.getElementById('makroFatButton'+k).disabled = false;
                    }
                }
                break;
        }
    };

    $scope.calculateMakro = function () {
        for(var i=0;i<$scope.makroProducts.length;i++){
            var id ='makroInput'+i;
            var input = document.getElementById(id).value;
            if(input){
                var product = $scope.makroProducts[i];
                protein2 += Math.floor((parseFloat(product.protein) * parseFloat(input))/100);
                carbon2 += Math.floor((parseFloat(product.carbon) * parseFloat(input))/100);
                fat2 += Math.floor((parseFloat(product.fat) * parseFloat(input))/100);
                kcal += Math.floor((parseFloat(product.kcal) * parseFloat(input))/100);
                document.getElementById('proteinLabel').innerHTML = protein2;
                document.getElementById('carbonLabel').innerHTML = carbon2;
                document.getElementById('fatLabel').innerHTML= fat2;
                document.getElementById('kcalLabel').innerHTML = kcal;
            }
        }
        protein2 = 0;
        carbon2 = 0;
        fat2 = 0;
        kcal=0;
    };

    $scope.checkButtonPrepare = function () {
        if($scope.creatorProducts.protein.length >2 && $scope.creatorProducts.carbon.length>3 && $scope.creatorProducts.fat.length >1){
            $('#btn_prepare').css('display','block');
        } else {
            $('#btn_prepare').css('display','none');
        }
    };

    $scope.prepareMeals = function (params) {
        if(params !== undefined){
            if(params.protein === undefined || params.carbon === undefined || params.fat === undefined){
                $scope.errorMeals = 'Fill all fields with meal properties !!!';
                $scope.showError = true;
            } else {
                $scope.errorMeals = null;
                for(let i=0;i<$scope.creatorProducts.protein.length;i++){
                    let protein = $scope.creatorProducts.protein[i];
                    let carbon = $scope.creatorProducts.carbon[Math.floor(Math.random() * $scope.creatorProducts.carbon.length)];
                    let fat = $scope.creatorProducts.fat[Math.floor(Math.random() * $scope.creatorProducts.fat.length)];
                    let proteinQuantity = Math.floor((parseFloat(params.protein) * 100)/parseFloat(protein.protein));
                    let carbonQuantity =Math.floor((parseFloat(params.carbon) * 100)/parseFloat(carbon.carbon));
                    let fatQuantity = Math.floor((parseFloat(params.fat) * 100)/parseFloat(fat.fat));
                    let meal = {
                        proteinProduct: protein, quantityProtein: proteinQuantity,
                        carbonProduct: carbon, quantityCarbon: carbonQuantity,
                        fatProduct: fat, quantityFat: fatQuantity
                    };
                    $scope.meals.push(meal);
                }
                $scope.targetProperties = {
                    protein: params.protein,
                    carbon: params.carbon,
                    fat: params.fat
                };
                $location.path('/prepared_meals');
            }
        }else {
            $scope.errorMeals = 'Fill all fields with meal properties !!!';
            $scope.showError = true;
        }

    }

}]);