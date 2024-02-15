/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s === "()" && s === "{}" && s === "[]") {
    console.log(true);
  } else {
    console.log(false);
  }
};
isValid([s]);
module.exports = { isValid };
