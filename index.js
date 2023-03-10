

  function CheckNumber (number) {
    if (number % 2 === 0) {
      return 'Even number';
    } else {
      return 'Odd number';
    }
  }
  console.log(CheckNumber(2))
 
  
  function Subtraction (a, b) {
    return a - b;
  }
  console.log(Subtraction(3, 4));

  
  for(var index = 1; index < 31; index ++) {
    console.log ("index number": ${index});
    sum = sum + index
    console.log("Sum after each index": $(sum));
  }


  console.log("Hello world")

  const bookJSON = require("./ book.json")
  console.log(bookJSON)
  