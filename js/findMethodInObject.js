let myTestObject = {name: 'Harry', surname: 'Potter', age: 17, 
    friend:{
        name:'Ron', surname: 'Weasley'
    }
};

let testArray = 'Ron',
    result = 0;

function findMethodInObject(inputObject, inputArray){ 
    
    array = inputArray;

    function rec(object,result, array){
        for(property in object){
            if(object[property] == array) {result++;}
            if(object[property] == "[object Object]")
                result += rec(object[property], result, array);
                alert('result = '+result);
                alert("object[property] = "+object[property]);
        }
    }

    rec(myTestObject, result, inputArray);

    return result;
};

alert(findMethodInObject(myTestObject, testArray));
