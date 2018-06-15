function compareArrays(){

    var array = [11, 22, 48, 54],
        array1 = [22, 11, 54, 48];


    array1.sort(function(a, b){return a - b});
        
    var i = 0;
    while ( i < array.length) {
        if (array[i] === array1[i]) {
            var result =  true;
            i++;
        } else {
            result = false;
            i = array.length;
        }
        return result;
    }
}

compareArrays();