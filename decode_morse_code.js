// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// The Morse code table is preloaded for you as a dictionary, feel free to use it:

// Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']


decodeMorse = function(morseCode){
  return morseCode.split('   ').map(word => word.split(' ').map(code => (MORSE_CODE[code] || '')).join('')).join(' ').trim(); 
}

decodeMorse = function(morseCode){
  // split words at 3 spaces 
  return morseCode.split('   ').map(word => {
    // split word into indivisual codes 
    return word.split(' ').map(code => {
      // convert code to letter/digital/symbol 
      return MORSE_CODE[code]; 
    }).join(''); //join letters to a single word 
  }).join(' '); // join all words into a single sentence
}


// this one passes all the cases !!! 

decodeMorse = function(morseCode){
  // splits words at 3 spaces
  return morseCode.split('   ').reduce((sentence, codedWord, index, codeWordArray) => {
    // split codedWord into individual codes
    return sentence + codedWord.split(' ').reduce((word, code) => {
      // convert code to letter/digital/symbol
      return word + (MORSE_CODE[code] || '');
    }, '') + (index < codeWordArray.length - 1 ? ' ' : '');
  }, '').trim();
}