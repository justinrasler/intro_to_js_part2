//create an object
// const Justin = {
//     name: "Justin Rasler",
//     age: 26,
//     city: "suwanee",
//     isAlive: true,
//     gaming: () => {
//         console.log(Justin.name + " is an elden lord. before the radan nerf.")
//     },
//     anime(){
//         console.log(this.name + " likes to watch anime. current favorite is jujustu kaisen.")
//     }
// };

// console.log(Justin);
// console.log(Justin.name);
// console.log(Justin["city"]);
// Justin.gaming();
// Justin.anime();



//create a Robot army

//create a key
const key = "weapon";

//create a single robot
const robot = {
    name: "BleepBlop",
    serial: 1,
    isEvil: false,
    ["Gas Tank"]: "Full",
    [key]: "lazers",
    speak: () => {
        console.log("EXTERRRRRRMINATE")
    },
    attack: function (){
        console.log(`${this.name} attacks with its ${this.weapon}`)
    }
};

// console.log(robot);
// console.log(robot.name);
// console.log(robot.weapon);
// console.log(robot["Gas Tank"]);
robot.speak();
robot.attack();




















//methods - functions that belong to a paritcular object

// const pikachu = {
//     name: 'pikachu',
//     hello(){
//         console.log("this is " + this.name)
//     },
//     hello2: function(){
//         console.log("this is " + this.name)
//     },
//     hello3: () => {
//         console.log("this is " + pikachu.name)
//     }
// };

// pikachu.hello();
// pikachu.hello2();
// pikachu.hello3();