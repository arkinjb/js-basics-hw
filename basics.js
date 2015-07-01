// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
// number
// typeof returns the data type or structure (number, string, boolean, undefined, null, object)

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
// string
// a string is data enclosed in quotes

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
// object
// an array is a list of values enclosed in brackets. an array is an object.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
// number
// NaN stands for not a number. It's data type, though, is a number.
// NaN occurs when math is performed on a string, e.g. 5 * "pizza"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
// hamburgers
// js will always concatenate two strings that are added together with a +

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
// NaN
// both values are strings and js cannot perform substraction on strings

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
// NaN
// js cannot add or concatenate a string with a number
// after testing, my answer is incorrect. it will concatenate the two terms as if the 5 was a string "5"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
// NaN
// js cannot perform multiplication on a string

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
// .pop will remove the last value from the array - 2, 4, 6
// .push adds a value to the end of the array - 2, 4, 6, 10
// .unshift adds a value to the front of the array - 3, 2, 4, 6, 10
// [3, 2, 4, 6, 10]

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
// join turns the values in an array into a string
// you will also be adding "dash" into the array
// after the join - "dot, pause, dot, dash"
// split will split a string into an array where each element is a word of the string
// result is that moreMorse would return - ["dot", "pause", "dot", "dash"]
// after testing...
// join turns the elements in the array into a string with the value from the join command in between each element
// no value in the join command means a comma separates the elements
// "" means no space; " " means a space
// so after the join, the string is dot dash pause dash dot
// and after the split, the string will be split into an array element at each space (" ")
// moreMorse will = ['dot', 'dash', 'pause', 'dash', 'dot']

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
// bands.push will add the beatles array into the bands array as the first element
// bands.unshift will add the stones array into the bands array as the first element, making the beatles array the 2nd element
// bands.length - 1 = 1 because the length is 2 (2 elements, both of which are arrays)
// bands[1] is the beatles array
// pop will remove the last element from the beatles array - pete
// bands[0] is the stones array
// shift will remove the first element of the stones array - brian
// bands[1][3] refers to the fourth element (which doesn't exist yet) of the 2nd element in bands (the beatles array)
// Ringo will be added to the beatles array
// bands = [['Mick', 'Keith', 'Ronnie', 'Charlie'], ['Paul', John', George', 'Ringo']]
