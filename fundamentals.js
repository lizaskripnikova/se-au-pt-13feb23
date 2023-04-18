/* 1. What are the results of these expressions? 
"" + 1 + 0 = 10
"" - 1 + 0 = -1
true + false = 1								
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = 9px
"$" + 4 + 5 = $45 
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = -9  5
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
" \t \n" - 2 = -2
*/



/* 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them? 
let addition = three + four  = 34  - wrong
let multiplication = three * four  = 12  - right
let division = three / four  = 0.75  - right
let subtraction = three - four  = -1   - right
let lessThan1 = three < four  = true  - right
let lessThan2 = thirty < four  = true  - wrong
We can fix these expressions by setting numbers as numbers instead of strings.
*/



/* 3. The following messages printed:
if ("0") console.log('#2 zero is true') 
if (-1) console.log('negative is true') 
if (1) console.log('positive is true')
The reason why the other statements won't print is because they are evaluating to falsy values in JavaScript.
*/ 



/* 4. 
let a = 2, b = 3;
let result = `${a} + ${b} is ${a + b < 10 ? 'less than 10' : 'greater than 10'}`;
+= operator takes the values from the right of the operator and adds it to the variable on the left.
*/



// 5. 
// a) function expression syntax: 
const getGreeting = function(name) {
    return 'Hello ' + name + '!';
  }

// b) arrow function syntax: 
const getGreeting1 = (name) => 'Hello ' + name + '!';

// To test:
console.log(getGreeting('Alex')); // "Hello Alex!"



//6. 
const westley = { 
    name: 'Westley', 
    numFingers: 5 
  } 
  const rugen = { 
    name: 'Count Rugen', 
    numFingers: 6 
  } 
  
  const inigo = { 
    firstName: 'Inigo', 
    lastName: 'Montoya',
    greeting(person) {  
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; 
        console.log(greeting + this.getCatchPhrase(person)); 
    }, 
    getCatchPhrase: (person) => (person.numFingers === 6 ? "I am Inigo Montoya. You killed my father. Prepare to die." : "Nice to meet you.")
  };
  
  inigo.greeting(westley) 
  inigo.greeting(rugen)
  

  
// 7. a) Each method needs to return ‘this’
  const basketballGame = {
    score: 0,
    freeThrow() {
      this.score++;
      return this;
    },
    basket() {
      this.score += 2;
      return this;
    },
    threePointer() {
      this.score += 3;
      return this;
    },
    halfTime() {
      console.log('Halftime score is ' + this.score);
      return this;
    }
  };
  
// Function chaining example
  basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

 // b) Add a new method to print the full time final score 
 const basketballGame1 = {
    score: 0,
    freeThrow() {
      this.score++;
      return this;
    },
    basket() {
      this.score += 2;
      return this;
    },
    threePointer() {
      this.score += 3;
      return this;
    },
    halfTime() {
      console.log('Halftime score is ' + this.score);
      return this;
    },
      fullTime() {
    console.log('Full time score is ' + this.score);
    return this;
  }
};

// Function chaining example
basketballGame1.basket().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime();

//c) add a new property ‘fouls’ to the object ‘basketballGame and a new method ‘foul()’ to increment it 
const basketballGame2 = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  foul() {
    this.fouls++;
    return this;
  },
  halfTime() {
    console.log('Halftime score is ' + this.score + ' with ' + this.fouls + ' fouls.');
    return this;
  },
  fullTime() {
    console.log('Full time score is ' + this.score + ' with ' + this.fouls + ' fouls.');
    return this;
  }
};

// Function chaining example
basketballGame2.basket().freeThrow().freeThrow().basket().threePointer().foul().foul().halfTime().fullTime();



// 8. 
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};

// a) 
function printObjectProperties(obj) {
  for (let prop in obj) {
    console.log(prop + ': ' + obj[prop]);
  }
}

// Test the function with the sydney object
printObjectProperties(sydney);

// b)
const newYork = {
    name: 'New York',
    population: 8_336_817,
    state: 'New York',
    founded: '1626',
    timezone: 'America/New York'
  };
  
  // Test the function with the newYork object
  printObjectProperties(newYork);
  


  // 9. a) 
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];

// create a new array moreSports that is equal to teamSports. Use .slice() method to copy teamSports to moreSports, so that any changes to moreSports will not affect teamSports
let moreSports = teamSports.slice();

// add some new sport values to the beginning and end of the array
moreSports.unshift('Basketball');
moreSports.push('Football');

console.log(teamSports); // Output: ['Hockey', 'Cricket', 'Volleyball']
console.log(moreSports); // Output: ['Basketball', 'Hockey', 'Cricket', 'Volleyball', 'Football']

// b) 
let dog1 = 'Bingo';

// create a new dog2 variable equal to dog1
let dog2 = dog1;

// give dog2 a new name
dog2 = 'Rufus';

console.log(dog1); // Output: 'Bingo'
console.log(dog2); // Output: 'Rufus'

// c)
 let cat1 = { name: 'Fluffy', breed: 'Siberian' }; 

//create a new cat2 variable equal to cat1 
let cat2 = cat1

//change its name property 
cat2 = { name: 'Tom', breed: 'Siberian' }; 

console.log(cat1); // Output: { name: 'Fluffy', breed: 'Siberian' }
console.log(cat2); // Output: { name: 'Tom', breed: 'Siberian' }

// d) 
console.log(teamSports); // Output: ['Hockey', 'Cricket', 'Volleyball']
    console.log(dog1); // Output: 'Bingo'
    console.log(cat1); // Output: { name: 'Fluffy', breed: 'Siberian' }



// 10 a) 
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
     }

    let john = new Person('John', 25);

    console.log(john); // Output: Person { name: 'John', age: 25, human: true }

    // b) 
let maria = new Person('Maria', 30);
console.log(maria); // Output: Person { name: 'Maria', age: 30, human: true }

// c) 
console.log(john); // Output: Person { name: 'John', age: 25, human: true }
    console.log(maria); // Output: Person { name: 'Maria', age: 30, human: true }

//d) 
class PersonClass {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
   }
 }

let johnn = new PersonClass('John', 25);
let mariaa = new PersonClass('Maria', 30);
let peter = new PersonClass('Peter', 35);


console.log(johnn);  // Output: PersonClass { name: 'John', age: 25, human: true }
console.log(mariaa);  // Output: PersonClass { name: 'Maria', age: 30, human: true }
console.log(peter); // Output: PersonClass { name: 'Peter', age: 35, human: true }

//e) 
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  
    this.canDrive = function() {
      return this.age >= 16;
    }
  }

    let johnnn = new Person('John', 25);
    let mariaaa = new Person('Maria', 15);
  
    console.log(johnnn.canDrive()); // Output: true
    console.log(mariaaa.canDrive()); // Output: false





