(function () {
    if (window.ARRAYUTILS) {
        window.ARRAYUTILS.map = (arr, Fn) => {
            let result = [];

            arr.forEach(element => {
                result.push(Fn(element));
            });
            return result;
        }
    } else {
        window.ARRAYUTILS = {};
    }
})();
