let myTestObject = {name: 'Harry', surname: 'Potter', age: 17, 
    friend:{
        name:'Ron', surname: 'Weasley'
    }
};

let testObject = myTestObject,
    testArray = 'Ron',
    result = 0;

function findMethodInObject(inputObject, inputArray){ 
    let myObject = inputObject;

    for(property in myObject){
        if(inputObject['property'] === "[Object Object]"){
            findMethodInObject(property, myObject);
        }

        if(myObject[property] === inputArray) result++;;
    }

    return result;    
};

alert(findMethodInObject(testObject, testArray));

//stackoverflow
function baseGet(object, path) {
    path = path.split('.');
  
    var index = 0,
        length = path.length;
  
    while (object != null && index < length) {
      object = object[path[index++]];
    }
    return (index && index == length) ? object : undefined;
};
  
let obj={"test":
         {
           "test1":{"key1":"val1"},
           "test2":{"key2":"val2"}
         }
        };

if(obj.test.test2.key2){
    console.log('есть');
}