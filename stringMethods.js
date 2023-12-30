// Sample string
let sampleString = "Hello,World! Hello";

// 1.concat - concatenates two strings 
let concatenatedString = sampleString.concat(" Have a great day!");
console.log("Concatenated string:", concatenatedString);

// 2.endsWith 
let endsWithExclamation = sampleString.endsWith("!");
console.log("Ends with exclamation mark?", endsWithExclamation);

// 3.includes - 
let includesWorld = sampleString.includes("World");
console.log("Includes 'World' ? ", includesWorld);

// 4.indexOf - 
let indexOfWorld = sampleString.indexOf("World");
console.log("Index of 'World':", indexOfWorld);

// 5.lastIndexOf - 
let lastIndexOfl = sampleString.lastIndexOf("l");
console.log("Last index of 'l':", lastIndexOfl);

// 6.match 
let matches = sampleString.match('Hello');
console.log("Matches found:", matches);

// 7.matchAll
const S1 = /Hello/g;
const matchAllResult = sampleString.matchAll(S1)
for (const match of matchAllResult){
    console.log(" All matches : ",match);
}

// 8.padEnd 
let paddedEnd = sampleString.padEnd(20, ".");
console.log("Padded from end:", paddedEnd);

// 9.padStart
let paddedStart = sampleString.padStart(22, ".");
console.log("Padded from start:", paddedStart);

// 10.repeat 
let repeatedString = sampleString.repeat(3);
console.log("Repeated string:", repeatedString);

// 11.replace 
let replacedString = sampleString.replace("World", "Universe");
console.log("Replaced string:", replacedString);

// 12.search 
let searchResult = sampleString.search("World");
console.log("Search result:", searchResult);

// 13.slice 
let slicedString = sampleString.slice(7, 12);
console.log("Sliced string:", slicedString);

// 14.split 
let splitString = sampleString.split(",");
console.log("Split string:", splitString);

// 15.startsWith -
let startsWithHello = sampleString.startsWith("Hello");
console.log("Starts with 'Hello'?", startsWithHello);

// 16.substr 
let substring = sampleString.substr(7, 5);
console.log("Substring:", substring);

// 17.substring 
let subString = sampleString.substring(7, 10);
console.log("Sub-string:", subString);

// 18.toLowerCase 
let lowerCaseString = sampleString.toLowerCase();
console.log("Lowercase string:", lowerCaseString);

// 19.toUpperCase 
let upperCaseString = sampleString.toUpperCase();
console.log("Uppercase string:", upperCaseString);

// 20.trim 
let trimmedString = "    Hello,World! Hello   ";
console.log("Trimmed string:", trimmedString.trim());

// 21.trimEnd (or trimRight) 
let trimmedEnd = "    Hello,World! Hello    ";
console.log("Trimmed end:", trimmedEnd.trimEnd());

// 22.trimStart (or trimLeft) 
let trimmedStart = "    Hello,World! Hello    ";
console.log("Trimmed start:", trimmedStart.trimStart());

// 23.charAt - 
let charAtIndex = sampleString.charAt(6);
console.log("Character at index 6:", charAtIndex);

// 24.charCodeAt - 
let charCodeAtIndex = sampleString.charCodeAt(7);
console.log("Unicode of character at index 7:", charCodeAtIndex);
