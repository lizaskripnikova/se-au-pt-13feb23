// 1. 
function ucFirstLetters(str) {
    // split the string into an array of words
    let words = str.split(" ");
    
    // iterate over each word, capitalize the first letter, and concatenate the rest of the word
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    
    // join the array of words into a string and return it
    return words.join(" ");
  }
  
  console.log(ucFirstLetters("los angeles")); // "Los Angeles"



// 2. 
function truncate(str, max) {
    if (str.length > max) {
      // truncate the string and add an ellipsis to the end
      return str.substring(0, max - 3) + "...";
    } else {
      // return the original string
      return str;
    }
  }
  
  console.log(truncate('This text will be truncated if it is too long', 25)); // "This text will be truncat..."
  
  // b) using a conditional operator 
function truncate(str, max) {
    return str.length > max ? str.substring(0, max - 3) + "..." : str;
  }
  
  console.log(truncate('This text will be truncated if it is too long', 25)); // "This text will be truncat..."
  
  

// 3 a)
const animals = ['Tiger', 'Giraffe'];

// add two new values to the end of the array
animals.push('Elephant', 'Lion');

console.log(animals); // ['Tiger', 'Giraffe', 'Elephant', 'Lion']


// b)
const animalss = ['Tiger', 'Giraffe'];

// add two new values to the beginning of the array
animals.unshift('Elephant', 'Lion');

console.log(animalss); // ['Elephant', 'Lion', 'Tiger', 'Giraffe']


// c) 
const animalsss = ['Tiger', 'Giraffe', 'Elephant', 'Lion'];

// sort the array alphabetically
animals.sort();

console.log(animalsss); // ['Elephant', 'Giraffe', 'Lion', 'Tiger']


// d) 
function replaceMiddleAnimal(newValue) {
    const animals = ['Tiger', 'Giraffe', 'Elephant', 'Lion'];
    const middleIndex = Math.floor(animals.length / 2); // get the index of the middle element
    animals[middleIndex] = newValue; // replace the middle element with the new value
    return animals;
  }
  console.log(replaceMiddleAnimal('Bear'));
  

  // e)
function findMatchingAnimals(beginsWith) {
    const animals = ['Tiger', 'Giraffe', 'Elephant', 'Lion'];
    const matchingAnimals = [];
  
    for (let i = 0; i < animals.length; i++) {
      const animal = animals[i];
      if (animal.toLowerCase().startsWith(beginsWith.toLowerCase())) {
        matchingAnimals.push(animal);
      }
    }
  
    return matchingAnimals;
  }
  console.log(findMatchingAnimals('g')); // ['Giraffe']
  console.log(findMatchingAnimals('E')); // ['Elephant']


  //4
function camelCase(cssProp) {
    return cssProp.replace(/-([a-z])/g, function (match, letter) {
      return letter.toUpperCase();
    });
  }
  const cssProp = 'margin-left';
  const camelCasedProp = camelCase(cssProp);
  console.log(camelCasedProp); // Output: "marginLeft"

  //b For loop with conditional operator
function camelCase(cssProp) {
    let camelCased = '';
    for (let i = 0; i < cssProp.length; i++) {
      camelCased += (cssProp[i] === '-') ? cssProp[++i].toUpperCase() : cssProp[i];
    }
    return camelCased;
  }
  
  // For...in loop without conditional operator
  function camelCase(cssProp) {
    let camelCased = '';
    let nextIsUpper = false;
    for (let i in cssProp) {
      if (nextIsUpper) {
        camelCased += cssProp[i].toUpperCase();
        nextIsUpper = false;
      } else if (cssProp[i] === '-') {
        nextIsUpper = true;
      } else {
        camelCased += cssProp[i];
      }
    }
    return camelCased;
  }
  

//5 a
// The above code concatenates two string values produced by the toFixed() method, resulting in "0.200.10".


//b 
function currencyAddition(float1, float2) {
    const result = (float1 * 100 + float2 * 100) / 100;
    return parseFloat(result.toFixed(2));
  }
  
  const float1 = 0.1;
  const float2 = 0.2;
  const result = currencyAddition(float1, float2);
  console.log(result); // Output: 0.3
  

  //c 
function currencyOperation(float1, float2, operation) {
    const multiplier = 100;
  
    switch (operation) {
      case '+':
        return (float1 * multiplier + float2 * multiplier) / multiplier;
      case '-':
        return (float1 * multiplier - float2 * multiplier) / multiplier;
      case '*':
        return (float1 * multiplier * float2) / (multiplier * multiplier);
      case '/':
        if (float2 === 0) {
          throw new Error('Cannot divide by zero');
        }
        return (float1 * multiplier) / (float2 * multiplier);
      default:
        throw new Error('Invalid operation: ' + operation);
    }
  }
  
  // Example usage
  const twentyCents = 0.20;
  const tenCents = 0.10;
  const resultt = currencyOperation(twentyCents, tenCents, '+');
  console.log(resultt.toFixed(2)); // Output: 0.30
  


  //6 
