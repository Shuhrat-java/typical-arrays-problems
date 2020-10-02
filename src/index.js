exports.min = function min(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }

    if (array.length == 1) {
        return array[0];
    }

    var min = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

exports.max = function max(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    if (array.length == 1) {
        return array[0];
    }

    var max = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

exports.avg = function avg(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    if (array.length == 1) {
        return array[0];
    }

    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
}