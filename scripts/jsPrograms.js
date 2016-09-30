
//runs a program
function runPrimesSum(){
  $('#primes').on('click', function(){
    var max = prompt('Enter a number to see the sum of all prime numbers up to that number inclusively.');
    max = parseInt(max);
    if (max === 0) {
      alert('Zero is not a prime number');
    } else if (max === 1) {
      alert('One is not a prime number. Really, look it up...');
    } else {
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
      var sum = primes.reduce(function(tot, num) {
        return tot + num;
      });
      alert(sum);
    }
  });
}

function runCombustion(){
  $('#combustion').on('click', function(){
    var c1, h1, o1, h2, o2, o3;
    var choice = true;
    while (choice == true)
    {
      c1 = prompt("How many carbons are in each molecule of your fuel source?(numeric digits only)");
      h1 = prompt("How many hydrogens are in each molecule of your fuel source?(numeric digits only)");
      o1 = prompt("How many oxygens are in each molecule of your fuel source?(numeric digits only).  Type 0 if there are no oxygens.");
      h2 = h1/2;
      o2 = (c1*2) + h2;
      if (o1 == 0)
      {
        o3 = (o2/2);

        while(o3 % 1 != 0)
        {
          h1 *=2;
          c1 *=2;
          o3 *=2;
        }
        alert("The balanced chemical formula for this complete combustion reaction is C" +c1+ "H"+h1 +" + "+o3 + "O2 makes " +c1+ "CO2 and "+ h2+"H2O.");

      }
      else
      {
        o3 = (o2-o1)/2;
        alert("The balanced chemical formula for this complete combustion reaction is C" +c1+ "H"+h1 + "O" +o1 +" + " + o3 + "O2 makes " +c1+ "CO2 and "+ h2+"H2O.");
      }
      choice = window.confirm("Would you like to use this program again?");
    }
  });
}


runPrimesSum();
runCombustion();
