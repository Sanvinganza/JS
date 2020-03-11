//mySort(squares each number)
(function () {
    if (window.ARRAYUTILS) {
        window.ARRAYUTILS.sort = (array) => {
            let temp = array[0],
                index = 0,
                exit = 0;
            if (array instanceof Array) {
                for (; exit < array.length;) {
                    if (array[index] > array[index + 1]) {
                        [array[index], array[index + 1]] = [array[index + 1], array[index]];
                        exit = 0;
                    } else {
                        exit++;
                    }
                    index++;
                }
            }
            return array;
        }
    } else {
        window.ARRAYUTILS = {};
    }
})();
