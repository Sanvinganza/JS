//test data
var array1 = [1,2,3,4,5];
var array2 = ['1','2','3','4','5'];
var array3 = ['a','b','c','d','e'];
var array3 = [['a'],['b'],['c'],['d'],['e']];
var array4 = [9,8,7,6,5,4,3,2,1,0];
var array5 = [0,1,2,3,4,5,6,7,8,9];
var array6 = [1,0,2,3,4,6,5];

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
        let exit,max = array.length;
        for(exit = 0;exit < max;){      
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

let left = 0;
let right = array.length;
let key = 2;
//binarySortIter
function binarySortIter(array){
    while(1){
        let mid = left + (right - left) / 2;
        if(array[mid] === key) return mid;
        if(array[mid] > key) right = mid;
            else left = mid + 1;
    }
    return array;
}

function binarySortIterController(){
    let answer = binarySortIter(array6);
    document.getElementById('answerBinarySortIter').innerHTML = answer;
};

//tree from binarySort
let root = {
    left,
    right,
    value
};

function addLeftRoot(inputRoot, value){
    inputRoot.left = root;
    inputRoot.value = value;
    return inputRoot.left;
};

function addRightRoot(inputRoot, value){
    inputRoot.right = root;
    inputRoot.value = value;
    return inputRoot.right;
};

function tree(array){
    let max = array.length;
    let mid = array[max/2];
    let arrayRoot = root;

    for(let i = 0;i < max; i++){
        if(array[i] === mid) {
            mid = array[i];
        }
        if(array[i] > mid) {
            arrayRoot = addRightRoot(arrayRoot,array[i]);
        }
        if(array[i] < mid) {
            arrayRoot = addLeftRoot(arrayRoot,array[i]);
        }
    }
    return arrayRoot;
};

function Tree(array){
    let result = new Array(1,2,3);
    let arrayRoot = tree(array);

    getValue(arrayRoot);    
    
    function getValue(array){
        for(let root in array){
            if(typeof(array[root]) === 'object'){
                getValue(array[root]);
            } else {
                result.push(array[root].value);
            }
        }        
    };
    
    return result;
};

function treeController(){
    let answer = Tree(array6);
    document.getElementById('answerTree').innerHTML = answer; 
};

//squares each number
function mySortController(){
    let answer = mySort(array6);
    document.getElementById('answerMySort').innerHTML = answer; 
};
