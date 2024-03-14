var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total number of chars is:" , totalChars);


var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at index 6 is: ", charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is: ", charAt11);

var sentence = "When you join meetings, webinars, chats or channels hosted on Zoom, your profile information";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
console.log("Last char is:" , lastChar);


console.log("========== indexOf() ==================");
var greet = "Good Morning";
var indexOfM = greet.indexOf('M');
console.log("Index of char M is: ", indexOfM);

console.log("========== concat() ==================");
var firstName = "Gajanan";
var lastName= " Kharat";
var resultConcat = firstName.concat(lastName);
console.log("Concat result is:", resultConcat);


console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);

console.log(`==A======== trim() ==================`);   //for removing spaces
var greet = "   Good Morning   ";
console.log(`${greet} it's length is : ${greet.length}`);       //length apan direct find karu shakto
var len = greet.trim();
console.log(`By Using Trim: ${len}`)
var nowLengthIs=len.length;
console.log(`After trim length is: ${nowLengthIs}`);

console.log(`====B====== trim() ==================`);
var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);

console.log(`Total spaces removed is: ${lengthBeforeTrim-lengthAfterTrim}`);


console.log(`=====A===== include() ==================`);
var greet = "Good Morning";
var morning = greet.includes()
console.log(`incliding the value : ${morning}`);

console.log(`====B====== includes() ==================`);        //ya madhe je log katoi te availabhe ahe ka check hote
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);


console.log(`=======A=== slice() ==================`);
var greet="Developers World"
var value=greet.slice(0,14)
console.log(`print output will be : ${value}`);

console.log(`======B==== slice() ==================`);
var greet = "Good Morning";
var result = greet.slice(3, 10);
console.log(`Slice is ${result}`);

console.log(`========== search() ==================`);
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

console.log(`========== split() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);

///// Assignment 
// Write a function with name totalWord() with one arguments
//  "I am happy Buddy" 
//  "I am learning JS the language of internet"
// and this function should return the total numbers of words

function totalWord(sentence){
    var words = sentence.split(" ");
    var totalWords = words.length;
    return totalWords
}
var totalWords = totalWord("I am happy Buddy");
console.log(`"I am happy Buddy". Total number od words is: ${totalWords}`);

var totalWords = totalWord("I am learning JS the language of internet");
console.log(`"I am learning JS the language of internet". Total number od words is: ${totalWords}`);