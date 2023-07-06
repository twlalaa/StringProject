"use strict";

// Tasks
// 1. Create a function that takes a string as an argument.
// Check if the length of the string is greater than 20.
// If it is, write 'String has more than 20 characters' else write 'String has less than 20 characters

let stringFunction = (string) => {
  if (string.length > 20) {
    console.log("String has more than 20 characters");
  } else {
    console.log("String has less than 20 characters");
  }
};

stringFunction("Lala");

console.log(
  "------------------------------------------------------------------------------------------------"
);

// 2. Write all countries that ends with 'stan' to the console

const countries = [
  "Kazakhstan",
  "Azerbaijan",
  "Lativa",
  "Uzbekistan",
  "Turkmenistan",
  "Iran",
];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].endsWith("stan")) {
    console.log(countries[i]);
  }
}

console.log(
  "------------------------------------------------------------------------------------------------"
);

// 3. Create the sentence below. Use string method to write 'Heil Hitler' 5 times
// "Long live motherland, Heil Hitler! Heil Hitler! Heil Hitler";

let hitlerString = "Long live motherland,";
let added = " Heil Hitler!";

console.log(hitlerString + added.repeat(3));

console.log(
  "------------------------------------------------------------------------------------------------"
);

// 4. Change all Heil Hitlers with the number 88

let myNewHitler = hitlerString + added.repeat(3);

console.log(myNewHitler.replaceAll("Heil Hitler!", 88));

console.log(
  "------------------------------------------------------------------------------------------------"
);

// 5. Create a function that takes a string as an argument and check
// if the given value (sentenve) has more than one word in it.
// If it is, write console that "The sentenece contains more than one word"
// else write 'This is a one word sentence'

let sentenceFunction = (string) => {
  if (string.split(" ").length > 1) {
    console.log("The sentenece contains more than one word");
  } else if (string.split(" ").length == 1) {
    console.log("This is a one word sentence");
  }
};

sentenceFunction("My name is Lala");

console.log(
  "------------------------------------------------------------------------------------------------"
);

// 6. Create a function that takes a string as an argument and returns how many words it has

let wordCount = (string) => string.split(" ").length;

console.log(wordCount("My name is Lala"));

console.log(
  "------------------------------------------------------------------------------------------------"
);

// 7. Create a function that takes firstName and lastName as arguments,
//and returns them in uppercase as one string

let nameFunction = (firstName, lastName) => {
  return firstName.toUpperCase().concat(" ", lastName.toUpperCase());
};

console.log(nameFunction("lala", "alakbarova"));

console.log(
  "------------------------------------------------------------------------------------------------"
);

// 8. Get phone number from prompt and store it in a variable, and write console like below

// input 077 455 63 64
// desired output +994-77-455-63-64

// let question = prompt("Please enter your mobile number: ");

// let st = "077 455 63 64";

// let st_new = st.replaceAll(" ", "-");

// console.log("+994-" + st_new.slice(1, st_new.length));

// let question_new = question.replaceAll(" ", "-");

// console.log("+994-" + question_new.slice(1, question_new.length));

console.log(
  "------------------------------------------------------------------------------------------------"
);

// 9. Create creditCard variable and write it to the console like the sentence below

// input - "4169737725524635";
// output - '******4635'

/*

let input = prompt("Enter your credit card number: ");

let input_lastFour = input.slice(-4);

console.log(input_lastFour.padStart(16, "*"));

*/
