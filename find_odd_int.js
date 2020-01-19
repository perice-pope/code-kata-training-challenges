// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {

    var count = 0;
    for(var i = 0; i<A.length; i++){
      for(var j = 0; j<A.length; j++){
        if(A[i] == A[j]){
          count++;
        }
      }
      if(count % 2 != 0 ){
        return A[i];
      }
    }
  
  
  //   for (i=0; i<A.length; i++) {
  //   var x = {}; 
  //   x.push(A[i])
  //   }
  //   return x; 
    
    // iterate thru array
    // pushing items to a hash  
    // key is number and value incruments
    // return the key of the value that is odd. 
    
  }

  // Refactors Below: 

  function findOdd(arr) {
    var result, num = 0;
    
     arr = arr.sort();
     for (var i = 0; i < arr.length; i++) {
       if (arr[i] === arr[i+1]) {
         num++;
       } else {
         num++;
         if (num % 2 != 0) {
           result = arr[i];
           break;
         }
       }
     }
     return result;
    }

    function findOdd(A) {
        //happy coding!
         var trace = {};
        A.forEach(function(x) {
          if (trace[x]) delete trace[x];
          else trace[x] = true;
        });
        return parseInt(Object.keys(trace)[0]);
      }

      function findOdd(A) {
        var x = 0;
        for(var i = 0; i < A.length; i++){
          x = x ^ A[i];
        }
        return x;
      }







