

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


//  Rotate with new array
var rotate = function(nums, k) {
    let final = [];

    for (let num of nums) {

        let index = nums.indexOf(num);
        let newIndex = (index + k) % nums.length;

        console.log(newIndex)
        final[newIndex] = num;
    }

    return final
};

// Rotate with modifying

var rotate = function (nums, k) {
    nums.unshift(...nums.splice(nums.length - k));
};


// Prime Number


var countPrimes = function (n) {

    let count = 0;
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        if (isPrime(i)) count += 1;
    }

    return count;
};

function isPrime(num) {

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            return false;
        }
    }

    return true;
}


//  FizzBuzz

var fizzBuzz = function (n) {

    let final = [];
    for (let i = 1; i <= n; i++) {

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
};

// Reverse String

var reverseString = function (s) {

    let mid = Math.floor(s.length / 2);

    for (let i = 0; i < mid; i++) {

        let first = s[i];
        let swap = s[s.length - (i + 1)];

        s[i] = swap;
        s[s.length - (i + 1)] = first;

    }

};

//  Valid Anagrams

var isAnagram = function (s, t) {

    let final = {}

    for (let char of s) {
        if (final[char]) {
            final[char] += 1;
        } else {
            final[char] = 1;
        }
    }

    for (let char of t) {
        if (final[char]) {
            final[char] -= 1;
        } else {
            return false;
        }
    }

    return Object.values(final).every((ele) => ele === 0)
};


// Contains Duplicate

var containsDuplicate = function (nums) {

    let final = {};

    for (let char of nums) {

        if (final[char] === 1) {
            return true;
        } else {
            final[char] = 1;
        }

    }
    return false;

};

//  Deleting Node


var deleteNode = function (node) {

    node.val = node.next.val;
    node.next = node.next.next;
};

// Since we don't have access the previous node, the next best thing we can do is to 'copy' over the values of the next node, and then point to the node after the next node.

// This way we 'fold over' the list by dropping off the current value, replacing it with the next value, so it looks like we 'deleted' a node.

// node.val = node.next.val; //copy the next node's value over to replace the current nodes value
// node.next = node.next.next; //modify the next value to point to the node after the next.
// If we don't modify the reference node.next the list will now have 2 nodes with the same value.


