
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

// subsets
// permutations
// palindrome
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

    //  Reorder List

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

    minimumDepth() {

    }
    // N-ary tree

}


// Binary Tree Problems

class BinaryTree {

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    // Insert data

    // Contains data

    // Level Height

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

    minDepth(root) {

        function helper(root, height) {
            if (node) {
                helper(node.left, )
            }
        }

    }

    // Largest Number



    // isBalanced

    // Invert

    // Swap

    // Binary Tree Right Side View
}
