
exports.min = function min (array) {
    if (array == null || array.length == 0) {
        return 0;
    } else {
        let minimum = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < minimum) {
                minimum = array[i];
            }
        }
            return minimum;
     }
}

exports.max = function max (array) {
    if (array == null || array.length == 0) {
        return 0;
    } else {
        let maximum = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > maximum) {
                maximum = array[i];
            }
        }
        return maximum;
    }
}

exports.avg = function avg (array) {
    if (array == null || array.length == 0) {
        return 0;
    } else {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total+=array[i];
        }
        let avarage = total / array.length;
        return avarage;
    }
}
