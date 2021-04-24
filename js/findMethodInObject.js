let findMethodInObject = (inputObject, inputArray) => {
    let result = 0;

    function rec(object, inputArray) {
        for (property in object) {
            if (object[property] != NaN || property != NaN) {
                if (object[property] == inputArray) result++;

                if (object[property] == "[object Object]")
                    rec(object[property], inputArray);
            }
        }
    }

    rec(inputObject, inputArray);

    return result;
};