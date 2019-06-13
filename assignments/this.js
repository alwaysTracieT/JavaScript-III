/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window/Global Object Binding: 
        Global binding/window binding is where the 'this' keyword ends up bound to the global scope, which means it calls on the entire JS language. 
* 2. Implicit Binding:
        If the global scop was the entire forest, we use implicit and explicit binding to point at one specific tree in that forest. We use dot notation to call on the specific point we need. 
* 3. New Binding:
* 4. Explicit Binding: 
*       Explicit binding uses apply(); call(); and bind(); in a similar way to             implicit binding. Apply(); looks at the array we've given it and tells the         function what we want the 'this' keyword to be associated with                     specifically.
        Bind(); creates a new function. When we call it, it sets the 'this' keyword to the value we've provided. 
        Call(); calls a function with a 'this' value and other arguments individually instead of as an array. 

* write out a code example of each explanation above
*/

//Principle 1: calls the entire js language (aka the whole forest)
// GLOBAL BINDING EXAMPLE: 
// function globalForest(tree){
//     console.log(this);
//     return `I am made of ${tree}`;
// }
// console.log(globalForest("tree"));

// Principle 2: To point at a specific 'tree' (giving context to one specific thing), we use implicit or explicit binding
// IMPLICIT BINDING EXAMPLE:
// const tree = {
//     leafColor: 'green',
//     height: 20,
//     grow: function(rate){
//         console.log(this);
//         return `I grow ${rate} per year.`;
//     }
// }
// //to call implicitly, we'll use dot notation:
// console.log(tree.grow(`1ft`));

// Principle 3: 
// EXPLICIT BINDING apply(); call(); bind();
// const hobbit = {
//     name: "Samwise",
//     age: 32, 
//     food: 'taters',
//     cook: function() {
//         return this;
//     }
// }
//EXPLICIT APPLY Example:   
// const skills = ['cooking', 'sleeping', 'adventuring'];

// const skills = ['cooking', 'sleeping', 'adventuring'];
// function intro(skill1, skill2, skill3){
//     return `Hi, I'm ${this.name} and I like ${skill1}, ${skill2}, and ${skill3}.`;
// };

// console.log(intro.apply(hobbit, skills));

//EXPLICIT CALL EXAMPLE:

// const skills = ['cooking', ' sleeping', ' adventuring'];
// function intro(skill1, skill2, skill3){
//     return `Hi, I'm ${this.name} and I like ${skill1}, ${skill2}, and ${skill3}.`;
// };
// console.log(intro.call(hobbit, skills,  'working out', 'dieting'));

//EXPLICIT BIND EXAMPLE: 
// const boy = {
//     name: "Timmy",
//     age: 11, 
//     play: function() {
//         return "I like to play with my ball.";
//     }
// }
// const skills = ['cooking', ' sleeping', ' adventuring'];
// function intro(skill1, skill2, skill3){
//     return `Hi, I'm ${this.name} and I like ${skill1}, ${skill2}, and ${skill3}.`;
// };

// const boyConst = intro.bind(boy, ...skills);
// console.log(boyConst());
//Now the value "Hi, I'm Timmy and I like cooking,  sleeping, and  adventuring." has been saved and can be used later
// the ...skills above is called "Spread syntax"


// Principle 4:
//  NEW BINDING EXAMPLE
//     this.greeting = 'Hello';
//     this.person = person;
//     this.speak = function(){
//         console.log(`${this.greeting}, ${this.person}!`);
//         console.log(this);

//     }
// }

// const guy = new Greeter('Homie');
// const guyTwo = new Greeter('Homer');
// const guyThree = new Greeter('Hodel');
// const guyFour = new Greeter('Hoss');
// const guyFive = new Greeter('Holmes');
// guy.speak();
// guyTwo.speak();
// guyThree.speak();
// guyFour.speak();
// guyFive.speak();
