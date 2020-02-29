//import MYARRAYHELPER from './nameSpace.js';
//import test from './nameSpace.js';
//test()

(function () {
    MYARRAYHELPER = {
        reduce: reduce
    };

    function reduce(array, Fn) {
        let result = 0;

        array.forEach(element => {
            result += Fn(element);
        });
        return result;
    }

});

alert(MYARRAYHELPER.reduce('1,2,3',sum))
