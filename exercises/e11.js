// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  let final = [];
  for (let item in array){
    if(array[item].withdrawals === undefined){
      final.push(0)
    } else {
        let drawals = array[item].withdrawals;
         final.push(drawals.reduce((total, elem)=>
          elem > total ?
          elem : elem + total
        )); 
      }
    }
    return final;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
