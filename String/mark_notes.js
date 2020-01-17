
// 1. Javascript Asynch 

// // Synch
// let arr = [1,2,3];
// for (let el of arr) console.log(el); => 1, 2, 3
// Executes in order (Executed after previous function is resolved)

// // Asych
// SetTimeout, Promise

function example() {
    console.log("A");
    setTimeout(() => console.log("B"), 0);
    setTimeout(() => console.log("C"), 1000);
    console.log("D");
}

// example();
// A D B C


function example() {
    console.log("A");
    setTimeout(() => console.log("B"), 1000);
    setTimeout(() => console.log("C"), 0);
    console.log("D");
}

// example();
// A D C B

// Event bubbling / Event capturing  => Event delegation




// Hoisting   => let, const, var

// var => declare a variable in a function scope
// let, const => lexical


function example2() {
    // let mark;
    var i;

    for (var i = 0; i < 3; i++) {
        console.log(i);
    }

    console.log(i); // 3

    console.log(mark); //=> undefined
    let mark = "123";
    console.log(mark); // 
}

example2();


// function declaration vs function expression

function mark() { } // function declaration -> conmpletely hosited;
let mark2 = function () { }; //


// Coersion
1 + "2" === "12"
"2" + 1 === "21";
true + 1 === 2
false + 1 === 1


// Closure

//When inner function has access to variables defined outside of the function.
// all functions are closures.
const Kelly = 123;

function outer() {
    const Mark = 123;

    function inner() {
        console.log(Mark); // 123
        console.log(Kelly); // 123
    }
}

//closures allow higher order functions
//=> callbacks

function hof() {
    let result = [];
    [1, 2, 3, 4].forEach((e, i) => {
        result.push(e + i); // the callback has access to result that is defined outside of  its scope
    });
}

// asych / await 
// -- make everything look like a synchronous function

async function fetchUsers(user_id) {
    fetch('...url', { user_id })
        .then(data => {
            fetch('...url2', { user_post: data.posts })
                .then()
        })

    //............. //

    try {
        let user = await fetch('...url', { param });
        // "data" is now stored in "user"
        let posts = await fetch('...url', { user });

    } catch (error) {
        return error;
    }

}

// Object destructuring
let obj = { UserName: "Kelly", age: 17 };

let name = obj[name];
let age = obj[age];

// same thing as :
let { name: UserName, age } = obj;

let arr = [1, 2, 3];
let [one, two, three] = arr;
let [one, ...two] = arr;
console.log(two) // 2
// ...two --> [2, 3]


// Promise => common questions => promise.all
// various way to implement promise.all

let arr = [pro1, pro2, pro3];
myPromiseAll(arr)
    .then(data => {
        //data ==> [pro1Resolved, pro2Resolved];
    })
    .catch(error => { });

implement myPromiseAll
// using async await
async function myPromiseAll(Promiselist) {
    try {
        let result = [];
        for (let i = 0; i < promiseList.length; i++) {
            let data = await promiseList[i];
            result.push(data);
        }

        return result;

    } catch (error) {
        return error;
    }
}

// not using Async await

function myPromiseAll2(promiseList) {
    return new Promise((resolve, reject) => {
        let result = [];

        for (let i = 0; i < promiseList.length; i++) {
            let promise = promiseList[i];

            promise.then((data) => {
                result.push(data);

                if (result.length === promiseList.length) resolve(result);
            })
                .catch(error => {
                    reject(error);
                })
        }
    })
}

// defining a new promise

let newPromise = new Promise((resolve, reject) => {
    if (something) reject("reject");
    resolve("resolve");
    // first one is always executed
});

newPromise
    .then(e => console.log(e))
    .catch(e => console.log(e));

// SetTimeout => debounce / throttle

let id = setTimeout(() => { }, 0); // id is the settimeout id that we can use it for clearTimmeout.
clearTimeout(id) //=> cancel settimeout of that id.


function throttle(func, time) {
    let bool = true;

    return function () {
        let args = arguments; //==> "Ku"
        let context = this;
        if (bool) {
            bool = false;

            func.apply(context, args);
            setTimeout(() => {
                bool = true;
            }, time)
        }
    }
}


