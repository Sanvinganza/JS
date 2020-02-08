//test data
var array1 = document.getElementById('array');
//[1,2,3,4,5];
var array2 = ['1','2','3','4','5'];
var array3 = ['a','b','c','d','e'];
var array3 = [['a'],['b'],['c'],['d'],['e']];

function sum(el){
    return el*el;
};
//Reduce
function myReduce(array,Fn){
    let result = 0;

    array.forEach(element =>{
        result += Fn(element);
    });
    return result;
};

//Map
function myMap(arr,Fn){
    let result = [];
    
    arr.forEach(element =>{ 
        result.push(Fn(element));
    });
    return result;
}

document.getElementById("myMapButton").onclick = myMapController;

function myMapController(){
    var answer = myMap(array2,sum);
    document.getElementById('answer').innerHTML = answer;
};

//myQuicksort
function myQuicksort(arr){
    
    let array = arr.split;
    let temp, index = 0;

    while(1){
        if(element[index] > element[index+1]){
            temp[index] = element[index];
            element[index] = element[index+1];
            element[index+1] = temp[index];
        }
    }
};