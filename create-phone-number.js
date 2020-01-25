// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.


function createPhoneNumber(numbers){
    numbers.splice(0, 0, '(');
    numbers.splice(4, 0, ')');
    numbers.splice(5, 0, ' ');
    numbers.splice(9, 0, '-');
    return numbers.join('');
  }

  // refactor 

  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

  // one-liner 

  function createPhoneNumber(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
 }