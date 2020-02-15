
let arrayTest = [0,1,2,3,4,5,6,7,8,9];

//myBinarySort(return quantity shifts)
function myBinarySearch(array, key){
    let index = array.length/2-1,
        varToShift = Math.floor(array.length/2),
        result;

    if(array instanceof Array){
        function search(){
        if(varToShift != 1) varToShift = Math.floor(varToShift/2);
        
        if(array[index] > key) return search(index += varToShift);
        if(array[index] < key) return search(index -= varToShift);
        if(key === array[index]) return index/varToShift;
        
        alert(index)
        }
    }
    result = search()
    return result;
}

let testKey = 3;

function myBinarySearchController(){
    let answer = myBinarySearch(arrayTest,testKey);
    document.getElementById('answerMyBinarySearch').innerHTML = answer; 
};
