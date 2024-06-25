// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let myArr = [];
  for (let item in array) {
    let lower = array[item].name.toLowerCase();
    for (let value in lower){
			if (lower[value] === letter){
				myArr.push(array[item].name);
			}
		}
  }
  return myArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
