module.exports = function check(str, bracketsConfig) {
  const stack = [];
  let flag = true;
  const openBrackets = [];
  const closeBrackets = [];
  const sameBrackets = bracketsConfig.flat();

  sameBrackets.forEach((element, index) => {
    if (index % 2 !== 0) closeBrackets.push(element);
    else openBrackets.push(element);
  });
  [...str].forEach((element) => {
    if (
      !closeBrackets.includes(element) ||
      (closeBrackets.includes(element) &&
        openBrackets.includes(element) &&
        stack[stack.length - 1] !== element)
    ) {
      stack.push(element);
    } else {
      const openBracketIndex = sameBrackets.lastIndexOf(element);
      const prevBracket = sameBrackets[openBracketIndex - 1];
      const lastSetElement = stack[stack.length - 1];
      if (lastSetElement !== prevBracket) flag = false;
      else stack.pop();
    }
  });
  if (stack.length > 0) flag = false;
  return flag;
};
