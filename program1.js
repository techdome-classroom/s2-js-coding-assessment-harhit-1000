/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (map[char]) {
      // Push the corresponding closing parenthesis onto the stack
      stack.push(map[char]);
    } else if (char === ')' || char === '}' || char === ']') {
      // Check if the current closing parenthesis matches the top of the stack
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  // If the stack is empty, all parentheses were properly closed
  return stack.length === 0;
};

module.exports = { isValid };


