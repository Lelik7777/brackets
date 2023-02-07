module.exports = function check(str, bracketsConfig) {
    // your solution
    const stack = [];
    //get object with key=')' and value='(' and etc
    const objBrackets = bracketsConfig.reduce((acc, cur) => {
        acc[cur[1]] = cur[0];
        return acc;
    }, {});
    str.split('').forEach(el => {
        if (stack.length===0) stack.push(el);
        else if (stack[stack.length - 1] === objBrackets[el]) stack.pop();
        else stack.push(el);
    });
    return stack.length===0;
}
