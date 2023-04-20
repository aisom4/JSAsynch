// Problem Number 1

let text = "Give me some space.";

//  regex for replacing whitespace in global match
text = text.replace(/\s/g, "");

console.log(text);

// Problem Number 2

var byTen = 200;
var divisibleByTen = null;

if (byTen % 10 === 0) {
  //if the number is divisible by 10 and the remainders are 0 then console log will show true.
  divisibleByTen = true;
  console.log(divisibleByTen);
} else {
  divisibleByTen = false; // if the number is not divisible by ten the remainders will not be 0 the function will be false
  console.log(divisibleByTen);
}

//Problem number 3

const question = "How many vowels did I use?";
const result = vowelCheck(question);

// regex to make the function case-insensitve
function vowelCheck(question) {
  const vowels = question.match(/[aeiou]/gi).length; //length sets up an array to return a value

  return vowels;
}

console.log(result);
