

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