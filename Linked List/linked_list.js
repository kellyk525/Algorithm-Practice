
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