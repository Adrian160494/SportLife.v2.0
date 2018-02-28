app.factory('getters',function ($http) {
    let getProtein = function () {
        return $http.get('./PHP/getProtein.php');
    };
    let getCarbon = function () {
        return $http.get('./PHP/getCarbon.php');
    };
    let getFat= function () {
        return $http.get('./PHP/getFat.php');
    };

    return {
        'getProtein' : getProtein(),
        'getCarbon' : getCarbon(),
        'getFat' : getFat(),
    }
});