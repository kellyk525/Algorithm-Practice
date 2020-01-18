

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
