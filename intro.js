console.log("hello world");

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
};

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
const instructionalTeam = ["Ira", "Alex", "Yanny", "Chris", "Ray"];

console.log(instructionalTeam[1]);
console.log(instructionalTeam[3]);


//chaging array values
const anArray = [1, "", 3, "", 5];

//replace the 2nd element with a 2
anArray[1] = 2;

//replace the 4th element with a 4
anArray[3] = 4;

//log to check if changes were made
console.log(anArray);


//adding values to arrays

