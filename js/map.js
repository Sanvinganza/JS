function map(arr,Fn){
    let result = [];
    
    arr.forEach(element =>{ 
        result.push(Fn(element));
    });
    return result;
} 
