//test data
var array1 = [1,2,3,4,5];
var array2 = ['a','b','c','d','e'];
var array3 = [['a'],['b'],['c'],['d'],['e']];
var array4 = [9,8,7,6,5,4,3,2,1,0];
var array5 = [0,1,2,3,4,5,6,7,8,9];
var array6 = [1,0,2,3,4,6,5];

function sum(el){
    return el*el;
};

//Map
function myMap(arr,Fn){
    let result = [];
    
    arr.forEach(element =>{ 
        result.push(Fn(element));
    });
    return result;
}

function myMapController(){
    let answer = myMap(array1,sum);
    document.getElementById('answerMyMap').innerHTML = answer;
};

