/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
        if (s !== "()" && s !== "{}" && s !== "[]") {
          return false;
        } else {
          return true;
        }
      };
module.exports = { isValid };
