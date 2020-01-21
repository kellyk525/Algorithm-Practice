
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseList = function (head) {
    if (!head) return false;

    let result = [];

    while (head) {
        result.unshift(head);
        head = head.next;
    }

    for (let i = 0; i < result.length; i++) {

        let from = result[i];
        let to = result[i + 1];

        if (to === undefined) to = null;
        from.next = to;
    }

    return result[0];
};


//  Remove duplicates from a sorted list


var deleteDuplicates = function (head) {
    var now = head;
    while (now) {
        if (now.next && now.next.val === now.val) {
            now.next = now.next.next;
        } else {
            now = now.next;
        }
    }
    return head;
};


//  Detecting Cycle

var hasCycle = function (head) {
    var slow = head;
    var fast = head;
    while (slow && fast) {
        slow = slow.next;
        fast = fast.next ? fast.next.next : undefined;
        if (slow === fast) return true;
    }
    return false;
};

//  Merge two sorted linked lists

//  K sorted linked list?

//  Reverse Linked List

//  Palindrome Linked List


// Reverse a Linked List
// Detect Cycle in a Linked List
// Merge Two Sorted Lists
// Merge K Sorted Lists
// Remove Nth Node From End Of List
// Reorder List



// Same Tree
// Invert / Flip Binary Tree
// Binary Tree Maximum Path Sum
// Binary Tree Level Order Traversall
// Construct Binary Tree from Preorder and Inorder Traversal
// Validate Binary Search Tree
// Kth Smallest Element in a BST
// Lowest Common Ancestor of BST