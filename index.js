function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate in all arrays 
  //look for a differance between target and array
  //check if the difference is same as the target.
  for (let i = 0; i < array.length; i++) {
    const diff = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if(array[j] === diff) return true;      
    }
    
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/ 
// (O)n2
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  The code checks a difference between an array and the target
  it then comapres the differnce with the rest if the array elements
  it returns true if they're equal.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
