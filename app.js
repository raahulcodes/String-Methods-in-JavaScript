// Project
let name = "Rahul";

// Output Required:
// Name: Rahul
// Length: 5
// First character: R
// Last character: l
// Unicode of first character: 82
// Contains "a": true

// printing the name as it is
console.log("Name: " + name);

// using the length property to get the length of the string
console.log("Length: " + name.length);

// using the charAt() method to get the character at 0 index
console.log("First Character: " + name.charAt(0));

// using the charAt() method along with length property to get the last character
console.log("Last Character: " + name.charAt(name.length-1));

// using the charCodeAt() method to get the numeric value of the string character at 0 index
console.log("Unicode of First Character: " + name.charCodeAt(0));

// using the includes() method to get the boolean value for the character(checking whether it's present or not)
console.log("Contains \"a\" :" + name.includes("a"));

// returning the part of the string upto end starting from 2 using slice() method
console.log("Slicing: " + name.slice(2));

// returning the part of the string upto 3 using the substring() method it gives 1 to 2
console.log("Substring: " + name.substring(3,1));

//Converting the name to Upper case using the toUpperCase() method
console.log("Uppercase: " + name.toUpperCase());

//Converting the name to lower case using the toLowerCase() method
console.log("Lowercase: " + name.toLowerCase());

// concat method to concat both the strings just like +
console.log("Concat: " + name.concat(" ", "Sharma"));

//removing the whitespace using the trim() method
console.log("Trim: " + name.trim());

// padStart() adds the padString at the start of the string element 
console.log(name.padStart(20, "3"));

// padEnd() adds the padString at the end of the string element 
console.log(name.trimStart().padEnd(20, "3"));
