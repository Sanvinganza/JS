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
            if(object[property] != NaN || property != NaN){                    
                if(object[property] == array) result++;
                
                if(object[property] == "[object Object]")
                    result += rec(object[property], result, array);
                    alert('property = ' +property +' object[property] = ' +object[property]);       
                
            }            
        }
        return result;
    }

    rec(myTestObject, result, inputArray);

    return result;
};

alert("result function = " +findMethodInObject(myTestObject, testArray));
