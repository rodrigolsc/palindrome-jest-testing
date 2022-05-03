const isPalindrome = (frase) => {
  const test = frase.toUpperCase().replace(/ /g,'').replace("/", '').replace(",", '').replace("’", '')

    for(let i = 0; i < Math.floor(test.length / 2); i++) {
      if (test[i] !== test[test.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  };
  
  const isPalindromeRecursive = (test) => {
    if (test === '') {
      return true;
    }
  
    if (test[0] !== test[test.length - 1]) {
      return false;
    }
  
    return isPalindrome(test.substr(1, test.length - 2));
  }
  
  module.exports = isPalindrome;