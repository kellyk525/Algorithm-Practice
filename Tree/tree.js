

// Node Implementation

class Node {

    constructor(data) {
        this.data = data;
        this.children = [];
    }

    addNode(data) {
        const node = new Node(data);
        this.children.push(node);
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }
}

// Tree Implementation

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {

        const arr = [this.root];

        while(arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {

        const arr = [this.root];

        while(arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }           
    }
}

// const node = new Node(1);
// const tree = new Tree();
// tree.root = node;


// Pre order traversal (N-ary tree)

var preorder = function (root) {

    const arr = [root];
    let final = [];

    while (arr.length) {

        const node = arr.shift();

        if (node) {
            arr.unshift(...node.children);
            final.push(node.val);
        }
    }

    return final;
};

//  N-ary post order traversal

var postorder = function (root) {

    const arr = [root];
    let final = [];

    while (arr.length) {

        const node = arr.pop();

        if (node) {
            final.unshift(node.val);
            arr.push(...node.children);
        }
    }

    return final;
};

// N-ary level order traversal 

var levelOrder = function (root) {

    let arr = [root];
    let final = [];

    while (arr.length) {

        let level = [];
        let next = [];

        while (arr.length) {

            const node = arr.shift();

            if (node) {
                level.push(node.val);
                next.push(...node.children);
            }
        }

        if (level.length !== 0) final.push(level);
        arr = next;
    }

    return final;

};
