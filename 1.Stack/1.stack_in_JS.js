let letters = [];
let word = "racecare";

let reverse = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
console.log(letters);

for (let i = 0; i < word.length; i++) {
  reverse += letters.pop();
}

console.log(reverse);
if (reverse === word) {
  console.log(word + "is a palindrome");
} else console.log("not a palndrome");
