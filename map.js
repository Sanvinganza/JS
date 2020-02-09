//test data
var array1 = [1,2,3,4,5];
var array2 = ['1','2','3','4','5'];
var array3 = ['a','b','c','d','e'];
var array3 = [['a'],['b'],['c'],['d'],['e']];
var array4 = [9,8,7,6,5,4,3,2,1,0];
var array5 = [0,1,2,3,4,5,6,7,8,9];
var array6 = [1,0,2,3,5,6,4];

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
//squares each number and displays their sum
function myReduceController(){
    let answer = myReduce(array2,sum);
    document.getElementById('answerMyReduce').innerHTML = answer;    
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

//mySort
function mySort(array){
    let temp = array[0], index = 0;
    if(array instanceof Array){
        let exit = 0;
        while(exit != array.length){        
            if(array[index] > array[index+1]){
                [array[index],array[index+1]] = [array[index+1],array[index]];
                exit = 0;
            }else{
                exit++;
            }
            index++;
        }
    }
    return array;
};

//squares each number
function mySortController(){
    let answer = mySort(array6);
    document.getElementById('answerMySort').innerHTML = answer; 
};