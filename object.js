//create an object
// const Justin = {
//     name: "Justin Rasler",
//     age: 26,
//     city: "suwanee",
//     isAlive: true
// };

// console.log(Justin);
// console.log(Justin.name);
// console.log(Justin["city"]);



//create a Robot army

//create a key
const key = "weapon";

//create a single robot
const robot = {
    name: "BleepBlop",
    serial: 1,
    isEvil: false,
    ["Gas Tank"]: "Full",
    [key]: "lazers"
};

console.log(robot);
console.log(robot.name);
console.log(robot.weapon);
console.log(robot["Gas Tank"]);