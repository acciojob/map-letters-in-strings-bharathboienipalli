function mapLetters(word) {
  const result = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (result.hasOwnProperty(letter)) {
      result[letter].push(i);
    } else {
      result[letter] = [i];
    }
  }

  return result;
}

console.log(mapLetters("dodo"));    
console.log(mapLetters("froggy"));  
console.log(mapLetters("grapes"));  