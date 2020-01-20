//  Max Product

var maximumProduct = function (nums) {

    nums.sort((a, b) => a - b)

    let first = nums[nums.length - 1];
    let second = nums[nums.length - 2];
    let third = nums[nums.length - 3];
    let min1 = nums[0];
    let min2 = nums[1];

    return Math.max(first * second * third, first * min1 * min2)
};

// Valid Parenthesis

var isValid = function (s) {
    let brackets = { "(": ")", "{": "}", "[": "]" }
    let final = [];

    for (let i = 0; i < s.length; i++) {

        if (brackets[s[i]]) {
            final.push(s[i])
        } else {
            if (brackets[final[final.length - 1]] === s[i]) {
                final.pop();
            } else {
                return false;
            }

        }
    }

    return final.length === 0 ? true : false;
};
