let array6 = [1,0,2,3,5,6,4];

//mySort(squares each number)
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

function mySortController(){
    let answer = mySort(array6);
    document.getElementById('answerMySort').innerHTML = answer; 
};

/*
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
*/