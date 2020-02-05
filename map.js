//test data
var array1 = [1,2,3,4,5];
var array2 = ['1','2','3','4','5'];
var array3 = ['']
//Reduce
function sum(el){
    return el*el;
};

function myReduce(array,Fn){
    let result;
    
    if(array[0] instanceof String) result = '';
        else result = 0;
    array.forEach(element =>{
        result += Fn(element);
    });

    return result;
};
//alert(myReduce(array1,sum));
//alert(myReduce(array2,sum));

//myMap
function myMap(arr,Fn){
    let result = [];
    
    arr.forEach(element =>{
        result.push(Fn(element));
    });
    
    return result;
}  

alert(myMap(array1,sum));
alert(myMap(array2,sum));

function myQuicksort(arr){
    
    var array = arr.split;
    var temp, index = 0;

    while()
        if(element[index] > element[index+1]){
            temp = element;
            element = element+1;
            element+1=temp;

        }
    
};