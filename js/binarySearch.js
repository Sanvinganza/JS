let arrayTest = [0,1,2,3,4,5,6,7,8,9];
let testKey = 3;

//myBinarySort(return quantity shifts)
function myBinarySearch(array, key){
    let index = array.length/2 - 1,
        varToShift = Math.floor(array.length/2);
    if(array instanceof Array)
        function search(){
        if(varToShift != 1) varToShift = Math.floor(varToShift/2);

        if(array[index] < key) {index += varToShift; search();}
        if(array[index] > key) {index -= varToShift; search();}
        if(key == array[index]) return index/varToShift;        }
    
        return search();
}

function myBinarySearchController(){
    let answer = myBinarySearch(arrayTest,testKey);
    document.getElementById('answerMyBinarySearch').innerHTML = answer; 
};
