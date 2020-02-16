let myTestObject = {name: 'Harry', surname: 'Potter', age: 17, 
    friend:{
        name:'Ron', surname: 'Weasley'
    },
    classmate:{
        name:'Ron', surname: 'Weasley'
    }
};

let testArray = 'Ron';

function findMethodInObject(inputObject, inputArray){ 
    let result = 0;
    array = inputArray;

    function rec(object, array){
        for(property in object){
            if(object[property] != NaN || property != NaN){
                if(object[property] == array) {result++; alert('yes');}
                
                if(object[property] == "[object Object]")
                    rec(object[property], array);                
            }            
        }
    }

    rec(myTestObject, inputArray);

    return result;
};

alert("result function = " +findMethodInObject(myTestObject, testArray));
