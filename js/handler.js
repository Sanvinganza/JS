function mapController() {
    let answer = map(array1, sum);
    document.getElementById('answerMap').innerHTML = answer;
};

function sum(element) { return element ^ 2; };

//squares each number and displays their sum
function reduceController() {
    let answer = reduce(array2, sum);
    document.getElementById('answerReduce').innerHTML = answer;
};

function showInfo() {
    alert('object = ' + JSON.stringify(myTestObject) + '\n array = ' + testArray);
}

function findArrayInObjectController() {
    let answer = findArrayInObject(myTestObject, testArray);
    document.getElementById('answerFindArrayInObject').innerHTML = answer;
};

function sortController() {
    let answer = sort(array6);
    document.getElementById('answerSort').innerHTML = answer;
};
