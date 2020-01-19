
// hard calculator 1


var calculate = function (s) {
    let result = 0;
    let sign = 1;
    const stack = [];
    const opStack = [];


    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        if (current === ' ') {
            continue;
        } else if (current === "+") {
            sign = 1;
        } else if (current === "-") {
            sign = -1;
        } else if (current >= "0" && current <= "9") {
            let num = current;

            while (i + 1 < s.length && s[i + 1] >= "0" && s[i + 1] <= "9") {
                num += s[i + 1];
                i++;
            }

            result += sign * parseInt(num);
        } else if (current === '(') {
            stack.push(result);
            result = 0;
            opStack.push(sign);
            sign = 1;
        } else if (current === ')') {

            result = opStack.pop() * result + stack.pop();
            sign = 1;
        }

    }

    return result;
}
