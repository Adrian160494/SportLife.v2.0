app.filter('sortFilter',function () {
    return function (data,substract) {
        let count = 1;
        console.log('hello');
        while(count>0){
            count=0;
            for(let i=1;i<data.length;i++){
                let first = data[i];
                let zero = data[i-1];
                if(substract=='protein'){
                    if(parseFloat(first.protein)>parseFloat(zero.protein)){
                        let temp = zero;
                        data[i-1] = first;
                        data[i] = temp;
                        count++;
                    }
                } else if(substract == 'carbon'){
                    if(parseFloat(first.carbon)>parseFloat(zero.carbon)){
                        let temp = zero;
                        data[i-1] = first;
                        data[i] = temp;
                        count++;
                    }
                } else {
                    if(parseFloat(first.fat)>parseFloat(zero.fat)){
                        let temp = zero;
                        data[i-1] = first;
                        data[i] = temp;
                        count++;
                    }
                }
            }
        }
        return data;
    }
});