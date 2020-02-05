//test function for MyFunction
function sum(el){
    return el*el;
};

//Function MyMap
function myMap(array,Fn){
    let result;
    
    if(array[0] instanceof String) result = '';
        else result = 0;
    array.forEach(element =>{
        result += Fn(element);
    });

    return result;
};

var array1 = [1,2,3,4,5];
var array2 = ['1','2','3','4','5'];

alert(myMap(array1,sum));
alert(myMap(array2,sum));