function unique(duplicatesArray) {
    const uniqueArray = [];
  
    for (let i = 0; i < duplicatesArray.length; i++) {
      if (!uniqueArray.includes(duplicatesArray[i])) {
        uniqueArray.push(duplicatesArray[i]);
      }
    }
  
    return uniqueArray;
  }
  
  const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
  const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
  
  console.log(unique(colours)); // Output: [ 'red', 'green', 'blue', 'yellow', 'orange' ]
  console.log(unique(testScores)); // Output: [ 55, 84, 97, 63, 32, 91, 43 ]



  //7 a)
const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
]; 

function getBookTitle(bookId) {
  const book = books.find((book) => book.id === bookId);

  if (book) {
    return book.title;
  } else {
    return null;
  }
}

const bookTitle = getBookTitle(2);
console.log(bookTitle); // Output: 'To Kill a Mockingbird'


//b
function getOldBooks() {
    const oldBooks = books.filter((book) => book.year < 1950);
    return oldBooks;
  }
  
  const oldBooks = getOldBooks();
  console.log(oldBooks);
  
//c
  function addGenre() {
    const booksWithGenre = books.map((book) => ({ ...book, genre: 'classic' }));
    return booksWithGenre;
  }
  
  const booksWithGenre = addGenre();
  console.log(booksWithGenre);


//8 a)
const phoneBookABC = new Map();
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');

const phoneBookDEF = new Map();

// Loop through all entries in phoneBookABC
for (const [name, phoneNumber] of phoneBookABC) {
  const firstLetter = name[0];
  
// Check if the first letter of the name is D, E, or F
if (firstLetter === 'D' || firstLetter === 'E' || firstLetter === 'F') {
// Add the entry to phoneBookDEF
phoneBookDEF.set(name, phoneNumber);
  }
}

console.log(phoneBookDEF);


//b
const phoneBookDEF1 = new Map([
    ['David', '0455667788'],
    ['Emily', '0422334455'],
    ['Frank', '0466778899']
  ]);
  
  console.log(phoneBookDEF1);
  

//c 
const phoneBookABC1 = new Map([
    ['Annabelle', '0412312343'],
    ['Barry', '0433221117'],
    ['Caroline', '0455221182']
]);
phoneBookABC1.set('Caroline', '0411223344');

console.log(phoneBookABC1);


//d
function printPhoneBook(contacts) {
    for (const [name, phoneNumber] of contacts) {
      console.log(`${name}: ${phoneNumber}`);
    }
  }
  
  const phoneBookABC2 = new Map([
  ['Annabelle', '0412312343'],
  ['Barry', '0433221117'],
  ['Caroline', '0455221182']
]);
  
  printPhoneBook(phoneBookABC2);


//e 
const phoneBookABC3 = new Map([
    ['Annabelle', '0412312343'],
    ['Barry', '0433221117'],
    ['Caroline', '0455221182']
]);

const phoneBookDEF3 = new Map([
    ['David', '0455667788'],
    ['Emily', '0422334455'],
    ['Frank', '0466778899']
]);

const phoneBook = new Map([...phoneBookABC3, ...phoneBookDEF3]);

console.log(phoneBook);



//9 a)
function sumSalaries(salaries) {
    let totalSalary = 0;
  
    for (const salary of Object.values(salaries)) {
      totalSalary += salary;
    }
  
    return totalSalary;
  }
  
  const salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
  };
  
  const totalSalary = sumSalaries(salaries);
  console.log(totalSalary); // 233000


  //b)
function topEarner(salariess) {
    let highestSalary = 0;
    let topEarnerName = '';
  
    for (const [name, salary] of Object.entries(salariess)) {
      if (salary > highestSalary) {
        highestSalary = salary;
        topEarnerName = name;
      }
    }
  
    return topEarnerName;
  }
  
  const salariess = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
  };
  
  const topEarnerName = topEarner(salariess);
  console.log(topEarnerName); // 'Christina'



  //10 a)
const today = new Date();

const hoursPassed = today.getHours();
const minutesPassed = hoursPassed * 60;

console.log(minutesPassed + ' minutes have passed so far today');


//b)
const todayy = new Date();

const hoursPassedd = todayy.getHours();
const minutesPassedd = hoursPassed * 60;
const secondsPassed = minutesPassed * 60;

console.log(secondsPassed + ' seconds have passed so far today');


//c)
const birthdate = new Date('2000-06-12');
const todayyy = new Date();

let years = todayyy.getFullYear() - birthdate.getFullYear();
let months = todayyy.getMonth() - birthdate.getMonth();
let days = todayyy.getDate() - birthdate.getDate();

// Adjust for negative months or days
if (months < 0 || (months === 0 && days < 0)) {
  years--;
  months += 12;
  if (days < 0) {
    months--;
    days += new Date(todayyy.getFullYear(), today.getMonth(), 0).getDate();
  }
}

console.log(`I am ${years} years, ${months} months and ${days} days old`);


//d
function daysInBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
  
    // Convert dates to UTC timestamps and get difference in milliseconds
    const timestamp1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const timestamp2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    const differenceMs = Math.abs(timestamp2 - timestamp1);
  
    // Convert difference to days and return
    const differenceDays = Math.floor(differenceMs / oneDay);
    return differenceDays;
  }
  
  const date1 = new Date('2022-01-01');
  const date2 = new Date('2022-01-07');
  
  
  const daysBetween = daysInBetween(date1, date2);
  console.log(daysBetween); // 6
  
  


  
  



