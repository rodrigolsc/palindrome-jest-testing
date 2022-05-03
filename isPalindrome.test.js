const isPalindrome = require('./isPalindrome');

test('"rotator" é palíndromo',
  () => {
    const toTest= 'Rotator';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  }
);

test('"bob" é palíndromo',
  () => {
    const toTest= 'bob';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  }
);

it('"madam" é palíndromo',
  () => {
    const toTest= 'madam';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  }
);

it('"mAlAyAlam" é palíndromo',
  () => {
    const toTest= 'mAlAyAlam';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  }
);

it('"1" é palíndromo', 
  () => {
    const toTest = '1';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  }
);  

it('"Able was I, ere I saw Elba" é palíndromo',
  () => {
    const toTest = 'Able was I, ere I saw Elba';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  }
);

it('"Madam I’m Adam" é palíndromo',
  () => {
    const toTest = 'Madam I’m Adam';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  }
);

it('"Step on no pets" é palíndromo',
  () => {
    const toTest = 'Step on no pets';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  }
);

it('"Top spot" é palíndromo',
  () => {
    const toTest = 'Top spot';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  }
);

it('"02/02/2020" é palíndromo',
  () => {
    const toTest = '02/02/2020';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  }
);

it('"xyz" não é palíndromo',
  () => {
    const toTest = 'xyz';

    debugger;
    const result = isPalindrome(toTest);

    expect(result).toBe(false);
  }
);

it('"elephant" não é palíndromo',
  () => {
    const toTest = 'elephant';

    debugger;
    const result = isPalindrome(toTest);

    expect(result).toBe(false);
  }
);

it('"Country" não é palíndromo',
  () => {
    const toTest = 'country';

    debugger;
    const result = isPalindrome(toTest);

    expect(result).toBe(false);
  }
);

it('"Top . post!" não é palíndromo',
  () => {
    const toTest = 'Top . post!';

    debugger;
    const result = isPalindrome(toTest);

    expect(result).toBe(false);
  }
);

it('"Wonderful-fool" não é palíndromo',
  () => {
    const toTest = 'Wonderful-fool';

    debugger;
    const result = isPalindrome(toTest);

    expect(result).toBe(false);
  }
);

it('"Wild imagination!" não é palíndromo',
  () => {
    const toTest = 'Wild imagination!';

    debugger;
    const result = isPalindrome(toTest);

    expect(result).toBe(false);
  }
);
