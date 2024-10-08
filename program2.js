/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if (!s) return 0; // Handle empty string

  const romanToIntMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanToIntMap[s[i]];
    const next = romanToIntMap[s[i + 1]];

    if (current === undefined) {
      throw new Error('Invalid Roman numeral character'); // Handle invalid characters
    }

    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};

module.exports = { romanToInt };
