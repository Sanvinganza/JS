var array2 = ['1','2','3','4','5'];

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

