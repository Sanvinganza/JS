//test function for MyFunction
function testFnForMyMap(arr){
    var temp = [];
    arr.forEach((element, index) => {
        if(arr[index+1]){
            element += ` => ${arr[index + 1]}\n`;
            temp.push(element);
        }
    });
    return temp;
};

function testFnForMyReduce(arr){
    var temp = '';
    arr.forEach((element =>{
        if(element instanceof Array)
            testFnForMyReduce(arr);
        temp += +element;
    }))
    return temp;
}

//Function MyMap
let array1 = ['Mark','Roma','dog','cat'];

function MyMap(array,Fn){
    return Fn(array);
};

//alert(MyMap(array1,testFnForMyMap));

//Function MyReduce
var test = [['a b'],['5 3'],['e f']];

function MyReduce(arr, Fn){
    return +Fn(arr);    
}