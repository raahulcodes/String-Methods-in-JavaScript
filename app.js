/* Built In JS Methods

    *Global Methods(isNaN, encodeURI(), decodeURI(), encodeURIComponent(), decodeURIComponent());
    *Parsing Numbers
    *Making Integers with parseInt()
    *Making Floats with parseFloat()
    *Array Methods
    *forEach(), filter(), every(), copyWithin(), map(), lastIndexOf(), reduce(), includes(), find(), findLastIndex(), findIndex(), findLast(), join(), flat(), flatMap(), at()
    *String Methods
    *at(), length, charAt(), charCodeAt(), includes()

*/

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
