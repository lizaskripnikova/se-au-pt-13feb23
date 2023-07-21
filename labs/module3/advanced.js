//1
function makeCounter() { 
    let currentCount = 0; 
 
    return function() { 
        currentCount++; 
        console.log(currentCount) 
        return currentCount; 
    }; 
} 
 
let counter1 = makeCounter(); 
 
counter1(); // 1 
counter1(); // 2

//a counter2 starts from 1 and increments independently of counter1
let counter2 = makeCounter();

counter2(); // 1
counter2(); // 2


//b
function makeCounter2(startFrom) { 
    let currentCount = startFrom; 
 
    return function() { 
        currentCount++; 
        console.log(currentCount) 
        return currentCount; 
    }; 
}

let counter3 = makeCounter2(5); 
let counter4 = makeCounter2(10); 

counter3(); // 6
counter3(); // 7

counter4(); // 11
counter4(); // 12


//c
function makeCounter3(startFrom, incrementBy) { 
    let currentCount = startFrom; 
 
    return function() { 
        currentCount += incrementBy; 
        console.log(currentCount) 
        return currentCount; 
    }; 
}
let counter5 = makeCounter3(0, 1); // start from 0, increment by 1
let counter6 = makeCounter3(10, 2); // start from 10, increment by 2

counter5(); // 1
counter5(); // 2

counter6(); // 12
counter6(); // 14



//2
function delayMsg(msg) 
{ 
    console.log(`This message will be printed after a delay: ${msg}`) 
} 
 
setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); 
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); 
delayMsg('#4: Not delayed at all') 


/* a)  What order will the four tests below print in? Why? 
#4, #3, #2, #1 
They print in this order because some messages are delayed longer than others
*/


//b)
const delayMsg2 = (msg) => { 
    console.log(`This message will be printed after a delay: ${msg}`) 
};

 
setTimeout(delayMsg2, 100, '#1: Delayed by 100ms'); 
setTimeout(delayMsg2, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg2, 0, '#3: Delayed by 0ms'); 
delayMsg2('#4: Not delayed at all')


//c
setTimeout(delayMsg2, 100, '#1: Delayed by 100ms'); 
setTimeout(delayMsg2, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg2, 0, '#3: Delayed by 0ms'); 
delayMsg2('#4: Not delayed at all')
setTimeout(delayMsg2, 10000, '#5: Delayed by 10000ms'); 


//d 
const delayMsg3 = (msg) => { 
    console.log(`This message will be printed after a delay: ${msg}`) 
  };
  
  setTimeout(delayMsg3, 100, '#1: Delayed by 100ms'); 
  setTimeout(delayMsg3, 20, '#2: Delayed by 20ms'); 
  setTimeout(delayMsg3, 0, '#3: Delayed by 0ms'); 
  delayMsg2('#4: Not delayed at all');
  const fifthTimeout = setTimeout(delayMsg3, 10000, '#5: Delayed by 10000ms'); 
  clearTimeout(fifthTimeout); // prevent the fifth test from executing



//3 a
function debounce(func) {
    let timeoutId;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, 1000);
    }
  }
  
  function printMe() { 
    console.log('printing debounced message') 
  }
  
  printMe = debounce(printMe);
  
  setTimeout(printMe, 100);  
  setTimeout(printMe, 200);  
  setTimeout(printMe, 300);
  

//b 
function printMe() { 
    console.log('printing debounced message') 
  }
  
  printMe = debounce(printMe, 2000); // set the debounce period to 2000ms
  
  setTimeout(printMe, 100);  
  setTimeout(printMe, 500);  
  setTimeout(printMe, 1000);
  setTimeout(printMe, 2000);
  setTimeout(printMe, 3000);
  

//c
function debounce(func, ms) {
    let timeoutId;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, ms);
    }
  }
  
  function printMe2(msg) { 
    console.log(`printing debounced message: ${msg}`) 
  }
  
  printMe = debounce(printMe, 2000); // set the debounce period to 2000ms
  
  setTimeout(() => printMe2("hello"), 100);  
  setTimeout(() => printMe2("world"), 500);  
  setTimeout(() => printMe2("from"), 1000);
  setTimeout(() => printMe2("debounce"), 2000);
  setTimeout(() => printMe2("function"), 3000);

  


/*4 
  function printFibonacci() {
    let a = 0;
    let b = 1;
    
    const intervalId = setInterval(() => {
      console.log(b);
      const nextNumber = a + b;
      a = b;
      b = nextNumber;
    }, 1000);
  
    return intervalId;
  }
  
  const intervalId = printFibonacci();

*/


/*b 
  function printFibonacciTimeouts(n) {
    let a = 0;
    let b = 1;
    let count = 0;

    function printFibonacci() {
      if (count >= n) {
        return;
      }
      console.log(b);
      const temp = a;
      a = b;
      b = temp + b;
      count++;
      setTimeout(printFibonacci, 1000);
    }

    setTimeout(printFibonacci, 1000);
  }
*/


