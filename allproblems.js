
//  nth fibonacci

function fib(n) {
    if (n === 0) return 0;
    if (n === 1)  return 1;

    return fib(n-1) + fib(n-2);
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

// subsets

function subsets(nums) {
    let result = [[]];

    for (let i = 0; i < nums.length; i++) {
        let length = result.length;
        for (let j = 0; j < length; j ++) {
            result.push([...result[j], nums[i]]);
        }
    }

    return result;
}

// permutations

function permutations(nums) {
    let stack = [[]];
    let result = [];

    while (stack.length) {
        let last = stack.pop();

        if (last.length < nums.length) {
            for (let num of nums) {
                if (!last.includes(num)) {
                    stack.push(last.concat([num]));
                }
            }
        } else {
            result.push(last);
        }
    }
    return result;
}

// palindrome

function isPalindrome(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    let together = [];
    for (let i = 0; i < s.length; i++) {

        if (alphabet.includes(s[i].toLowerCase())) {
            together.push(s[i]);
        } else if (Number.isInteger(parseInt(s[i]))) {
            together.push(s[i]);
        }
    }

    let first = [];
    let second = [];

    if (together.length === 1) return true;

    if (together.length % 2 === 0) {
        first = together.slice(0, Math.floor(together.length/2));
        second = together.slice(Math.floor(together.length / 2)).reverse();
    } else {
        first = together.slice(0, Math.floor(together.length/2));
        second = together.slice(Math.floor(together.length/2 + 1).reverse());
    }

    return first.join("") === second.join("");
}


// Max Sub Array

function maxSubArray(nums) {
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


// First Unique Char

function firstUniqueChar(s) {

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
}

function firstUniqueChar(s) {
    let final = {};

    for (let )
}

// Sum of Even after Queries

function sumEvenAfterQueries(A, queries) {

    let final = [];

    for (let i = 0; i < queries.length; i++) {
        let add = queries[0];
        let index = queries[1];

        A[index] += add;
        let sum = 0;

        for (let num of A) {
            if (num % 2 === 0) {
                sum += num;
            }
        }

        final.push(sum);
    }

    return sum;
}

// Pivot Index

function pivotIndex(nums) {

    let sum = 0;

    for (let char of nums) {
        sum += char;
    }

    let leftSum = 0;

    for (let i = 0; i < nums.length ; i++) {
        if (leftSum === sum - leftSum - nums[i]) {
            return i;
        } else {
            leftSum += nums[i];
        }
    }

    return -1;
}

// Longest Palindrome

function longestPalindrome(s) {

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

// Subdomain in Visits

function subDomain(cpdomain) {

    let final = {};

    cpdomain.forEach((domain) => {
        let split = domain.split(" ");
        let num = split[0];
        let word = split[1];
        let parts = word.split(".");

        while (parts.length) {

            if (final[word]) {
                final[word] += num;
            } else {
                final[word] = num;
            }

            let length = parts.split().length + 1;
            word = word.slice(length);
        }
    })

    let result = Object.keys(final).map((part) => {
        let tog = final[part] + " " + part;
        return tog;
    })

    return result;
}

// binary search
// merge sort
// quick sort

//  Node / Linked List problems ---------------

//  Deleting Node


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    addToTail(value) {
        let node = this;
        
        while (node.next) {
            node = node.next;
        }

        node.next = Node(value);
    }

    getValue(index) {
        let node = this;

        while(node && index) {
            node = node.next;
            index = index - 1;
        }

        if (node) {
            return node.value;
        } else {
            return false;
        }
    }

    deleteByValue(value) {
        let node = this;

        while (node && node.next) {

            if (node.next === value) {
                node.next = node.next.next;
            }

            node = node.next; 
            // goes to the new value that was set on node.next
        }
    }


    reverseLinkedList(root) {

        if (!root) return false;

        let reversed = [];
        let node = root;

        while (node) {
            reversed.unshift(node.val);
            node = node.next;
        }

        for (let i = 0; i < reversed.length; i ++) {
            let from = result[i];
            let to = result[i+1];

            if (to === undefined) to = null;
            from.next = to;
        }

        return reversed[0];
    }

    //  Remove dups from a sorted list

    deleteDups(head) {
        let node = head;

        while (node) {
            if (node.next && node.next.val === node.val) {
                node.next = node.next.next;
            } else {
                node = node.next;
            }
        }
        return node;
    }

    // Detecting Cycle

    hasCycle(head) {
        let slow = head;
        let fast = head;

        while (slow && fast) {
            slow = slow.next;
            fast = fast.next ? fast.next.next : undefined;
            if (slow === fast) return true;
        }
        return false;
    }

    //  Remove Nth Node from End of List

    removeNthFromEnd(head, n) {

        let node = new ListNode(0);
        node.next = head
        let fast = node, slow = node
        for (let i = 1; i <= n + 1; i++) {
            fast = fast.next
        }

        while (fast) {
            fast = fast.next
            slow = slow.next
        }
        slow.next = slow.next.next;
        return node.next;
    };

    // Palindrome Linked List

}

// Tree Problems

class Tree {
    constructor (data) {
        this.data = data;
        this.children = [];
    }

    addNode(data) {
        const node = new Tree(data);
        this.children.push(node);
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }

    traverseBF(fn) {
        let final = [this.data];

        while (final.length) {
            let node = final.shift();
            final.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        let final = [this.data];

        while (final.length) {
            let node = final.shift();
            final.unshift(...node.children);
            fn(node);
        }

    }

    preOrderTraversal() {

    }

    postOrderTraversal() {


    }

    maximumDepth() {

    }
    // N-ary tree


    // Level width

    levelWidth(root) {

        let arr = [root, 'w'];
        let counters = [0];

        while (arr.length > 1) {
            let node = arr.shift();

            if (node === 'w') {
                counters.push(0);
                arr.push('w');
            } else {
                arr.push(...node.children);
                counters[counters.length - 1] += 1;
            }
        }
    }

}


// Binary Tree Problems

class BinaryTree {

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    // Insert data

    insert(val) {
        if (val < this.val && this.left) {
            this.left.insert(val);
        } else if (val < this.val) {
            this.left = new Tree(val);
        } else if (val > this.val && this.right) {
            this.right.insert(val);
        } else if (val > this.val) {
            this.right = new Tree(val);
        }
    }

    // Contains data


    contains(val) {
        if (this.val === val) {
            return this;
        }

        if (this.val < val && this.left) {
            return this.left.contains(val);
        } else if (this.val > val && this.right) {
            return this.right.contains(val);
        }
    }

    // Inorder 

    inOrderTraversal(root) {
        let final = [];
        dfs(root);

        function dfs(node) {

            if (node) {
                dfs(node.left);
                final.push(node.val);
                dfs(node.right);
            }
        }

        return final;
    }

    // Preorder

    preOrderTraversal(root) {

        let final = [];
        helper(root);

        function helper(node) {
            if (node) {
                final.push(node.val);
                helper(node.left);
                helper(node.right);
            }
        }

        return final;
    }

    // Postorder

    postOrderTraversal(root) {

        let final = [];
        helper(root);

        function helper(node) {
            if (node) {
                helper(node.left);
                helper(node.right);
                final.push(node.val);
            }
        }

        return final;
    }

    // MaxDepth


    maxDepth(root) {
        let depth = 0;
        helper(root, 1);
        return depth;

        function helper(node, height) {
            if (node) {
                depth = Math.max(depth, height);
                helper(node.left, height +1);
                helper(node.right, height +1);

            }
        }
    }

    maxDepth(root) {
        helper(root, 0);

        function helper(node, height) {

            if (!node) return height;
            return Math.max(helper(node.left, height + 1), helper(node.right, height + 1))
        }
    }

    // MinDepth


    maxDepth(root) {
        let depth = 0;
        helper(root, 1);
        return depth;

        function helper(node, height) {
            if (node) {
                depth = Math.max(depth, height);
                helper(node.left, height + 1);
                helper(node.right, height + 1);
            }
        }
    }

    minDepth(root) {

        if (!root) return 0;
        let result;

        helper(root, 1);
        return result;

        function helper(node, height) {
            if (!node.left && !node.right) {
                result = Math.min(result || height, height);
            }

            if (node.left) helper(node.left, height +1);
            if (node.right) helper(node.right, height + 1);
        }

    }

    minDepth(root) {

        if (!root) return 0;
        let result;

        function helper(node, depth) {
            if (!node.left && !node.right) {
                result = Math.min(result || depth, depth)
            }

            if (node.left) helper(node.left, depth + 1);
            if (node.right) helper(node.right, depth + 1);
        }

        helper(root, 1);
        return result;
    };

    // Largest Number

    // isBalanced

    isBalanced(root) {
        return helper(root, 0) >= 0;

        function helper(node, height) {
            if (!node) return height;

            let left = helper(node.left, height + 1);
            let right = helper(node.right, height + 1);
            if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
            return Math.max(left, right);
        }
    }

    // Invert
    // Binary Tree Right Side View
}

// Invert Tree
 
function invertTree(root) {
    if (root) {
        swap(root);
        invertTree(root.left);
        invertTree(root.right);
    }
    return root;

    function swap(node) {
        let left = node.left;
        node.left = node.right;
        node.right = left;
    }
}


function invertTree(root) {

    if (root) {
        swap(root);
        invertTree(root.left);
        invertTree(root.right);
    }

    function swap(root) {
        let left = root.left;
        root.left = root.right;
        root.right = left;
    }
}
