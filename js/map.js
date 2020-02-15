//test data
var array1 = [1,2,3,4,5];

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

