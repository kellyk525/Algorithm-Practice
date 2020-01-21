

// Binary Tree Inorder traversal

var inorderTraversal = function (root) {

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

};

// Binary Tree Preorder traversal


var preorderTraversal = function (root) {

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

};

//  Binary Tree Postorder traversal

var postorderTraversal = function (root) {

    let final = [];
    dfs(root);

    function dfs(node) {

        if (node) {
            dfs(node.left);
            dfs(node.right);
            final.push(node.val);
        }
    }

    return final;
};

//  Max Depth of Binary Tree

var maxDepth = function (root) {

    return dfs(root, 0);

    function dfs(node, height) {

        if (!node) return height;
        return Math.max(dfs(node.left, height + 1), dfs(node.right, height + 1))

    }
}

var maxDepth = function (root, counter = 0) {
    if (!root) return counter
    counter += 1
    let maxLeft = maxDepth(root.left, counter)
    let maxRight = maxDepth(root.right, counter)
    return maxLeft >= maxRight ? maxLeft : maxRight
};

//  Minimum Depth of Binary Tree (refer to explanations)

var minDepth = function (root) {
    if (!root) return 0;
    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};


//  Balanced Binary Tree

var isBalanced = function (root) {
    return helper(root, 0) >= 0;
};

var helper = function (root, depth) {
    if (!root) return depth;
    var left = helper(root.left, depth + 1);
    var right = helper(root.right, depth + 1);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
    return Math.max(left, right);
};

//  Invert Tree

var invertTree = function (root) {
    if (root) {
        swap(root);
        invertTree(root.left);
        invertTree(root.right);
    }
    return root;
};

var swap = function (node) {
    var left = node.left;
    node.left = node.right;
    node.right = left;
};

//  Symmetric Tree

//  Word Search

//  Max Area of Island