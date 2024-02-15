/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var isValid = function (s) {
        if (s !== "()" && s !== "{}" && s !== "[]") {
          console.log(false);
        } else {
          console.log(true);
        }
      };
module.exports = { isValid };
