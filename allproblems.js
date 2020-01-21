
//  nth fibonacci

function fib(n) {

    if (n === 0) return 0;
    if (n ===1) return 1;

    return fib
}

//  two sum 

var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i+1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {
                return [i , j];
            }
        }
    }
}

//  rotate with new array

var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length-k));
}


// Prime Number

var countPrimes = function(n) {

    let count = 0;

    for (let i = 0; i < n; i++) {
        if (isPrime(i)) count ++;
    }
    return count;
}

function isPrimes (n) {

    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Fizz Buzz

var fizzBuzz = function(n) {

    let final = [];
    for (let i = 1; i <= n; i ++) {
        if (i % 3 === 0 && i % 5 === 0) {
            final.push("FizzBuzz");
        } else if (i % 3 === 0 && i % 5 !== 0) {
            final.push("Fizz");
        } else if (i % 3 !== 0 && i % 5 === 0) {
            final.push("Buzz");
        } else {
            final.push(i.toString());
        }
    }

    return final;
}



//  reverse String


var reverseString = function(s) {

    let mid = Math.floor(s.length/2);

    for (let i = 0; i < mid; i++) {

        let first = s[i];
        let swap = s[s.length - (i+1)];

        s[i] = swap;
        s[s.length - (i+1)] = first;
    }

}

//  Valid Anagrams

var isAnagrams = function(s, t) {

    let final = {};

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        
        if (final[s[i]]) {
            final[s[i]] += 1;
        } else {
            final[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; t++) {

        if (final[t[i]]) {
            final[t[i]] -= 1;
        } else {
            return false;
        }
    }

    return true;
}

//  contains duplicate

var containDuplicate = function(nums) {

    let final = {};

    for (let char of nums) {

        if (final[char] === 1) {
            return true;
        } else {
            final[char] = 1;
        }
    }

    return false;
}

//  Single Number

var singleNumber = function(nums) {

    let final = {};

    for (let char of nums) {

        if (final[char]) {
            final[char] += 1;
        } else {
            final[char] = 1;
        }
    }

    let result = Object.keys(final);

    for (let char of result) {

        if (final[char] === 1) {
            return char;
        }
    }
}

// Move Zeroes (draw it out)

var moveZeroes = function(n) {

    for (let i = nums.length -1; i >= 0; i --) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
}

//  Node / Linked List problems ---------------


//  Deleting Node