let Kelly = throttle(mark.speak, 1000);
Kelly("Ku");

// follow up
let mark = {
    name: "MARK",
    speak: function (string) {
        console.log(this.name + string)
    }
}

function debounce(func, time) {
    let id; // setTimeout id

    return function () {
        let context = this;
        let args = argument;

        clearTimeout(id);

        id = setTimeout(() => {
            func.apply(context, args);
        }, time);
    }
}

import debounce from lodash;

class something React.Component {

    debouncedSave = debounce(saveInput, 5000);

    saveInput = (e) => {
        this.props.save(e);
    }

    render() {
        <div onClick={this.debouncedSave}>

        </div>
    }
}





///////////////////////////////// Algorithms /////////////////////////////////

// "a" > "z" -- can compare strings
//  getCode("a")
// any recursive call is added to space complexity


let arr = [1, 2, 3, 4, 5];
function helper(index) {
    if (index === arr.length) return;
    console.log(arr[index]);
    helper(index + 1);
}

// T: O(n), S: O(n) => recursive stack.

function helper2(arr) {
    let result = [];

    arr.forEach(n => { result.push(n + 1) });

    return result; // [2,3,4,5,6]  // O(n) space;
}


//aabc
function counter(str) {
    let obj = {};
    for (let ch of str) obj[ch] = (obj[ch] || 0) + 1;

    for (let ch of str) {
        if (obj[ch] === undefined) obj[ch] = 0;
        obj[ch]++;
    }

    return obj; // => {a: 2, b: 1, c: 1};
}

function counterArray() {
    return arr.reduce((acc, el) => {

    }, {});
}

/// Inheritance.

animal.prototype.sleep = function () { }
animal.prototype.eat = function () { }

let one = new Animal();
let two = new Animal();

// Composition



// Linked list


// 1. deleting a Node
// 2. detecting a cycle

//  LL Iteration

// 1 -> 2 -> 3 -> null
function iterate(node) {
    if (!head) return head;
    let result = [];
    let node = root;

    while (node) {
        console.log(node); // logic 
        result.unshift(node);
        node = node.next
    }

    //result = [3, 2, 1]; 
  
    for (let i = 0; i < result.length; i++) {
        let from = result[i];
        let to = result[i + 1];
        if (to === undefined) to = null;

        from.next = to;
    }

    return result[0];
}

// MergeSort -- hard



//  Binary Tree    // Trie is same this this one
// DFS

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

//  N-ary
function Node(val) {
    this.val = val;
    this.next = [];
}

function iterateTree(root) {
    let depth = 0;
    helper(root, 1);
    return depth;

    function helper(node, d) {
        if (node) {

            depth = Math.max(depth, d);
            // result = Math.min(result, node.val);

            helepr(node.left, d + 1);
            helper(node.right, d + 1);

        }
    }
}


// find biggest number from root to leaf.
function iterateTree(root) {
    let sum = -Infinity;
    helper(root, 0);
    return sum;

    function helper(node, d) {
        if (node) {
            helepr(node.left, d + node.val);
            helper(node.right, d + node.val);
        } else {
            sum = Math.max(sum, d);
        }
    }
}

function iterateTree(root) {
    return helper(root);

    function helper(node) {
        if (node) {

            let L = helper(node.left);
            let R = helper(node.right);

            return Math.max(L, R) + node.val;

        } else {
            return 0;
        }
    }
}

//BFS

function bfs(root) {
    let queue = [root];
    let result = [];

    while (queue.length) {
        let nextQueue = [];
        let arr = [];

        while (queue.length) {
            let el = queue.shift();

            arr.push(el.val);

            if (el.left) nextQueue.push(el.left);
            if (el.right) nextQueue.push(el.right);
        }

        result.push(arr);
        queue = nextQueue;
    }

    return result;
}

function bfs(root) {
    let queue = [root];
    let result = [];

    while (queue.length) {
        let el = queue.shift();

        result.push(el.val);

        if (el.left) queue.push(el.left);
        if (el.right) queue.push(el.right);
    }

    return result;
}

// sliding window 









