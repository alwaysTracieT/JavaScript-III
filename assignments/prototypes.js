/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}
/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(moreAttributes) {
  GameObject.call(this, moreAttributes);
  this.healthPoints = moreAttributes.healthPoints;
}

//Inheritance 
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `Ouch, ${this.name}! That must sting! (${this.name} took damage.)`;
};
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};

//new constructors for Villain and Hero:
function Villain(evilAttributes){
  Humanoid.call(this, evilAttributes);
  this.evilGlare = this.evilGlare;
  this.opponentHealth = evilAttributes.opponentHealth;

}
//inherit
Villain.prototype = Object.create(Humanoid.prototype);
//methods
Villain.prototype.sideEye = function () {
  this.opponentHealth -= 6;
  return `The side-eye of ${this.name} will have you cowering in no time, puny peasant!`;
}
//Hero
function Hero(whiteHatAttributes) {
  Humanoid.call(this, whiteHatAttributes);
  this.sultryVoice = this.sultryVoice;
  this.opponentHealth = whiteHatAttributes.opponentHealth;
}
//inherit
Hero.prototype = Object.create(Humanoid.prototype);
//methods
Hero.prototype.sweetNothings = function () {
  this.opponentHealth -=11;
  return `No one can resist the sweet talk of ${this.name}. Victory will be mine!`;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const MIL = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 14,
      height: 1,
    },
    healthPoints: 8,
    name: 'The Matriarch',
    team: 'The depths',
    weapons: [
      'sarcasm',
      'salt on everything'
    ],
    language: 'Common Tongue',
    evilGlare: 'Shooting daggers'
  });

  const Neighbor  = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 6,
    },
    healthPoints: 7,
    name: 'Carl',
    team: 'Olympus',
    weapons: [
      'positive attitude',
      'lack of eyesight'
    ],
    language: 'Common Tongue',
    sultryVoice: 'Like Wayne Brady'
  });

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

 console.log(`At ${MIL.createdAt}, MIL appeared on her porch with ${MIL.healthPoints} health points at her disposal.`);
 console.log(`The Neighbor, conveniently outside at the same moment noticed MIL looking agressive); 
 console.log(Neighbor.createdAt); 
 console.log(Neighbor.healthPoints);


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
