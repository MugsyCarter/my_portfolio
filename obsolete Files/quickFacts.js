
var nums = ['a', 'b', 'c', 'd', 'e', 'f'];


nums.reduce(function(acc, curr) {
  acc[curr] = curr;
  return acc;
},{});
