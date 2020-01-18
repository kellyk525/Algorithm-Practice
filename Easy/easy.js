

// Nth fibonacci

var fib = function (N) {

    if (N === 0) return 0;
    if (N === 1) return 1;

    return fib(N - 1) + fib(N - 2);
};


//  Two Sum

var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};