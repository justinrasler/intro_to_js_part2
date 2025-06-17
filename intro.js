/*console.log("hello world");

//if/else statements
let x = 5

if (x > 3){
    console.log("greater than 3")
} else {
    console.log("3 or less")
};


//switch statements
let comingOrGoing = 'hello'

switch(comingOrGoing){
    case "hello":
        console.log("Hello, how are you")
        break

    case "goodbye":
        console.log("goodbye, be well!")
        break
    default:
        console.log("are you coming or going?")
};*/

const { randomBytes } = require("crypto");

//loops

//while loops
/*let z = 0;
while(z < 10){
    console.log(z)
    z += 1
}; */

//for loops
/*for(let q = 0; q < 10; q += 1){
    console.log(q)
}; */

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//arrays

//create an array
/*const instructionalTeam = ["Ira", "Alex", "Yanny", "Chris", "Ray"];

console.log(instructionalTeam[1]);
console.log(instructionalTeam[3]);


//chaging array values
const anArray = [1, "", 3, "", 5];

//replace the 2nd element with a 2
anArray[1] = 2;

//replace the 4th element with a 4
anArray[3] = 4;

//log to check if changes were made
console.log(anArray);*/


//adding values to arrays

//create a new array
/*const numbers = [2,3,4];

// log the current length of the array
console.log(numbers.length);

// push the number 5 to the end of the array
numbers.push(5);
console.log("---we just pushed 5---");
console.log(numbers);
console.log(numbers.length);

//unshift the number 1 to the beginning of the array, then log the array and its length
numbers.unshift(1);
console.log("---we just unshifted 1---");
console.log(numbers);
console.log(numbers.length);

//removing values from an array


//create an array
const survivor = ["loser","winner","loser"];

//remove the last item from the array and log the array
survivor.pop();
console.log("popped loser:", survivor);

// remove the first item from the array and log the array
survivor.shift();
console.log('shifted loser:', survivor);



// 10 minute exercise

//favShows

//create the array
const favShows = ["jjk", "one piece", "bleach"];

//log the array and its length
console.log(favShows);
console.log(favShows.length);

//remove the first and last value of the array
favShows.pop();
favShows.shift();

//add another character to the front and back of the array
favShows.push("dragon ball z");
favShows.unshift("attack on titan");

//log the array
console.log(favShows); */


// using splice

//splice allows you to add and remove items in the middle of the array.
/*const garden = ["dirt", "weed", "weed", "weed", "dirt"];

// Remove the weeds from our garden by splicing 3 items from index 1
garden.splice(1, 3);
console.log("cleaned garden:", garden);

// Plant a rose in the middle of our garden by splicing nothing from index 1 and inserting items before it
garden.splice(1, 0, "rose");
console.log("rose in garden:", garden); */



//Looping Over an array with a For Of Loop

//Using a for of loop we can quickly loop over each element of an an array.

//create an array
/*const pokemon = ["Pikachu", "Mew", "Snorlax"];

// Catch them all with a for of loop

for (poke of pokemon){
    console.log(`i have caught ${poke}`)
}; */

//sort method
sortMe = [5,4,3,2,1]
sortMe.sort();
console.log(sortMe);

//slice method
sliceMe = [2,3,3,3,4];
sliced = sliceMe.slice(1,4);
console.log(sliced);

