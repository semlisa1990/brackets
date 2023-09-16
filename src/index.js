module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = [];
  const closeBrackets = [];
  const matchingBrackets = {};

  for (const [open, close] of bracketsConfig) {
      openBrackets.push(open);
      closeBrackets.push(close);
      matchingBrackets[close] = open;
  }

  for (const char of str) {
      if (openBrackets.includes(char)) {
          if (char === matchingBrackets[char] && stack.length > 0 && stack[stack.length - 1] === char) {
              stack.pop();
          } else {
              stack.push(char);
          }
      } else if (closeBrackets.includes(char)) {
          if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
              return false;
          }
      } else {
          return false;
      }
  }
  return stack.length === 0;
};
