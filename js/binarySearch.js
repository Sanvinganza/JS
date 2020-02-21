//binarySort(return quantity shifts)
function binarySearch(array, key) {
    let index = array.length / 2 - 1,
        varToShift = Math.floor(array.length / 2);
    if (array instanceof Array)
        function search() {
            if (varToShift != 1) varToShift = Math.floor(varToShift / 2);

            if (array[index] < key) { index += varToShift; search(); }
            if (array[index] > key) { index -= varToShift; search(); }
            if (key == array[index]) return index / varToShift;
        }

    return search();
}

function binarySearchController() {
    let answer = binarySearch(arrayTest, testKey);
    document.getElementById('answerBinarySearch').innerHTML = answer;
};
