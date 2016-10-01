function primesSum(){
  var max = prompt('Enter a number to see the sum of all prime numbers up to that number inclusively.');

  var nums = [];
  var primes =[];
  var nonPrimes = [];
  //make an array of numbers up to a limit
  for (num = 2; num < max; num++)
    {
      nums.push(num);
    }
  while (nums.length > 0)
    {
  //make an array of primes and add 2

      primes.push(nums.shift());

  //take any numbers divisible by 2 and remove them from the nums array and push them into the nonPrimes Array.
      for (var i =0; i < nums.length; i++)
        {
          if (nums[i] % primes[primes.length-1] === 0)
          {
            nonPrimes.push(nums.splice(i,1));
          }
        }
    }
console.log(primes);

var sum = primes.reduce(function(tot, num) {
  return tot + num;
}
);
alert(sum);
}

primesSum();
