


function binarySearch (arr, target) {
    if (arr.length === 0) return -1;

    let mid = Math.floor(arr.length/2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr.slice(0, mid), target);
    } else {
        let top = binarySearch(arr.slice(mid + 1), target);
        if (top === -1) {
            return -1
        } else {
            return top + mid + 1;
        }
    }
}


function quickSort (arr) {
    if (arr.length <= 1) return arr;

    let cb = function(left, right) {
        if (left === right) {
            return 0;
        } else if (left > right) {
            return 1;
        } else if (left < right) {
            return -1;
        }
    }

    let pivot = arr[0];
    let left = arr.slice(1).filter( el => cb(el, pivot) === -1);
    let right = arr.slice(1).filter( el => cb(el, pivot) === 1 );

    left = quickSort(left);
    right = quickSort(right);
    return left.concat([pivot]).concat(right);
}

function quickSort (arr, cb) {
    if (arr.length <= 1) return arr;

    let cb = cb || function(left, right) {
        if (left === right) {
            return 0;
        } else if (left > right) {
            return 1;
        } else if (left < right) {
            return -1;
        }
    }

    let pivot = arr[0];
    let left = arr.slice(1).filter(el => {
        return cb(el, pivot) === -1;
    })
    let right = arr.slice(1).filter(el => {
        return cb(el, pivot) === 1;
    })

    left = quickSort(left, cb);
    right = quickSort(right, cb);
    return left.concat([pivot]).concat(right);   
}


function mergeSort (arr) {
    if (arr.length <= 1) return arr;
    let cb = function (left, right) {
        if (left === right) {
            return 0;
        } else if (left > right) {
            return 1;
        } else if (left < right) {
            return -1;
        }
    }

    let mid = Math.floor(arr.length/2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right, cb);

}

function merge(left, right, cb) {
    let final = [];

    while (left.length && right.length) {
        if (cb(left[0], right[0]) === 0) {
            final.push(left.shift());
        } else if (cb(left[0], right[0]) === -1) {
            final.push(left.shift());
        } else {
            final.push(right.shift())
        }
    }

    final = final.concat(left, right);
    return final;
}


var twoSum = function (nums, target) {

    let final = [];

    for (let i = 0; i < nums.length - 1; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[j] + nums[i] === target) {
                final.push(i, j)
            }
        }

    }

    return final;
};