//c Stop the interval after 10 seconds
function printFibonacci(limit) {
  let a = 0;
  let b = 1;
  let count = 0;
    
  const intervalId = setInterval(() => {
    console.log(b);
    const nextNumber = a + b;
    a = b;
    b = nextNumber;
    count++;
    
    if (count === limit) {
      clearInterval(intervalId);
    }
  }, 1000);
  
  return intervalId;
}

const intervalId = printFibonacci(10); // prints the first 10 Fibonacci numbers





/* 5 The reason the setTimeout function fails to execute is because 'this' 
keyword inside the method refers to the global object. 
setTimeout is not bound to any specific object, so 'this' keyword is not set to the car object as expected.
*/
let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {

    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

car.description(); //works
setTimeout(car.description, 200); //fails


//a
setTimeout(function(){
  car.description()
}, 2000);


//b
car = {...car, year: 2023};
console.log(car)


/*c
The delayed description() call will still use the original values 
of the car object and not the new values from the clone. This is 
because the clone is a separate object with its own set of properties, 
and the original car object is not affected by any changes made to the clone.
*/


//d
let describedCar = car.description.bind(car);
setTimeout(describedCar,2000)


//e 
car = {...car, make: "Audi"};
setTimeout(function() {
  car.description()
}, 2000);




//6 
Function.prototype.delay = function(ms) {
  const fn = this;
  return function(...args) {
    setTimeout(() => fn.apply(this, args), ms);
  }
};

//a  comment out b and c, to run a 
/*
function multiply(a, b) {
    console.log( a * b );
}

multiply.delay(1000)(5, 5); // prints 25 after 1000 milliseconds
*/


//b  comment out a and c, to run b 
/*
function multiply(a, b, c) {
  console.log( a * b * c );
}

multiply.delay(1000)(5, 5, 2); // prints 50 after 1000 milliseconds
*/

//c comment out a abd b, to run c 
function multiply(a, b, c, d) {
  console.log( a * b * c * d);
}

multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500 milliseconds





//7
//a
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}


//b
const person1 = new Person('Elizabeth', 22);
console.log(person1.toString()); // Output: Name: Elizabeth, Age: 22

const person2 = new Person('Max', 30);
console.log(person2.toString()); // Output: Name: Max, Age: 30


//c
class Student extends Person {
  constructor(name, age, cohort) {
    super(name, age);
    this.cohort = cohort;
  }

  toString() {
    return `${super.toString()}, Cohort: ${this.cohort}`;
  }
}


//d
const student1 = new Student("Alex", 25, "SE-AU-PT-13FEB23");
console.log(student1.toString()); // Output: Name: Alex, Age: 25, Cohort: SE-AU-PT-13FEB23
const student2 = new Student("Maria", 16, "SE-AU-PT-26AUG22");
console.log(student2.toString()); // Output: Name: Maria, Age: 16, Cohort: SE-AU-PT-26AUG22





//8
class DigitalClock {
  constructor(prefix) {
      this.prefix = prefix;
}
  display() {
      let date = new Date();
      //create 3 variables in one go using array destructuring
      let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
date.getSeconds()];
      if (hours < 10) hours = '0' + hours;
      if (mins < 10) mins = '0' + mins;
      if (secs < 10) secs = '0' + secs;
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
      clearInterval(this.timer);
}
  start() {
      this.display();
      this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock('my clock:')
myClock.start()


//a
  class PrecisionClock extends DigitalClock {
    constructor (prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}
const highPrecisionClock = new PrecisionClock('high-precision clock:', 100);
highPrecisionClock.start();


//b
class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = '07:00') {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    let date = new Date();
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

    if (`${hours}:${mins}` === this.wakeupTime) {
      console.log('Wake Up');
      this.stop();
    }
  }
}

const myAlarmClock = new AlarmClock('my alarm clock:', '08:30');
myAlarmClock.start();




//9 a
function randomDelay() {
  const min = 1000; // 1 second in milliseconds
  const max = 20000; // 20 seconds in milliseconds
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise(resolve => setTimeout(resolve, delay));
}

randomDelay().then(() => console.log('There appears to have been a delay.'));


//b and c 
function randomDelay() {
  const min = 1000; // 1 second in milliseconds
  const max = 20000; // 20 seconds in milliseconds
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  const isEven = delay % 2 === 0;
  return new Promise((resolve, reject) => {
    if (isEven) {
      setTimeout(() => resolve(delay), delay);
    } else {
      reject(`Delay of ${delay}ms is odd and considered a failure`);
    }
  });
}

randomDelay()
  .then(delay => console.log(`Delay of ${delay}ms is even and considered a success`))
  .catch(error => console.error(error));


//10
import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
} });
    return fetchPromise;
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));  