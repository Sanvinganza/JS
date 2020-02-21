(function () {
    window.MYAPP = {};
    window.MYAPP.reduce = reduce;
    function reduce(array, Fn) {
        let result = 0;

        array.forEach(element => {
            result += Fn(element);
        });
        return result;
    };
});
