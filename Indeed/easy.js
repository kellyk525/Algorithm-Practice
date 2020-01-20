

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



//  Sum of Even after Queries

var sumEvenAfterQueries = function (A, queries) {

    let final = [];

    for (let i = 0; i < queries.length; i++) {

        let add = queries[i][0];
        let index = queries[i][1];

        A[index] += add;
        let sum = 0;

        for (let num of A) {
            if (num % 2 === 0) {
                sum += num;
            }
        }

        final.push(sum);

    }

    return final;

};


// First unique char

var firstUniqChar = function (s) {

    let final = {};

    for (let char of s) {
        if (final[char]) {
            final[char] += 1;
        } else {
            final[char] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (final[s[i]] === 1) {
            return i;
        }
    }

    return -1;

};


//  Maximum Subarray


var maxSubArray = function (nums) {
    let current = nums[0];
    let final = nums[0];

    for (let i = 1; i < nums.length; i++) {

        if (current < 0) {
            current = nums[i];
        } else {
            current += nums[i];
        }

        final = Math.max(current, final);
    }

    return final;

}

// Palindrom Linked List

var isPalindrome = function (head) {

    let final = [];

    while (head) {
        final.push(head.val);
        head = head.next;
    }

    let mid = Math.floor(final.length / 2);
    let part = final.slice(0, mid).join();
    let second = null;

    if (final.length % 2 === 0) {
        second = final.splice(mid).reverse().join();
    } else {
        second = final.splice(mid + 1).reverse().join();
    }

    return part === second;

};


// permutation (medium)


var permute = function (nums) {
    let stack = [[]];
    let result = [];
    while (stack.length) {
        let last_stack_item = stack.pop();

        if (last_stack_item.length < nums.length) {

            for (let num of nums) {
                if (!last_stack_item.includes(num)) {
                    stack.push(last_stack_item.concat([num]));
                }
            }
        } else {
            result.push(last_stack_item);
        }
    }
    return result;
};

// subsets

// reverse linked list

// two sum

// calendar

// sliding window

// kandane algorithm





