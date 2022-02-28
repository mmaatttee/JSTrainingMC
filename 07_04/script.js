/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


let library = ["book", "speakerL", "speakerR", "totebag", true, 4];
console.log(library);
let last = library.pop();

console.log(last);


library.splice(0,0,library.pop());
console.log(library);

library.push(last);
console.log(library.sort());

let found = library.find(stuff => stuff == "4");
console.log(found);
