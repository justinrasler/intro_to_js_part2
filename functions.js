
//arrow functions
/*const helloWorld = () => {
    console.log("Hello World")
};

//annonymous functions
const helloWorld = function(){
    console.log("Hello World")
};

//hoisted function
function helloWorld(){
    console.log("Hello World")
}


helloWorld() */

const printGreeting = (name) => {
return `Hello there ${name}`
};

console.log(printGreeting("Slimer"));

//reverse word order

const reverseWordOrder = (str) => {
    const words = str.split(' ');
    const reverseWordOrder = words.map(word => {
        return word.split('').reverse().join('');
    });
    return reverseWordOrder.join(' ');
}

console.log(reverseWordOrder("Ishmael me Call"));


function calculate(num1, num2, operation){
    if(operation == "add"){
        return num1 + num2
    } else if(operation == "sub"){
        return num1 - num2
    }
};

console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "add"));