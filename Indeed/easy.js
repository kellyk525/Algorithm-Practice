

//  Two Sum

// Subdomain Visit Count

var subdomainVisits = function (cpdomains) {

    let final = {};

    cpdomains.forEach(domain => {
        let split = domain.split(" ");
        let num = parseInt(split[0]);
        let word = split[1];
        let parts = split[1].split(".");

        while (parts.length) {

            if (final[word]) {
                final[word] += num;
            } else {
                final[word] = num;
            }

            let length = parts.shift().length;
            word = word.slice(length + 1);
        }

    })


    let result = Object.keys(final).map((part) => {
        let together = final[part] + " " + part;
        return together;
    })

    return result;

};



// valid palindrome for alphanumeric cases

var isPalindrome = function (s) {

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    let together = [];

    for (let i = 0; i < s.length; i++) {

        if (alphabet.includes(s[i].toLowerCase())) {
            together.push(s[i].toLowerCase());
        } else if (Number.isInteger(parseInt(s[i]))) {
            together.push(s[i])
        }
    }

    let reverse = [];
    let half = [];

    if (together.length === 1) return true;

    if (together.length % 2 === 0) {
        half = together.slice(0, Math.floor(together.length / 2));
        reverse = together.slice(together.length / 2).reverse();
    } else {
        half = together.slice(0, Math.floor(together.length / 2));
        reverse = together.slice(together.length / 2 + 1).reverse();
    }

    return half.join("") === reverse.join("");

};


// Longest Palindrome

var longestPalindrome = function (s) {
    let final = {};
    let count = 0;

    for (let char of s) {
        if (final[char] === 1) {
            delete final[char];
            count += 2;
        } else {
            final[char] = 1;
        }
    }

    if (count < s.length) {
        count += 1;
    }

    return count;
}

// Moving Average

class MovingAverage {
    constructor(size) {
        this.size = size;
        this.queue = [];
        this.sum = 0;
    }

    next(val) {

        this.queue.push(val);
        this.sum += val;

        if (this.queue.length > this.size) {
            this.sum -= this.queue.shift();
        }

        return this.sum / this.queue.length
    }
}

// Pivot Index

var pivotIndex = function (nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === sum - leftSum - nums[i]) {
            return i;
        } else {
            leftSum += nums[i];
        }
    }

    return -1;
}




// permutation

// subsets

// reverse linked list

// two sum

// calendar

// sliding window

// kandane algorithm


